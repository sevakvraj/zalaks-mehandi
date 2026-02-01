import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Spa, AutoAwesome, AccessTime } from '@mui/icons-material';

const slideshowData = [
  { src: "/images/bride/bride3.jpg", title: "Royal Bridal Detail", subtitle: "Precision in Every Line" },
  { src: "/images/minimal/minimal3.jpg", title: "Figure Inspired Art", subtitle: "Cultural Elegance" },
  { src: "/images/bridal2.jpg", title: "Traditional Elegance", subtitle: "Timeless Indian Art" },
{src: "/images/palm/palm3.jpg", title: "Cultural Motifs", subtitle: "Heritage Designs" },
  { src: "/images/engagement1.jpg", title: "Engagement Special", subtitle: "Celebrate Love" },
//   { src: "/images/fullhand/fullhand10.jpg", title: "Full Hand Artistry", subtitle: "Intricate Masterpiece" },
    { src: "/images/bride/bride6.jpg", title: "Bridal Designs", subtitle: "Harmonious Patterns" },
    { src: "/images/figures/figure4.jpg", title: "Figure Inspired", subtitle: "Auspicious Designs" },
    { src: "/images/fullhand/fullhand11.jpg", title: "FullHand Mehndi", subtitle: "Positive Energy" },
];


const features = [
    { icon: <Palette sx={{ fontSize: 18 }} />, title: "Intricate", desc: "Fine Lines" },
    { icon: <Spa sx={{ fontSize: 18 }} />, title: "Organic", desc: "100% Natural" },
    { icon: <AutoAwesome sx={{ fontSize: 18 }} />, title: "Dark Stain", desc: "Guaranteed" },
    { icon: <AccessTime sx={{ fontSize: 18 }} />, title: "Lasting", desc: "10+ Days" },
];

// --- LIVE BREATHING ANIMATION ---
const imageVariants = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 1, ease: "easeIn" }
  }
};

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 50 } 
    }
};

const MobileLiveArtistry = () => {
  const [index, setIndex] = useState(0);

  // --- AUTOMATIC SLIDESHOW (3.5 Seconds) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowData.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  const currentImage = slideshowData[index];

  return (
    <section className="relative w-full h-[85vh] bg-[#FFFBF0] overflow-hidden font-sans">
      
      {/* 1. CINEMATIC IMAGE LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
            key={index}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
        >
            <img 
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top center' }}
                onError={(e) => {e.target.src = 'https://via.placeholder.com/400x800?text=Artistry'}}
            />
        </motion.div>
      </AnimatePresence>

      {/* 2. DUAL BLENDS (Top & Bottom Fade) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#FFFBF0] via-[#FFFBF0]/60 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#1a1111] via-[#1a1111]/60 to-transparent z-10 pointer-events-none"></div>

      {/* 3. CONTENT OVERLAY */}
      <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 z-20">
        
        {/* Dynamic Title Text */}
        <motion.div 
            key={currentImage.title}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-10"
        >
            <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-[#D69E2E]/80"></div>
                <p className="text-[#D69E2E] text-[10px] font-bold tracking-[0.4em] uppercase shadow-black drop-shadow-sm">
                    {currentImage.subtitle}
                </p>
                <div className="h-[1px] w-8 bg-[#D69E2E]/80"></div>
            </div>
            <h2 className="text-white font-['Great_Vibes'] text-6xl drop-shadow-2xl tracking-wide">
                {currentImage.title}
            </h2>
        </motion.div>

        {/* 4. ULTRA-GLASS FEATURE BAR (With Black Dividers) */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5">
            {/* Glossy Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
            
            {/* CHANGED: divide-black/20 instead of white/10 */}
            <div className="flex justify-between items-start text-center p-5 divide-x divide-black/20 relative z-10">
                {features.map((feature, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center px-1">
                        <motion.div 
                            whileTap={{ scale: 0.9 }}
                            className="mb-2 text-[#D69E2E] drop-shadow-md"
                        >
                            {feature.icon}
                        </motion.div>
                        <h4 className="text-white text-[9px] font-bold uppercase tracking-widest mb-1 opacity-90">
                            {feature.title}
                        </h4>
                        <p className="text-white/50 text-[8px] font-light leading-snug">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* 5. LIVE PROGRESS BAR */}
            <motion.div 
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className="h-[2px] bg-[#D69E2E] absolute bottom-0 left-0"
            />
        </div>

      </div>
    </section>
  );
};

export default MobileLiveArtistry;