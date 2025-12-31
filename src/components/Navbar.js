import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// I added 'onOpenGallery' to this list below so the button knows what to do
const Navbar = ({ brandName, artistName, whatsapp, instagram, onOpenGallery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className="flex justify-between items-center px-6 py-6 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
        
        {/* LEFT SIDE: Profile Pic + Name */}
        <div className="flex items-center gap-4 z-50">
          
          {/* PROFILE PICTURE */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full p-[2px] bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
            <img 
              src="/images/profile.jpg" 
              alt={artistName} 
              className="w-full h-full object-cover rounded-full border-2 border-white"
              onError={(e) => {e.target.src = 'https://via.placeholder.com/100?text=Zalak'}} 
            />
          </div>

          {/* TEXT DETAILS */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold fancy-font text-mehndi-dark leading-none">
              {brandName}
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-mehndi-light font-semibold mt-1">
              Artist: {artistName}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium text-sm tracking-wide items-center text-gray-700">
          <a href="#home" className="hover:text-mehndi-dark hover:scale-105 transition">HOME</a>
          <a href="#spotlight" className="hover:text-mehndi-dark hover:scale-105 transition">SKILLS</a>
          <a href="#portfolio" className="hover:text-mehndi-dark hover:scale-105 transition">PORTFOLIO</a>
          
          {/* Added the Gallery Button here */}
          <button onClick={onOpenGallery} className="hover:text-mehndi-dark hover:scale-105 transition font-bold text-orange-600">
            FULL GALLERY
          </button>

          <div className="h-6 w-[1px] bg-gray-300 mx-2"></div> {/* Divider */}

          <a href={instagram} target="_blank" rel="noreferrer" className="text-pink-600 font-bold hover:scale-110 transition flex items-center gap-2">
            <span>Instagram</span>
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            WhatsApp
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden z-50 text-3xl text-mehndi-dark focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-2xl z-40 md:hidden"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-mehndi-light">Home</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-mehndi-light">Portfolio</a>
            <a href="#spotlight" onClick={() => setIsMenuOpen(false)} className="hover:text-mehndi-light">Skills</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-mehndi-light">Contact</a>
            
            {/* Added Gallery Button for Mobile */}
            <button onClick={() => { onOpenGallery(); setIsMenuOpen(false); }} className="hover:text-mehndi-light font-bold text-orange-600">Full Gallery</button>
            
            <div className="flex gap-6 mt-8">
              <a href={instagram} className="px-6 py-3 bg-pink-100 text-pink-600 rounded-full font-bold">Instagram</a>
              <a href={whatsapp} className="px-6 py-3 bg-green-100 text-green-600 rounded-full font-bold">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;