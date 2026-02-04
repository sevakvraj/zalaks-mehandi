import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material';
import { WhatsApp, Phone, Menu as AutoAwesome } from '@mui/icons-material';

// --- IMPORTS ---
import Footer from './components/Footer';
import MobileFullGallery from './components/MobileFullGallery'; 
import MobileNavbar from './components/MobileNavbar';
import MobileLiveArtistry from './components/MobileLiveArtistry'; // <--- NEW IMPORT
import MobileTestimonials from './components/MobileTestimonials'; // <--- NEW IMPORT
import MobileAbout from './components/MobileAbout'; // <--- NEW IMPORT
import MobilePackages from './components/MobilePackages';
import MobileFAQ from './components/MobileFAQ';


// --- BRAND DATA ---
const BRAND_NAME = "Zalak's Mehandi";
const PHONE_NUMBER = "+91 93166 45981";
const WHATSAPP_LINK = `https://wa.me/9193166459810`;
const INSTAGRAM_LINK = "https://www.instagram.com/mehndi.by_zalak/?utm_source=qr&igsh=MXdpcm91ejgwZW1pdw%3D%3D#";
const LOCATION = "Nadiad, Gujarat";

const categories = ["All", "Bridal", "Engagement", "Vastu", "Baby Shower", "Simple", "Wrist Length"];

const mobileImages = [
  { id: 1, category: "Bridal", src: "/images/bridal1.jpg", title: "Royal Bridal" },
  { id: 2, category: "Bridal", src: "/images/bridal2.jpg", title: "Full Leg Design" },
  { id: 7, category: "Wrist Length", src: "/images/Palm/palm1.jpg", title: "Intricate Palm" },
  { id: 3, category: "Engagement", src: "/images/engagement1.jpg", title: "Ring Ceremony" },
  { id: 8, category: "Wrist Length", src: "/images/Palm/palm2.jpg", title: "Heavy Wrist" },
  { id: 4, category: "Vastu", src: "/images/vastu1.jpg", title: "Vastu Art" },
  { id: 5, category: "Baby Shower", src: "/images/babyshower1.jpg", title: "Baby Shower" },
  { id: 6, category: "Simple", src: "/images/simple1.jpg", title: "Minimalist" },
  { id: 9, category: "Legs", src: "/images/legs/legs1.jpg", title: "Cultural Motifs" },
];

const MobileView = () => {
  const [filter, setFilter] = useState("All");
  const [showGallery, setShowGallery] = useState(false);

  const filteredImages = filter === "All" 
    ? mobileImages 
    : mobileImages.filter(img => img.category === filter);

  const leftColumn = filteredImages.filter((_, i) => i % 2 === 0);
  const rightColumn = filteredImages.filter((_, i) => i % 2 !== 0);

  const handleOpenGallery = () => {
    setShowGallery(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#4A2c2A] font-sans">
      
      {/* FULL GALLERY OVERLAY */}
      <AnimatePresence>
        {showGallery && (
            <div className="fixed inset-0 z-[10000] bg-[#FFFBF0] overflow-hidden">
                <MobileFullGallery onBack={() => setShowGallery(false)} />
            </div>
        )}
      </AnimatePresence>

      {/* MOBILE NAVBAR */}
      <MobileNavbar 
        brandName={BRAND_NAME} 
        instagramLink={INSTAGRAM_LINK}
        whatsappLink={WHATSAPP_LINK}
        onOpenGallery={handleOpenGallery}
      />

      {/* HERO SECTION */}
      <div className="relative w-full h-[75vh] overflow-hidden" id="home">
        <motion.div 
            initial={{ scale: 1.1 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
        >
            <img src="/images/bridal1.jpg" alt="Hero" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF0] via-[#FFFBF0]/60 to-transparent flex flex-col justify-end pb-12 px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center relative z-10"
            >
                <div className="inline-block px-4 py-1 border border-[#4A2c2A]/30 rounded-full bg-white/30 backdrop-blur-md mb-4 shadow-sm">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4A2c2A]">{LOCATION}</span>
                </div>
                <h1 className="font-['Great_Vibes'] text-6xl text-[#4A2c2A] drop-shadow-sm mb-2">Artistry & Soul</h1>
                <p className="text-sm font-light text-[#4A2c2A]/80 max-w-xs mx-auto leading-relaxed">Intricate, high-definition Mehndi designs for Brides, Baby Showers, and Festivals.</p>
            </motion.div>
        </div>
      </div>

      {/* --- NEW LIVE ARTISTRY SECTION (Added Here) --- */}
      <MobileLiveArtistry />

      {/* CATEGORY BUBBLES */}
      <div className="px-4 py-8 relative z-20">
        <div className="text-center mb-6">
            <h3 className="font-['Great_Vibes'] text-4xl text-[#4A2c2A]">Latest Creations</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
                    filter === cat 
                    ? 'bg-[#4A2c2A] text-white border-[#4A2c2A] shadow-md scale-105' 
                    : 'bg-white text-[#4A2c2A] border-[#4A2c2A]/20'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MASONRY GRID */}
      <div className="px-4 pb-10" id="portfolio">
        <div className="flex gap-3 items-start">
            <div className="flex flex-col gap-3 w-1/2">
                <AnimatePresence>
                    {leftColumn.map((img) => (
                        <motion.div key={img.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative rounded-xl overflow-hidden shadow-sm">
                            <img src={img.src} alt={img.title} className="w-full h-auto object-cover" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className="flex flex-col gap-3 w-1/2 pt-6"> 
                <AnimatePresence>
                    {rightColumn.map((img) => (
                        <motion.div key={img.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative rounded-xl overflow-hidden shadow-sm">
                            <img src={img.src} alt={img.title} className="w-full h-auto object-cover" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>

        <div className="mt-16 mb-12 text-center">
             <Button onClick={handleOpenGallery} variant="contained" endIcon={<AutoAwesome />} sx={{ backgroundColor: '#4A2c2A', borderRadius: '50px', padding: '14px 40px', fontSize: '0.9rem', letterSpacing: '0.1em', boxShadow: '0 15px 30px -5px rgba(74, 44, 42, 0.4)', zIndex: 10 }}>
                View Full Gallery
            </Button>
        </div>
      </div>

      <MobilePackages whatsapp={WHATSAPP_LINK} />

      <MobileAbout />
      
      <MobileFAQ />

      <MobileTestimonials />

      {/* CATEGORY BUBBLES */}
      <div className="px-4 py-8 relative z-20"></div>

      {/* FOOTER */}
      <Footer brandName={BRAND_NAME} phone={PHONE_NUMBER} whatsapp={WHATSAPP_LINK} instagram={INSTAGRAM_LINK} location={LOCATION} />

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-6 left-4 right-4 z-50 bg-[#2b1d1d]/95 backdrop-blur-md border border-[#D69E2E]/20 rounded-full p-2 flex justify-between shadow-2xl" id="contact">
        <a href={WHATSAPP_LINK} className="flex-1 bg-[#25D366] text-white rounded-full py-3 flex justify-center items-center font-bold mr-2 text-sm shadow-lg no-underline">
          <WhatsApp className="mr-2 text-lg" /> Chat
        </a>
        <a href={`tel:${PHONE_NUMBER}`} className="flex-1 bg-[#D69E2E] text-[#2b1d1d] rounded-full py-3 flex justify-center items-center font-bold text-sm shadow-lg no-underline">
          <Phone className="mr-2 text-lg" /> Call Now
        </a>
      </div>
    </div>
  );
};

export default MobileView;