import React from 'react';
import { motion } from 'framer-motion';
import { Verified } from '@mui/icons-material';

const stats = [
  { number: "3+", label: "Years Exp." },
  { number: "150+", label: "Happy Clients" },
  { number: "100%", label: "Organic" },
];

const MobileAbout = () => {
  return (
    <section className="py-16 px-5 bg-[#FFFBF0] relative overflow-hidden">
      
      {/* BACKGROUND DECORATION (Watermark) */}
      <div className="absolute top-10 right-[-50px] text-[150px] font-['Great_Vibes'] text-[#D69E2E]/5 rotate-12 pointer-events-none z-0">
        Artist
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        
        {/* --- 1. HEADER --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
        >
            <p className="text-[#D69E2E] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#D69E2E]"></span>
                The Face Behind the Art
            </p>
            <h2 className="text-5xl font-['Great_Vibes'] text-[#4A2c2A]">
                Hello, I'm <span className="text-[#D69E2E]">Zalak</span>
            </h2>
        </motion.div>

        {/* --- 2. MAGAZINE STYLE LAYOUT --- */}
        <div className="relative mb-12">
            
            {/* The Artist Photo */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-4/5 h-[350px] rounded-t-[100px] rounded-b-[20px] overflow-hidden border-4 border-white shadow-2xl relative z-10"
            >
                <img 
                    src="/images/profile.jpg" // REPLACE WITH ARTIST PHOTO
                    alt="Zalak - Mehndi Artist"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/300x400?text=Artist+Photo'}}
                />
                
                {/* Floating "Verified" Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg flex items-center gap-1">
                    <Verified sx={{ color: '#25D366', fontSize: 18 }} />
                    <span className="text-[10px] font-bold text-[#4A2c2A] uppercase">Verified Artist</span>
                </div>
            </motion.div>

            {/* Decorative Gold Frame (Behind) */}
            <div className="absolute top-6 left-[20%] w-4/5 h-[350px] border-2 border-[#D69E2E]/30 rounded-t-[100px] rounded-b-[20px] z-0"></div>

            {/* "Hand Signed" Name Animation */}
            <motion.svg 
                viewBox="0 0 200 60" 
                className="absolute -bottom-10 -right-4 w-48 z-20"
                initial="hidden"
                whileInView="visible"
            >
               {/* This is a visual representation of a signature */}
               <motion.path
                  d="M10,40 Q50,10 90,40 T180,30"
                  fill="none"
                  stroke="#D69E2E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
                  }}
               />
               <text x="40" y="55" fontFamily="Great Vibes" fontSize="30" fill="#4A2c2A">Zalak</text>
            </motion.svg>
        </div>

        {/* --- 3. BIO TEXT --- */}
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#4A2c2A]/80 text-sm leading-relaxed mb-8 font-light"
        >
            "Mehndi is more than just a tradition; it’s an emotion. With over <strong className="text-[#D69E2E]">3 years of experience</strong>, I specialize in creating intricate, bespoke designs that tell <i>your</i> unique story. From traditional bridal motifs to modern chic patterns, I pour my heart into every cone."
        </motion.p>

        {/* --- 4. GOLDEN STATS ROW --- */}
        <div className="grid grid-cols-3 gap-4 border-t border-b border-[#D69E2E]/20 py-6">
            {stats.map((stat, i) => (
                <div key={i} className="text-center">
                    <h4 className="text-2xl font-bold text-[#4A2c2A]">{stat.number}</h4>
                    <p className="text-[9px] uppercase tracking-wider text-[#D69E2E] font-bold">{stat.label}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default MobileAbout;