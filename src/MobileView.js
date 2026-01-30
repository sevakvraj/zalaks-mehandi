import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Chip } from '@mui/material';
import { WhatsApp, Phone, Menu as MenuIcon, Close } from '@mui/icons-material';

// --- MOBILE ASSETS & DATA ---
const categories = ["All", "Bridal", "Arabic", "Engagement", "Simple"];

// Using your existing images structure
const mobileImages = [
  { id: 1, src: "/images/bridal1.jpg", category: "Bridal", title: "Royal Bridal" },
  { id: 2, src: "/images/bridal2.jpg", category: "Bridal", title: "Full Hands" },
  { id: 3, src: "/images/engagement1.jpg", category: "Engagement", title: "Ring Ceremony" },
  { id: 4, src: "/images/vastu1.jpg", category: "Bridal", title: "Vastu Art" },
  { id: 5, src: "/images/babyshower1.jpg", category: "Engagement", title: "Baby Shower" },
  { id: 6, src: "/images/simple1.jpg", category: "Simple", title: "Elegant Minimal" },
];

const MobileView = () => {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  // Filter Logic
  const filteredImages = filter === "All" 
    ? mobileImages 
    : mobileImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#2b1d1d] text-[#e5d3b3] font-['Poppins'] pb-24">
      
      {/* 1. TOP APP BAR (Sticky) */}
      <div className="sticky top-0 z-50 bg-[#2b1d1d]/95 backdrop-blur-sm border-b border-[#e5d3b3]/10 px-4 py-3 flex justify-between items-center shadow-lg">
        <h1 className="font-['Great_Vibes'] text-2xl text-[#d4af37]">Zalak's Mehandi</h1>
        <IconButton onClick={() => setMenuOpen(true)}>
          <MenuIcon sx={{ color: '#e5d3b3' }} />
        </IconButton>
      </div>

      {/* 2. FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="fixed inset-0 z-[60] bg-[#1a1111] flex flex-col items-center justify-center space-y-8"
          >
            <IconButton onClick={() => setMenuOpen(false)} sx={{ position: 'absolute', top: 20, right: 20 }}>
              <Close sx={{ color: '#e5d3b3', fontSize: 30 }} />
            </IconButton>
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl font-light tracking-widest">HOME</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-2xl font-light tracking-widest">PORTFOLIO</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-2xl font-light tracking-widest">CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION (Instagram Story Style) */}
      <div className="relative h-[60vh] w-full overflow-hidden" id="home">
        <img src="/images/bridal1.jpg" alt="Hero" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b1d1d] via-transparent to-transparent" />
        <div className="absolute bottom-10 left-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-2"
          >
            Professional Artist
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-['Great_Vibes'] text-5xl text-white"
          >
            Artistry & Soul
          </motion.h2>
        </div>
      </div>

      {/* 4. SCROLLABLE FILTERS (Like Instagram) */}
      <div className="sticky top-[60px] z-40 bg-[#2b1d1d] py-4 pl-4 overflow-x-auto whitespace-nowrap scrollbar-hide border-b border-[#e5d3b3]/5">
        <div className="flex space-x-3 pr-4">
          {categories.map((cat) => (
            <Chip 
              key={cat} label={cat} onClick={() => setFilter(cat)}
              sx={{
                backgroundColor: filter === cat ? '#d4af37' : 'rgba(229, 211, 179, 0.1)',
                color: filter === cat ? '#2b1d1d' : '#e5d3b3',
                fontFamily: 'Poppins', border: '1px solid #d4af37',
                '&:hover': { backgroundColor: '#c5a028' }
              }}
            />
          ))}
        </div>
      </div>

      {/* 5. PINTEREST GRID GALLERY (2 Columns) */}
      <div className="p-3 grid grid-cols-2 gap-3" id="portfolio">
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative rounded-xl overflow-hidden shadow-lg h-64 bg-black/20"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-white font-light">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 6. STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-6 left-4 right-4 z-50 bg-[#1a1111]/90 backdrop-blur-md border border-[#d4af37]/30 rounded-2xl p-2 flex justify-between shadow-2xl" id="contact">
        <a 
          href="https://wa.me/919316645981" 
          className="flex-1 bg-[#25D366] text-white rounded-xl py-3 flex justify-center items-center font-bold mr-2 text-sm shadow-lg no-underline"
        >
          <WhatsApp className="mr-2 text-lg" /> Chat
        </a>
        <a 
          href="tel:+919316645981" 
          className="flex-1 bg-[#d4af37] text-[#2b1d1d] rounded-xl py-3 flex justify-center items-center font-bold text-sm shadow-lg no-underline"
        >
          <Phone className="mr-2 text-lg" /> Call Now
        </a>
      </div>

    </div>
  );
};

export default MobileView;