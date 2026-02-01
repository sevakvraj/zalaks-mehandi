import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, FormatQuote, Verified, NavigateNext, NavigateBefore } from '@mui/icons-material';
import { IconButton } from '@mui/material';

// --- DATA SOURCE ---
const testimonials = [
  { name: "Priya Patel", location: "Ahmedabad", text: "Zalak's designs are absolutely stunning! The stain was so dark and lasted for weeks.", rating: 5 },
  { name: "Riya Shah", location: "Nadiad", text: "The most patient and creative artist I've met. My bridal mehndi was exactly what I dreamed of!", rating: 5 },
  { name: "Anjali Mehta", location: "Vadodara", text: "Professional, organic henna, and incredible speed. Highly recommend her.", rating: 5 },
  { name: "Sneha Gupta", location: "Anand", text: "Her figures and portraits are so realistic. Everyone at the wedding asked about my mehndi!", rating: 5 },
  { name: "Kavita Joshi", location: "Surat", text: "The details in the lotus motifs were insane. Zalak Di makes you feel so comfortable.", rating: 5 },
  { name: "Mira Rajput", location: "Nadiad", text: "Best decision for my engagement. The color came out reddish-maroon within 24 hours!", rating: 5 },
  { name: "Tanvi Desai", location: "Mumbai", text: "Flew her down for my wedding, and it was worth every penny. She is a true artist.", rating: 5 },
  { name: "Neha Trivedi", location: "Gandhinagar", text: "My hands looked like a painting. The intricacy is unmatched.", rating: 5 },
  { name: "Pooja Soni", location: "Rajkot", text: "She customized the design to include my husband's name perfectly.", rating: 5 },
  { name: "Ishita Verma", location: "Vadodara", text: "Great speed without compromising quality. Very professional behavior.", rating: 5 },
];

const MobileTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- AUTO-PLAY LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getIndex = (offset) => {
    return (activeIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section className="py-16 relative overflow-hidden min-h-[650px] flex flex-col items-center bg-[#FFFBF0]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] bg-[#D69E2E]/10 blur-3xl rounded-full pointer-events-none z-0"></div>

      {/* --- FLOATING PARTICLES (UPDATED FOR VISIBILITY) --- */}
      {[...Array(15)].map((_, i) => (
        <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
                backgroundColor: '#B38728', // Darker Bronze-Gold for contrast
                width: Math.random() * 6 + 3 + 'px', // Random size 3px-9px
                height: Math.random() * 6 + 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
            }}
            animate={{ 
                y: [0, -120], // Float Upwards
                opacity: [0, 0.8, 0], // Fade In -> Visible -> Fade Out
                scale: [0.5, 1.2, 0.5]
            }}
            transition={{ 
                duration: Math.random() * 4 + 3, // 3s to 7s duration
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 2 // Random start time
            }}
        />
      ))}

      {/* HEADER */}
      <div className="text-center mb-12 px-4 z-20 relative">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-[#D69E2E]"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#D69E2E] uppercase">Real Stories</span>
            <div className="h-[1px] w-8 bg-[#D69E2E]"></div>
        </motion.div>
        <h2 className="text-5xl font-['Great_Vibes'] text-[#4A2c2A] drop-shadow-sm">Client Love</h2>
      </div>

      {/* --- 3D CAROUSEL --- */}
      <div className="relative w-full h-[420px] flex justify-center items-center perspective-1000 z-20">
        
        <AnimatePresence mode='popLayout'>
            {[ -1, 0, 1 ].map((offset) => {
                const index = getIndex(offset);
                const review = testimonials[index];
                
                // ANIMATION STATES
                let animateState = {};
                
                if (offset === 0) {
                    // CENTER CARD
                    animateState = {
                        zIndex: 30,
                        scale: 1,
                        x: 0,
                        rotateY: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        boxShadow: "0 20px 50px -10px rgba(214, 158, 46, 0.3)"
                    };
                } else {
                    // SIDE CARDS
                    animateState = {
                        zIndex: 10,
                        scale: 0.85,
                        x: offset === -1 ? "-105%" : "105%",
                        rotateY: offset === -1 ? 25 : -25, 
                        opacity: 0.6,
                        filter: "blur(1px)",
                        boxShadow: "none"
                    };
                }

                return (
                    <motion.div
                        key={`${index}`} 
                        initial={false} 
                        animate={animateState}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }} 
                        drag={offset === 0 ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset }) => {
                            if (offset.x > 50) handlePrev();
                            if (offset.x < -50) handleNext();
                        }}
                        className="absolute w-[290px] h-[360px] bg-white border border-[#D69E2E]/30 p-6 rounded-[30px] flex flex-col justify-between cursor-grab active:cursor-grabbing"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* JEWEL BADGE */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#D69E2E] to-[#B38728] text-white rounded-full shadow-lg flex items-center justify-center z-30 ring-4 ring-[#FFFBF0]">
                            <FormatQuote sx={{ fontSize: 24 }} />
                        </div>

                        <div className="mt-8 z-20">
                             {/* GLOWING STARS */}
                             <div className="flex justify-center gap-1 mb-5">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                                    >
                                        <Star sx={{ color: '#FFD700', fontSize: 20 }} />
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-[#4A2c2A] text-[15px] italic leading-relaxed text-center font-medium">
                                "{review.text}"
                            </p>
                        </div>

                        <div className="border-t border-[#D69E2E]/10 pt-4 flex items-center justify-center gap-3 z-20">
                             <div className="w-10 h-10 rounded-full bg-[#4A2c2A] text-[#FFFBF0] flex items-center justify-center text-sm font-bold shadow-md">
                                {review.name[0]}
                            </div>
                            <div className="text-left">
                                <div className="flex items-center gap-1">
                                    <h4 className="text-[#4A2c2A] text-xs font-bold uppercase tracking-wide">{review.name}</h4>
                                    <Verified sx={{ fontSize: 14, color: '#25D366' }} />
                                </div>
                                <p className="text-[#D69E2E] text-[10px] font-bold tracking-wide">{review.location}</p>
                            </div>
                        </div>

                    </motion.div>
                );
            })}
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-10 mt-6 z-20">
        <IconButton onClick={handlePrev} sx={{ border: '1px solid #D69E2E', color: '#D69E2E' }}>
            <NavigateBefore />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ border: '1px solid #D69E2E', color: '#D69E2E' }}>
            <NavigateNext />
        </IconButton>
      </div>

    </section>
  );
};

export default MobileTestimonials;