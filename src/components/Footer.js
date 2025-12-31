import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// --- IMPORT ICONS ---
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = ({ brandName, phone, whatsapp, instagram, location }) => {
  const canvasRef = useRef(null);

  // --- INTERACTIVE CONSTELLATION ENGINE ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // --- CONFIGURATION ---
    const particleCount = 120; 
    const connectionDistance = 110; 
    const mouseDistance = 250; 

    // Mouse tracking
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    // Resize handler
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; 
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 0.5; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseDistance - distance) / mouseDistance;
            const directionX = forceDirectionX * force * 3;
            const directionY = forceDirectionY * force * 3;
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.fillStyle = '#FFD700'; // GOLD Color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize Particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 215, 0, ${1 - distance / connectionDistance})`; 
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  // --- RENDER ---
  return (
    <section id="contact" className="relative pt-24 pb-12 overflow-hidden">
      
      {/* 1. BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-blue-950 to-purple-950 z-0"></div>
      
      {/* 2. INTERACTIVE CANVAS LAYER */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-1 opacity-60" 
      />
      
      {/* 3. TEXTURE OVERLAY */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/henna.png')] mix-blend-overlay z-1 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        
        {/* --- ARTIST SECTION --- */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl fancy-font text-yellow-400 mb-8 drop-shadow-lg text-center"
        >
          Let's Connect
        </motion.h3>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-yellow-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden group mb-16"
        >
          {/* Shine Effect */}
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent transform -skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-white mb-2 tracking-wide">{brandName}</h4>
            <p className="text-teal-200 text-xs uppercase tracking-[0.3em] mb-8 font-semibold">Professional Artist</p>

            <div className="flex flex-col gap-4 mb-8 text-gray-200">
              
              {/* PHONE ROW */}
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-yellow-500/50 transition duration-300">
                <PhoneIcon sx={{ color: '#FFD700' }} /> {/* Gold Icon */}
                <span className="font-mono text-lg">{phone}</span>
              </div>

              {/* LOCATION ROW */}
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-red-500/50 transition duration-300">
                <LocationOnIcon sx={{ color: '#FF4444' }} /> {/* Red Icon */}
                <span className="font-sans text-lg">{location}</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-1 gap-3 relative z-20">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition flex items-center justify-center gap-2">
                <WhatsAppIcon />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={instagram} target="_blank" rel="noreferrer" className="py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold rounded-lg shadow-lg transition flex items-center justify-center gap-2">
                  <InstagramIcon fontSize="small" />
                  Instagram
                </a>
                <a href={`tel:${phone}`} className="py-3 bg-white text-teal-900 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <PhoneIcon fontSize="small" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Golden Corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-500 opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-500 opacity-50"></div>
        </motion.div>

        {/* --- DIVIDER --- */}
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent mb-12"></div>

        {/* --- DEVELOPER SPOTLIGHT (Blended perfectly) --- */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-teal-500/30 transition-all duration-300">
          
          {/* Developer Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/images/developer.jpg" 
                alt="Vraj Sevak" 
                className="w-16 h-16 rounded-full border-2 border-teal-400 object-cover shadow-lg"
                onError={(e) => {e.target.src = 'https://via.placeholder.com/150?text=VS'}} 
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
            </div>
            <div className="text-left">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-1">Website Developed By</p>
              <h5 className="text-white text-xl font-bold leading-none">Vraj Sevak</h5>
              <p className="text-gray-400 text-xs mt-1">Full Stack Developer</p>
            </div>
          </div>

          {/* Social Links (Inline SVGs for no-dependency icons) */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/vraj-sevak" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white text-gray-300 transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/vrajsevak" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#333] hover:text-white text-gray-300 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>

            {/* Instagram (Developer) */}
            <a href="https://instagram.com/your_id" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white text-gray-300 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <p className="mt-8 text-teal-200/40 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} {brandName}. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;