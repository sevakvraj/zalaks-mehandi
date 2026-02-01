import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Avatar } from '@mui/material';
import { Close, AutoAwesome, Verified } from '@mui/icons-material';

// --- DATA SOURCE ---
const rawGalleryData = [
  { category: "Wrist Length", img: "/images/Palm/palm1.jpg", title: "Simple Touch" },
  { category: "Bride", img: "/images/bride/bride1.jpg", title: "Royal Dulhan" },
  { category: "Minimal", img: "/images/minimal/minimal6.jpg", title: "Simple Touch" },
  { category: "Full Hand", img: "/images/fullhand/fullhand11.jpg", title: "Heavy Marwari" },
  { category: "Legs", img: "/images/legs/legs7.jpg", title: "Royal Anklet" },
  { category: "Full Hand", img: "/images/fullhand/fullhand3.jpg", title: "Heavy Marwari" },
  { category: "Wrist Length", img: "/images/Palm/palm3.jpg", title: "Simple Touch" },
  { category: "Bride", img: "/images/bride/bride2.jpg", title: "Wedding Vows" },
  { category: "Minimal", img: "/images/minimal/minimal2.jpg", title: "Simple Touch" },
  { category: "Arabic", img: "/images/arabic/arabic3.jpg", title: "Gulf Style" },
  { category: "Bride", img: "/images/bride/bride3.jpg", title: "Wedding Vows" },
  { category: "Minimal", img: "/images/minimal/minimal7.jpg", title: "Simple Touch" },
  { category: "Wrist Length", img: "/images/Palm/palm4.jpg", title: "Simple Touch" },
  { category: "Full Hand", img: "/images/fullhand/fullhand4.jpg", title: "Heavy Marwari" },
  { category: "Bride", img: "/images/bride/bride8.jpg", title: "Wedding Vows" },
  { category: "Minimal", img: "/images/minimal/minimal11.jpg", title: "Simple Touch" },
  { category: "Wrist Length", img: "/images/Palm/palm2.jpg", title: "Simple Touch" },
  { category: "Wrist Length", img: "/images/Palm/palm5.jpg", title: "Simple Touch" },
  { category: "Full Hand", img: "/images/fullhand/fullhand1.jpg", title: "Elbow Magic" },
  { category: "Minimal", img: "/images/minimal/minimal3.jpg", title: "Simple Touch" },
  { category: "Full Hand", img: "/images/fullhand/fullhand5.jpg", title: "Heavy Marwari" },
  { category: "Legs", img: "/images/legs/legs8.jpg", title: "Royal Anklet" },
  { category: "Minimal", img: "/images/minimal/minimal8.jpg", title: "Simple Touch" },
  { category: "Full Hand", img: "/images/fullhand/fullhand2.jpg", title: "Heavy Marwari" },
  { category: "Bride", img: "/images/bride/bride4.jpg", title: "Wedding Vows" },
  { category: "Bride", img: "/images/bride/bride9.jpg", title: "Wedding Vows" },
  { category: "Wrist Length", img: "/images/Palm/palm6.jpg", title: "Simple Touch" },
  { category: "Arabic", img: "/images/arabic/arabic1.jpg", title: "Modern Bel" },
  { category: "Minimal", img: "/images/minimal/minimal9.jpg", title: "Simple Touch" },
  { category: "Full Hand", img: "/images/fullhand/fullhand6.jpg", title: "Heavy Marwari" },
  { category: "Arabic", img: "/images/arabic/arabic2.jpg", title: "Gulf Style" },
  { category: "Wrist Length", img: "/images/Palm/palm7.jpg", title: "Simple Touch" },
  { category: "Legs", img: "/images/legs/legs1.jpg", title: "Bridal Feet" },
  { category: "Full Hand", img: "/images/fullhand/fullhand7.jpg", title: "Heavy Marwari" },
  { category: "Arabic", img: "/images/arabic/arabic4.jpg", title: "Gulf Style" },
  { category: "Legs", img: "/images/legs/legs2.jpg", title: "Anklet Art" },
  { category: "Minimal", img: "/images/minimal/minimal4.jpg", title: "Simple Touch" },
  { category: "Legs", img: "/images/legs/legs3.jpg", title: "Lotus Feet" },
  { category: "Full Hand", img: "/images/fullhand/fullhand8.jpg", title: "Heavy Marwari" },
  { category: "Bride", img: "/images/bride/bride5.jpg", title: "Wedding Vows" },
  { category: "Legs", img: "/images/legs/legs4.jpg", title: "Royal Anklet" },
  { category: "Minimal", img: "/images/minimal/minimal5.jpg", title: "Simple Touch" },
  { category: "Full Hand", img: "/images/fullhand/fullhand9.jpg", title: "Heavy Marwari" },
  { category: "Wrist Length", img: "/images/Palm/palm8.jpg", title: "Simple Touch" },
  { category: "Legs", img: "/images/legs/legs5.jpg", title: "Royal Anklet" },
  { category: "Arabic", img: "/images/arabic/arabic5.jpg", title: "Gulf Style" },
  { category: "Full Hand", img: "/images/fullhand/fullhand10.jpg", title: "Heavy Marwari" },
  { category: "Legs", img: "/images/legs/legs6.jpg", title: "Royal Anklet" },
  { category: "Bride", img: "/images/bride/bride10.jpg", title: "Wedding Vows" },
  { category: "Wrist Length", img: "/images/Palm/palm9.jpg", title: "Simple Touch" },
  { category: "Figures", img: "/images/figures/figure1.jpg", title: "Radha Krishna" },
  { category: "Bride", img: "/images/bride/bride6.jpg", title: "Wedding Vows" },
  { category: "Figures", img: "/images/figures/figure2.jpg", title: "Groom Portrait" },
  { category: "Figures", img: "/images/figures/figure4.jpg", title: "Radha Krishna" },
  { category: "Figures", img: "/images/figures/figure3.jpg", title: "Radha Krishna" },
  { category: "Wrist Length", img: "/images/Palm/palm10.jpg", title: "Simple Touch" },
  { category: "Minimal", img: "/images/minimal/minimal1.jpg", title: "Simple Touch" },
  { category: "Bride", img: "/images/bride/bride7.jpg", title: "Wedding Vows" },
];

const categories = ["All", "Bride", "Full Hand", "Arabic", "Legs", "Figures", "Minimal", "Wrist Length"];

const MobileFullGallery = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // --- LOGIC TO SPLIT CATEGORIES INTO 2 ROWS ---
  const midPoint = Math.ceil(categories.length / 2);
  const row1 = categories.slice(0, midPoint);
  const row2 = categories.slice(midPoint);

  const filteredItems = activeCategory === "All" 
    ? rawGalleryData 
    : rawGalleryData.filter(item => item.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-[#FFFBF0] overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {/* GLOBAL STYLES FOR ANIMATIONS & SCROLLBAR HIDING */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        @keyframes gradient-xy {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-xy 6s ease infinite;
        }
      `}</style>
      
      {/* 1. PREMIUM LIVE GRADIENT HEADER */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-[#FFFBF0] via-[#FFF5E1] to-[#FFFBF0] animate-gradient-x border-b border-[#D69E2E]/20 px-4 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
            <Avatar 
                src="/images/profile.jpg" 
                sx={{ width: 45, height: 45, border: '2px solid #D69E2E', boxShadow: '0 4px 10px rgba(214, 158, 46, 0.3)' }} 
                alt="Zalak"
            >
                Z 
            </Avatar>
            <div>
                <h2 className="font-['Great_Vibes'] text-xl text-[#4A2c2A] leading-none drop-shadow-sm">Zalak's Mehandi</h2>
                <div className="flex items-center gap-1 mt-1">
                    <Verified sx={{ fontSize: 12, color: '#D69E2E' }} />
                    <p className="text-[9px] text-[#D69E2E] tracking-widest uppercase font-bold">Past Work</p>
                </div>
            </div>
        </div>
        <IconButton onClick={onBack} sx={{ border: '1px solid #4A2c2A/20', backgroundColor: '#fff' }}>
          <Close sx={{ color: '#4A2c2A' }} />
        </IconButton>
      </div>

      {/* 2. CATEGORIES (TRANSPARENT + GLOW + TAP ANIMATION) */}
      <div className="sticky top-[70px] z-40 bg-gradient-to-b from-[#FFFBF0] via-[#FFFBF0] to-transparent pb-6 pt-4 px-4">
        
        {/* ROW 1 */}
        <div className="flex justify-center space-x-3 overflow-x-auto whitespace-nowrap scrollbar-hide mb-3">
          {row1.map((cat) => (
            <motion.button 
              key={cat} 
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveCategory(cat)} 
              className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-[#2b1d1d] text-[#e5d3b3] border border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105' 
                : 'bg-transparent text-[#4A2c2A] border border-[#4A2c2A]/30 hover:border-[#4A2c2A]/60'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        
        {/* ROW 2 */}
        <div className="flex justify-center space-x-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {row2.map((cat) => (
            <motion.button 
              key={cat} 
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveCategory(cat)} 
              className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-[#2b1d1d] text-[#e5d3b3] border border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105' 
                : 'bg-transparent text-[#4A2c2A] border border-[#4A2c2A]/30 hover:border-[#4A2c2A]/60'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* 3. MASONRY GRID (With Tap Effects) */}
      <div className="px-3 pb-24 relative" style={{ columnCount: 2, columnGap: '10px' }}>
        
        {/* Background Decorative Blob */}
        <div className="absolute top-20 left-0 w-full h-96 bg-[#D69E2E]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div 
              key={index}
              layout
              onClick={() => setSelectedImage(item)} 
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mb-3 break-inside-avoid relative rounded-xl overflow-hidden shadow-md bg-white group cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-auto object-cover block"
                loading="lazy"
                onError={(e) => {e.target.src = 'https://via.placeholder.com/300x400?text=Zalak+Design'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 flex flex-col justify-end p-2">
                <p className="text-[8px] text-[#FFD700] uppercase font-bold tracking-widest">{item.category}</p>
                <p className="text-xs text-white font-light">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 4. FULL SCREEN VIEW */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)} 
            >
                <IconButton 
                    onClick={() => setSelectedImage(null)} 
                    sx={{ position: 'absolute', top: 20, right: 20, color: 'white', border: '1px solid white/30', zIndex: 210 }}
                >
                    <Close />
                </IconButton>

                <div className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
                    <motion.img 
                        initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                        src={selectedImage.img} 
                        className="w-full rounded-lg shadow-2xl border border-white/10"
                    />
                    
                    {/* PROFESSIONAL WATERMARK */}
                    <div className="absolute bottom-3 right-3 pointer-events-none opacity-60">
                        <div className="text-right">
                            <h1 className="font-['Great_Vibes'] text-xl text-white/90 drop-shadow-md">Zalak's Mehandi</h1>
                            <p className="text-[8px] text-white/70 tracking-widest uppercase">Professional Artist</p>
                        </div>
                    </div>

                    <div className="absolute top-[-40px] left-0 text-white text-left">
                        <p className="text-sm font-bold text-[#D69E2E] uppercase tracking-widest">{selectedImage.category}</p>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <div className="pb-10 text-center text-[#4A2c2A]/40 text-xs uppercase tracking-widest flex justify-center items-center gap-2">
        <AutoAwesome sx={{ fontSize: 14 }} /> End of Collection <AutoAwesome sx={{ fontSize: 14 }} />
      </div>

    </motion.div>
  );
};

export default MobileFullGallery;