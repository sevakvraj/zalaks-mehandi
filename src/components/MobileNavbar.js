import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Avatar, Button } from '@mui/material';
import { Menu, Close, Verified, AutoAwesome, Instagram, WhatsApp } from '@mui/icons-material';

const MobileNavbar = ({ brandName, instagramLink, whatsappLink, onOpenGallery }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the menu items
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.1 }
    },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* --- FLOATING GLASS NAVBAR --- */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-[#FFFBF0]/80 backdrop-blur-lg border-b border-[#D69E2E]/20 px-4 py-3 flex justify-between items-center shadow-sm"
      >
        {/* BRAND IDENTITY */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar 
              src="/images/profile.jpg" 
              alt="Zalak"
              sx={{ width: 42, height: 42, border: '2px solid #D69E2E', boxShadow: '0 0 10px rgba(214, 158, 46, 0.3)' }} 
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#FFFBF0] rounded-full"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="font-['Great_Vibes'] text-2xl text-[#4A2c2A] leading-none drop-shadow-sm">
              {brandName}
            </h1>
            <div className="flex items-center gap-1">
              <Verified sx={{ fontSize: 10, color: '#0095F6' }} />
              <p className="text-[8px] text-[#4A2c2A]/60 font-bold tracking-[0.2em] uppercase">Verified Artist</p>
            </div>
          </div>
        </div>

        {/* MENU TOGGLE BUTTON */}
        <IconButton 
          onClick={() => setIsOpen(true)} 
          sx={{ 
            color: '#4A2c2A', 
            border: '1px solid rgba(74, 44, 42, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <Menu />
        </IconButton>
      </motion.nav>

      {/* --- FULL SCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-[#FFFBF0] flex flex-col"
          >
            {/* CLOSE BUTTON AREA */}
            <div className="flex justify-end p-5">
              <IconButton 
                onClick={() => setIsOpen(false)}
                sx={{ backgroundColor: '#eee', color: '#4A2c2A', '&:hover': { backgroundColor: '#ddd'} }}
              >
                <Close />
              </IconButton>
            </div>

            {/* MENU LINKS CONTAINER */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 relative overflow-hidden">
              
              {/* Decorative Background Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D69E2E]/10 rounded-full blur-3xl -z-10"></div>

              {['Home', 'Portfolio', 'Contact'].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  variants={itemVariants}
                  className="text-4xl font-['Great_Vibes'] text-[#4A2c2A] hover:text-[#D69E2E] transition-colors"
                >
                  {item}
                </motion.a>
              ))}

              {/* SPECIAL FULL GALLERY BUTTON */}
              <motion.div variants={itemVariants}>
                <Button 
                  onClick={() => { onOpenGallery(); setIsOpen(false); }}
                  variant="contained"
                  endIcon={<AutoAwesome />}
                  sx={{ 
                    borderRadius: '50px', 
                    padding: '12px 40px', 
                    backgroundColor: '#4A2c2A',
                    fontSize: '1rem',
                    textTransform: 'none',
                    boxShadow: '0 10px 20px rgba(74, 44, 42, 0.2)'
                  }}
                >
                  Full Gallery
                </Button>
              </motion.div>

              {/* SOCIAL LINKS ROW */}
              <motion.div variants={itemVariants} className="flex gap-4 mt-8">
                <IconButton href={instagramLink} target="_blank" sx={{ color: '#E1306C', border: '1px solid #E1306C' }}>
                  <Instagram />
                </IconButton>
                <IconButton href={whatsappLink} target="_blank" sx={{ color: '#25D366', border: '1px solid #25D366' }}>
                  <WhatsApp />
                </IconButton>
              </motion.div>

            </div>

            {/* MENU FOOTER */}
            <div className="p-6 text-center">
              <p className="text-[10px] text-[#4A2c2A]/40 tracking-widest uppercase">
                Designed by Vraj Sevak
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;