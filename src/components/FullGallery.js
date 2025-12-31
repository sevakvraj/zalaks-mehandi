import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT THE SLEEK FLUID NAVBAR ---
import FluidGalleryNavbar from './FluidGalleryNavbar'; 

// --- 1. RAW DATA ---
const rawGalleryData = [
  // --- BRIDE FOLDER ---
  { category: "Bride", img: "/images/bride/bride1.jpg", title: "Royal Dulhan", desc: "Signature bridal portrait." },
  { category: "Minimal", img: "/images/minimal/minimal6.jpg", title: "Simple Touch", desc: "Just fingers and mandala." },
  { category: "Bride", img: "/images/bride/bride2.jpg", title: "Wedding Vows", desc: "Detailed storytelling design." },
  { category: "Minimal", img: "/images/minimal/minimal2.jpg", title: "Simple Touch", desc: "Just fingers and mandala." },
  { category: "Arabic", img: "/images/arabic/arabic3.jpg", title: "Gulf Style", desc: "Unique layout with spaces." },
  { category: "Bride", img: "/images/bride/bride3.jpg", title: "Wedding Vows", desc: "Detailed storytelling design." },

  // --- FULL HAND FOLDER ---
  { category: "Full Hand", img: "/images/fullhand/fullhand1.jpg", title: "Elbow Magic", desc: "Symmetrical traditional patterns." },
  { category: "Minimal", img: "/images/minimal/minimal3.jpg", title: "Simple Touch", desc: "Just fingers and mandala." },
  { category: "Full Hand", img: "/images/fullhand/fullhand2.jpg", title: "Heavy Marwari", desc: "Dense design with rich stain." },
  { category: "Bride", img: "/images/bride/bride4.jpg", title: "Wedding Vows", desc: "Detailed storytelling design." },

  // --- ARABIC FOLDER ---
  { category: "Arabic", img: "/images/arabic/arabic1.jpg", title: "Modern Bel", desc: "Free-flowing floral vines." },
  { category: "Arabic", img: "/images/arabic/arabic2.jpg", title: "Gulf Style", desc: "Unique layout with spaces." },

  // --- LEGS FOLDER ---
  { category: "Legs", img: "/images/legs/legs1.jpg", title: "Bridal Feet", desc: "Matching lotus motifs." },
  { category: "Arabic", img: "/images/arabic/arabic4.jpg", title: "Gulf Style", desc: "Unique layout with spaces." },
  { category: "Legs", img: "/images/legs/legs2.jpg", title: "Anklet Art", desc: "Jewelry-inspired design." },
  { category: "Minimal", img: "/images/minimal/minimal4.jpg", title: "Simple Touch", desc: "Just fingers and mandala." },
  { category: "Legs", img: "/images/legs/legs3.jpg", title: "Lotus Feet", desc: "Traditional elephant motifs." },
  { category: "Bride", img: "/images/bride/bride5.jpg", title: "Wedding Vows", desc: "Detailed storytelling design." },
  { category: "Legs", img: "/images/legs/legs4.jpg", title: "Royal Anklet", desc: "Heavy Payal style." },
  { category: "Minimal", img: "/images/minimal/minimal5.jpg", title: "Simple Touch", desc: "Just fingers and mandala." },
  { category: "Legs", img: "/images/legs/legs5.jpg", title: "Royal Anklet", desc: "Heavy Payal style." },
  { category: "Arabic", img: "/images/arabic/arabic5.jpg", title: "Gulf Style", desc: "Unique layout with spaces." },
  { category: "Legs", img: "/images/legs/legs6.jpg", title: "Royal Anklet", desc: "Heavy Payal style." },

  // --- FIGURES FOLDER ---
  { category: "Figures", img: "/images/figures/figure1.jpg", title: "Radha Krishna", desc: "Divine love story." },
  { category: "Bride", img: "/images/bride/bride6.jpg", title: "Wedding Vows", desc: "Detailed storytelling design." },
  { category: "Figures", img: "/images/figures/figure2.jpg", title: "Groom Portrait", desc: "Realistic sketching." },
  { category: "Figures", img: "/images/figures/figure4.jpg", title: "Radha Krishna", desc: "Divine love story." },
  { category: "Figures", img: "/images/figures/figure3.jpg", title: "Radha Krishna", desc: "Divine love story." },

  // --- MINIMAL FOLDER ---
  { category: "Minimal", img: "/images/minimal/minimal1.jpg", title: "Simple Touch", desc: "Just fingers and mandala." },
  { category: "Bride", img: "/images/bride/bride7.jpg", title: "Wedding Vows", desc: "Detailed storytelling design." },
];

// --- 2. AUTO-GENERATE IDs ---
const galleryData = rawGalleryData.map((item, index) => ({
  ...item,
  id: index + 1
}));

const categories = ["All", "Bride", "Full Hand", "Arabic", "Legs", "Figures", "Minimal"];

const FullGallery = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FFFBF0] text-[#4A2c2A] font-sans" // Use cream bg for whole page
    >
      
      {/* --- RENDER THE SLEEK FLUID NAVBAR --- */}
      <FluidGalleryNavbar 
        onBack={onBack} 
        brandName="Zalak's Mehandi" 
      />

      {/* --- ELEGANT CATEGORY TABS --- */}
      <div className="py-6 flex justify-center items-center overflow-x-auto whitespace-nowrap px-4 scrollbar-hide">
        <div className="bg-white/50 backdrop-blur-sm p-1 rounded-full shadow-sm border border-[#E0D8C8]">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-6 py-2 mx-1 text-sm rounded-full transition-all duration-300 font-medium
              ${activeCategory === cat 
                ? 'bg-[#2b1d1d] text-[#FFD700] shadow-md scale-105' // Active: Dark Brown + Gold Text
                : 'text-[#5D3A33] hover:bg-[#5D3A33]/10'}`} // Inactive: Transparent + Hover effect
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- MASONRY "MESH" LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 pb-20 mt-2">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative w-full overflow-hidden rounded-xl shadow-lg border border-white bg-white cursor-default break-inside-avoid mb-6 hover:shadow-2xl transition-shadow duration-300"
              >
                
                {/* IMAGE LAYER */}
                <div className="relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/400x600?text=Art+Loading'}}
                  />
                  
                  {/* HOVER OVERLAY (Gradient) */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-t from-[#2b1d1d]/90 via-[#2b1d1d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    <span className="text-[#FFD700] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-75">
                      {item.category}
                    </span>
                    <h3 className="text-white text-3xl fancy-font drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                      {item.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#FFD700] mt-3 rounded-full transform scale-0 group-hover:scale-100 transition duration-500 delay-150"></div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

    </motion.div>
  );
};

export default FullGallery;