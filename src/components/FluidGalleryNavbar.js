import React from 'react';
import { AppBar, Toolbar, Avatar, Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FluidGalleryNavbar = ({ onBack, brandName }) => {
  return (
    <AppBar 
      position="relative" // SCROLLS WITH PAGE
      elevation={5} 
      sx={{ 
        background: '#2b1d1d', 
        overflow: 'hidden', 
        height: { xs: '80px', md: '100px' }, // REDUCED HEIGHT (Sleek)
        borderBottom: '1px solid rgba(255, 215, 0, 0.1)'
      }}
    >
      
      {/* --- 1. LIVE FLUID BACKGROUND (Compacted for shorter height) --- */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Blob 1: Gold */}
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -20, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute', top: '-50%', left: '10%', 
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 60%)', 
            filter: 'blur(50px)', borderRadius: '50%', opacity: 0.8
          }}
        />
        {/* Blob 2: Red */}
        <motion.div
          animate={{ x: [0, -100, 50, 0], y: [0, 30, -30, 0], scale: [1, 1.3, 0.9, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute', bottom: '-50%', right: '0%', 
            width: '450px', height: '450px',
            background: 'radial-gradient(circle, rgba(255, 68, 68, 0.4) 0%, transparent 60%)',
            filter: 'blur(60px)', borderRadius: '50%', opacity: 0.7
          }}
        />
      </div>

      {/* --- 2. NAVBAR CONTENT --- */}
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between', 
          position: 'relative', 
          zIndex: 10,
          px: { xs: 2, md: 6 },
          height: '100%'
        }}
      >
        
        {/* LEFT: AVATAR & BRAND */}
        <Box display="flex" alignItems="center" gap={2}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Avatar 
              src="/images/profile.jpg" 
              sx={{ 
                width: { xs: 45, md: 60 }, // Smaller Avatar
                height: { xs: 45, md: 60 }, 
                border: '2px solid #FFD700', 
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }} 
            />
          </motion.div>

          <Box>
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: 'Great Vibes, cursive', 
                lineHeight: 1, 
                color: '#FFF', 
                fontSize: { xs: '1.6rem', md: '2.2rem' }, // Sleeker Font Size
                textShadow: '0 2px 5px rgba(0,0,0,0.3)'
              }}
            >
              {brandName || "Zalak's Mehandi"}
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#FFD700', 
                letterSpacing: '0.3em', 
                textTransform: 'uppercase', 
                fontWeight: 500,
                fontSize: { xs: '0.5rem', md: '0.65rem' },
                display: 'block',
                opacity: 0.8
              }}
            >
              Past Work
            </Typography>
          </Box>
        </Box>

        {/* RIGHT: ELEGANT CLOSE BUTTON (Thinner, cleaner) */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            onClick={onBack}
            sx={{ 
              color: '#FFF', 
              border: '1px solid rgba(255,255,255,0.4)', // Thin subtle border
              borderRadius: '30px',
              textTransform: 'uppercase',
              fontWeight: '500', // Not bold
              fontSize: { xs: '0.65rem', md: '0.75rem' },
              padding: { xs: '6px 18px', md: '8px 24px' },
              letterSpacing: '0.15em',
              background: 'transparent', 
              transition: 'all 0.3s ease',
              '&:hover': {
                 background: 'rgba(255,255,255,0.1)', // Soft white hover
                 borderColor: '#FFF',
                 boxShadow: '0 0 15px rgba(255,255,255,0.2)',
              }
            }}
          >
            Close Gallery ✕
          </Button>
        </motion.div>

      </Toolbar>
    </AppBar>
  );
};

export default FluidGalleryNavbar;