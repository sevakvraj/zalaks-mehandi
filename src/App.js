import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material'; // MUI Import
import InstagramIcon from '@mui/icons-material/Instagram'; // MUI Icon
import CollectionsIcon from '@mui/icons-material/Collections'; // MUI Icon

// --- IMPORTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FullGallery from './components/FullGallery';

// --- BRAND DETAILS ---
const BRAND_NAME = "Zalak's Mehandi";
const ARTIST_NAME = "Zalak Sevak";
const PHONE_NUMBER = "+91 93166 459810";
const WHATSAPP_LINK = `https://wa.me/9193166459810`;
const INSTAGRAM_LINK = "https://www.instagram.com/mehndi.by_zalak/?utm_source=qr&igsh=MXdpcm91ejgwZW1pdw%3D%3D#";
const LOCATION = "Nadiad, Gujarat";

// --- IMAGES ---
const spotlightImages = [
  "/images/bridal1.jpg",
  "/images/bridal2.jpg",
  "/images/engagement1.jpg",
  "/images/vastu1.jpg", 
  "/images/babyshower1.jpg"
];

const portfolioData = [
  { id: 1, category: "Bridal", img: "/images/bridal1.jpg", title: "Royal Bridal Hands" },
  { id: 2, category: "Bridal", img: "/images/bridal2.jpg", title: "Full Leg Design" },
  { id: 3, category: "Engagement", img: "/images/engagement1.jpg", title: "Ring Ceremony Special" },
  { id: 4, category: "Vastu", img: "/images/vastu1.jpg", title: "Traditional Vastu Art" },
  { id: 5, category: "Baby Shower", img: "/images/babyshower1.jpg", title: "Baby Shower Special" },
  { id: 6, category: "Simple", img: "/images/simple1.jpg", title: "Elegant Minimalist" },
];

const categories = ["All", "Bridal", "Engagement", "Vastu", "Baby Shower", "Simple"];

// --- ✨ COMPONENT: GOLD DUST PARTICLES (High Animation) ---
const HeroParticles = () => {
  const particles = Array.from({ length: 25 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: Math.random() * 500, x: Math.random() * window.innerWidth }}
          animate={{ 
            opacity: [0, 0.8, 0], 
            y: [Math.random() * 500, -50], 
            scale: [0, 1.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 5, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear" 
          }}
          className="absolute w-1.5 h-1.5 bg-[#D69E2E] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGalleryPage, setShowGalleryPage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#4A2c2A] font-sans overflow-x-hidden">
      
      <Navbar 
        brandName={BRAND_NAME}
        artistName={ARTIST_NAME}
        whatsapp={WHATSAPP_LINK}
        instagram={INSTAGRAM_LINK}
        onOpenGallery={() => setShowGalleryPage(true)}
      />

      {/* --- 2. HERO SECTION (High Animation + MUI) --- */}
      <header id="home" className="relative flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden min-h-[90vh]">
        
        {/* 1. ANIMATED BACKGROUND ELEMENTS */}
        <HeroParticles /> {/* Gold Dust */}
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 20, repeat: Infinity }} 
          className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl -z-10 opacity-60" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }} 
          transition={{ duration: 15, repeat: Infinity }} 
          className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl -z-10 opacity-60" 
        />
        
        {/* 2. HERO CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="z-10 relative max-w-4xl"
        >
          {/* LOCATION TAG */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 border border-[#D69E2E] rounded-full text-xs text-[#D69E2E] font-bold tracking-[0.2em] uppercase bg-white/50 backdrop-blur-sm shadow-sm"
          >
            Based in {LOCATION}
          </motion.span>
          
          {/* --- THE REQUESTED LINE BREAK (SPACER) --- */}
          <div className="h-8"></div> 

          {/* MAIN TITLE (Staggered Animation) */}
          <h2 className="text-6xl md:text-9xl mb-4 fancy-font text-[#4A2c2A] leading-tight drop-shadow-sm">
            {BRAND_NAME.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.2), duration: 0.8 }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.h3 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="text-3xl md:text-5xl mb-8 font-light"
          >
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D69E2E] via-[#F4C430] to-[#D69E2E] bg-[length:200%_auto] animate-shimmer">
               Artistry & Soul
             </span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-[#5D3A33]/80 max-w-xl mx-auto mb-10 font-light leading-relaxed"
          >
            Providing intricate, high-definition Mehndi designs for Brides, Baby Showers, and Festivals in Nadiad & beyond.
          </motion.p>

          {/* MUI BUTTONS (High Quality Interactions) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            {/* BUTTON 1: DARK */}
            <Button
              variant="contained"
              href="#portfolio"
              startIcon={<CollectionsIcon />}
              sx={{
                backgroundColor: '#4A2c2A',
                color: '#FFF',
                padding: '12px 32px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px rgba(74, 44, 42, 0.3)',
                '&:hover': {
                  backgroundColor: '#2b1d1d',
                  transform: 'scale(1.05)',
                  boxShadow: '0 15px 25px rgba(74, 44, 42, 0.4)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              See Designs
            </Button>

            {/* BUTTON 2: GRADIENT (Instagram) */}
            <Button
              variant="contained"
              href={INSTAGRAM_LINK}
              target="_blank"
              startIcon={<InstagramIcon />}
              sx={{
                background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)',
                color: '#FFF',
                padding: '12px 32px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px rgba(253, 29, 29, 0.3)',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 15px 25px rgba(253, 29, 29, 0.4)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Visit Instagram
            </Button>
          </motion.div>
        </motion.div>
      </header>

      {/* --- 3. SKILLS SECTION --- */}
      <section id="spotlight" className="py-24 px-4 relative overflow-hidden bg-orange-50">
        <div className="hidden md:block absolute top-10 left-10 w-40 h-40 border-t-[6px] border-l-[6px] border-[#D69E2E]/20 rounded-tl-[60px]"></div>
        <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-b-[6px] border-r-[6px] border-[#D69E2E]/20 rounded-br-[60px]"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 text-left z-10">
            <h3 className="text-6xl fancy-font text-[#4A2c2A] mb-2">Live Artistry</h3>
            <h4 className="text-2xl font-bold mb-6 text-[#D69E2E] tracking-[0.2em] uppercase border-l-4 border-[#4A2c2A] pl-4">Precision in Every Line</h4>
            <p className="text-gray-700 mb-8 text-lg leading-loose font-light">
              Mehandi is not just a design; it's a feeling. Watch how Zalak transforms a simple hand into a canvas of tradition. With over 5 years of experience in <strong>{LOCATION}</strong>, every cone is applied with steady hands and creative vision.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-white border border-[#D69E2E]/30 rounded-xl shadow-sm text-center hover:shadow-lg transition transform hover:-translate-y-1">
                 <div className="text-4xl mb-2">🌿</div>
                 <div className="font-bold text-[#4A2c2A] text-xs tracking-widest">100% ORGANIC</div>
               </div>
               <div className="p-6 bg-white border border-[#D69E2E]/30 rounded-xl shadow-sm text-center hover:shadow-lg transition transform hover:-translate-y-1">
                 <div className="text-4xl mb-2">✨</div>
                 <div className="font-bold text-[#4A2c2A] text-xs tracking-widest">DARK STAIN</div>
               </div>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex-1 w-full flex justify-center relative z-10">
            <div className="relative w-[320px] h-[480px] md:w-[400px] md:h-[550px]">
                <div className="absolute -inset-4 border-[3px] border-[#D69E2E]/40 rounded-t-full rounded-b-3xl"></div>
                <div className="absolute -inset-2 border-[4px] border-[#4A2c2A] rounded-t-full rounded-b-3xl shadow-2xl z-20 pointer-events-none"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#4A2c2A] rotate-45 z-30 flex items-center justify-center border-4 border-white shadow-lg">
                    <div className="w-8 h-8 border-2 border-[#D69E2E]"></div>
                </div>
                <div className="relative w-full h-full rounded-t-full rounded-b-3xl overflow-hidden bg-black border-[6px] border-white">
                  <AnimatePresence mode='wait'>
                    <motion.img 
                      key={currentSlide}
                      src={spotlightImages[currentSlide]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt="Zalak Artistry"
                      onError={(e) => {e.target.src = 'https://via.placeholder.com/400x550?text=Loading...'}}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 z-10 pointer-events-none"></div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PORTFOLIO GALLERY */}
      <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-5xl fancy-font mb-3 text-[#4A2c2A]">Latest Creations</h3>
          <p className="text-gray-500">Explore the gallery of happiness</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-[#4A2c2A]/10 ${activeCategory === cat ? 'bg-[#4A2c2A] text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-orange-100'}`}>{cat}</button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id} 
                layout 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                transition={{ duration: 0.4 }} 
                className="group relative h-[500px] w-full overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-gray-50 cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/400x500?text=Zalak+Design'}} 
                  />
                </div>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#2b1d1d]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-75">
                      {item.category}
                    </span>
                    <h3 className="text-white text-3xl fancy-font drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                      {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#FFD700] mt-3 rounded-full transform scale-0 group-hover:scale-100 transition duration-500 delay-150"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <button onClick={() => setShowGalleryPage(true)} className="px-8 py-3 bg-[#4A2c2A] text-white rounded-full font-bold shadow-lg hover:bg-orange-800 transition">
            View Full Gallery Page →
          </button>
        </div>
      </section>

      {/* 5. FOOTER */}
      <Footer 
        brandName={BRAND_NAME} 
        phone={PHONE_NUMBER} 
        whatsapp={WHATSAPP_LINK} 
        instagram={INSTAGRAM_LINK} 
        location={LOCATION} 
      />
    </div>
  );
}