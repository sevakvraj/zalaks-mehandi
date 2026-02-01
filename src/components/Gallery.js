import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- EXPANDED IMAGE DATA ---
// You can add as many images as you want here!
const allProjects = [
  { src: "/images/bridal1.jpg", title: "Royal Bridal Detail", subtitle: "Precision in Every Line" },
  { src: "/images/minimal/minimal3.jpg", title: "Figure Inspired Art", subtitle: "Cultural Elegance" },
  { src: "/images/bridal2.jpg", title: "Traditional Elegance", subtitle: "Timeless Indian Art" },
{src: "/images/palm/palm3.jpg", title: "Cultural Motifs", subtitle: "Heritage Designs" },
  { src: "/images/engagement1.jpg", title: "Engagement Special", subtitle: "Celebrate Love" },
  { src: "/images/fullhand/fullhand10.jpg", title: "Full Hand Artistry", subtitle: "Intricate Masterpiece" },
    { src: "/images/bride/bride6.jpg", title: "Bridal Designs", subtitle: "Harmonious Patterns" },
    { src: "/images/figures/figure4.jpg", title: "Figure Inspired", subtitle: "Auspicious Designs" },
    { src: "/images/fullhand/fullhand11.jpg", title: "FullHand Mehndi", subtitle: "Positive Energy" },
  // Add more photos here easily...
];

const categories = ["All", "Bridal", "Engagement", "Vastu", "Baby Shower", "Simple"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 max-w-7xl mx-auto bg-[#FFFBF0]">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-16">
        <h3 className="text-6xl fancy-font mb-4 text-[#4A2c2A]">Zalak's Gallery</h3>
        <p className="font-serif text-[#D69E2E] tracking-[0.2em] text-sm uppercase">
          Explore the Happiness
        </p>
        <div className="w-24 h-1 bg-[#D69E2E] mx-auto mt-6 rounded-full opacity-50"></div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)} 
            className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 border border-[#4A2c2A]
            ${activeCategory === cat 
              ? 'bg-[#4A2c2A] text-white shadow-lg transform scale-105' 
              : 'bg-transparent text-[#4A2c2A] hover:bg-[#4A2c2A]/10'}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id} 
              layout 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.8 }} 
              transition={{ duration: 0.4 }} 
              className="group relative cursor-pointer"
            >
              {/* IMAGE CARD */}
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" 
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/400?text=Image+Missing'}}
                />
                
                {/* HOVER OVERLAY (Displays Description) */}
                <div className="absolute inset-0 bg-[#4A2c2A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <h4 className="font-serif text-2xl text-[#D69E2E] mb-2 border-b border-[#D69E2E] pb-2">
                    {item.title}
                  </h4>
                  <p className="text-white text-sm font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="text-[10px] tracking-widest uppercase text-gray-300 border border-gray-400 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

export default Gallery;