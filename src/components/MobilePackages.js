import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, WhatsApp, AutoAwesome, Diamond, WorkspacePremium, Groups, NavigateNext, NavigateBefore } from '@mui/icons-material';
import { IconButton } from '@mui/material';

// --- EXACT CONTENT PRESERVED ---
const packages = [
  {
    tier: "",
    icon: <Groups sx={{ fontSize: 28 }} />, 
    title: "Siders & Guests",
    price: "As Per Length",
    subtitle: "Palm / Wrist / Elbow",
    features: ["Choice of Length", "Modern & Arabic Designs", "Group Hourly Rates Available", "100% Organic Henna"],
    popular: false,
    theme: {
      border: "border-gray-300",
      bgGradient: "bg-gradient-to-r from-gray-50 to-gray-200", 
      titleColor: "text-gray-600",
      button: "bg-gray-700",
      iconColor: "#757575",
      shadow: "shadow-xl shadow-gray-200"
    }
  },
  {
    tier: "",
    icon: <WorkspacePremium sx={{ fontSize: 32 }} />, 
    title: "Classic Bridal",
    price: "₹3,000*",
    subtitle: "Elbow Length + Heavy Feet",
    features: ["Starting from ₹3,000","Elbow Length (Both Hands)", "Heavy Intricate Feet", "Traditional Indian Motifs", "Dark, Long-Lasting Stain"],
    popular: true, 
    theme: {
      border: "border-[#D69E2E]",
      bgGradient: "bg-gradient-to-r from-[#FFFBF0] to-[#FDE68A]", 
      titleColor: "text-[#D69E2E]",
      button: "bg-gradient-to-r from-[#D69E2E] to-[#B38728]",
      iconColor: "#D69E2E",
      shadow: "shadow-2xl shadow-[#D69E2E]/20"
    }
  },
  {
    tier: "",
    icon: <Diamond sx={{ fontSize: 28 }} />, 
    title: "Royal Figures",
    price: "As Per Figures",
    subtitle: "Elbow Length + Figures",
    features: ["Shoulder/Full Arm Length", "Bride-Groom Figures", "Lotus & Elephant Motifs", "Love Story Depiction"],
    popular: false,
    theme: {
      border: "border-cyan-300",
      bgGradient: "bg-gradient-to-r from-cyan-50 to-blue-50", 
      titleColor: "text-cyan-700",
      button: "bg-cyan-800",
      iconColor: "#00838f",
      shadow: "shadow-xl shadow-cyan-200"
    }
  }
];

const MobilePackages = ({ whatsapp }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with GOLD (Index 1)

  // --- MANUAL NAVIGATION ONLY (No useEffect/Interval) ---

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % packages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const getIndex = (offset) => {
    return (activeIndex + offset + packages.length) % packages.length;
  };

  return (
    <section className="py-16 relative overflow-hidden min-h-[750px] flex flex-col items-center bg-[#FFFBF0]">
      
      {/* --- LIVE BACKGROUND ANIMATION (Golden Wealth) --- */}
      <div className="absolute inset-0 z-0">
          {/* Soft Gradient Pulse */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] bg-[#D69E2E]/5 blur-3xl rounded-full"
          />
          
          {/* Floating Sparkles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-[#D69E2E]/30 blur-[1px]"
                initial={{ 
                    x: Math.random() * window.innerWidth, 
                    y: Math.random() * 800, 
                    scale: 0 
                }}
                animate={{ 
                    y: [null, -100], 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                }}
                transition={{ 
                    duration: Math.random() * 5 + 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5
                }}
                style={{ width: Math.random() * 6 + 2, height: Math.random() * 6 + 2 }}
            />
          ))}
      </div>

      {/* HEADER */}
      <div className="text-center mb-10 px-4 z-20 relative">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 mb-2">
            {/* <div className="h-[1px] w-8 bg-[#D69E2E]"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#D69E2E] uppercase">Investment</span>
            <div className="h-[1px] w-8 bg-[#D69E2E]"></div> */}
        </motion.div>
        <h2 className="text-5xl font-['Great_Vibes'] text-[#4A2c2A]">Packages</h2>
      </div>

      {/* --- 3D SLIDING CAROUSEL --- */}
      <div className="relative w-full h-[520px] flex justify-center items-center perspective-1000 z-20">
        
        <AnimatePresence mode='popLayout'>
            {[ -1, 0, 1 ].map((offset) => {
                const index = getIndex(offset);
                const pkg = packages[index];
                
                // ANIMATION VARIANTS
                let animateState = {};
                
                if (offset === 0) {
                    // CENTER CARD (Active)
                    animateState = {
                        zIndex: 30,
                        scale: 1,
                        x: 0,
                        rotateY: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    };
                } else {
                    // SIDE CARDS (Folded)
                    animateState = {
                        zIndex: 10,
                        scale: 0.85,
                        x: offset === -1 ? "-105%" : "105%",
                        rotateY: offset === -1 ? 25 : -25, // 3D Tilt
                        opacity: 0.6,
                        filter: "blur(2px)",
                    };
                }

                return (
                    <motion.div 
                        key={`${index}`}
                        initial={false}
                        animate={animateState}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                        drag={offset === 0 ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset }) => {
                            if (offset.x > 50) handlePrev();
                            if (offset.x < -50) handleNext();
                        }}
                        className={`absolute w-[320px] rounded-[30px] ${pkg.theme.shadow} cursor-grab active:cursor-grabbing`}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* --- INNER CARD CONTENT (PRESERVED) --- */}
                        <div className={`relative overflow-hidden bg-white rounded-[30px] border-2 ${pkg.theme.border}`}>
                            
                            {/* HEADER STRIP */}
                            <div className={`${pkg.theme.bgGradient} p-6 text-center relative`}>
                                
                                {/* Shimmer for Gold */}
                                {pkg.popular && (
                                    <motion.div 
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none"
                                    />
                                )}

                                <div className={`${pkg.theme.titleColor} mb-2`}>{pkg.icon}</div>
                                <p className={`text-[10px] font-bold tracking-[0.3em] uppercase ${pkg.theme.titleColor} mb-1 opacity-80`}>
                                    {pkg.tier}
                                </p>
                                
                                <h3 className={`text-3xl font-['Great_Vibes'] ${pkg.theme.titleColor} drop-shadow-sm`}>
                                    {pkg.title}
                                </h3>
                            </div>

                            {/* PRICE & DETAILS */}
                            <div className="p-6 flex flex-col items-center">
                                
                                <div className="text-center mb-4">
                                    <p className="text-3xl font-bold text-[#4A2c2A]">{pkg.price}</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                                        {pkg.subtitle}
                                    </p>
                                </div>

                                <div className="h-[1px] w-3/4 bg-gray-100 mb-4"></div>

                                <ul className="space-y-3 w-full mb-6">
                                    {pkg.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-left text-sm text-[#4A2c2A]/80 font-medium">
                                            <CheckCircle sx={{ fontSize: 18, color: pkg.theme.iconColor, marginTop: '2px' }} />
                                            <span className="leading-tight">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.a 
                                    whileTap={{ scale: 0.98 }}
                                    href={`${whatsapp}?text=Hello, I am interested in the *${pkg.tier} - ${pkg.title}* package.`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-full py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-lg flex items-center justify-center gap-2 text-white transition-all ${pkg.theme.button}`}
                                >
                                    <WhatsApp sx={{ fontSize: 18 }} /> Book Now
                                </motion.a>

                                {pkg.popular && (
                                    <div className="absolute top-4 right-4 animate-pulse">
                                        <AutoAwesome sx={{ color: '#D69E2E', fontSize: 20 }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-10 mt-4 z-20">
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

export default MobilePackages;