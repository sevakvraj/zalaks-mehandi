import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Add, Remove, Spa, Public, AccessTime, InvertColors, Event, Quiz } from '@mui/icons-material';

const faqs = [
  {
    icon: <Spa sx={{ fontSize: 22 }} />,
    question: "Is your Mehandi Organic?",
    answer: "Absolutely. I mix my own henna paste using premium Sojat powder, eucalyptus oil, and lemon sugar. Zero chemicals, zero PPD, safe for sensitive skin."
  },
  {
    icon: <Public sx={{ fontSize: 22 }} />,
    question: "Do you travel to venues?",
    answer: "Yes! I am based in Nadiad but travel globally. For outstation weddings, travel and accommodation charges are borne by the client."
  },
  {
    icon: <AccessTime sx={{ fontSize: 22 }} />,
    question: "How long does it take?",
    answer: "For a classic full-hand bridal design (elbow length), it typically takes 4-5 hours. Intricate figure work may take up to 6 hours."
  },
  {
    icon: <InvertColors sx={{ fontSize: 22 }} />,
    question: "How to ensure a dark stain?",
    answer: "I provide a complimentary 'Aftercare Kit' with sealant spray and balm. Keeping the mehandi on for 8+ hours and avoiding water is key!"
  },
  {
    icon: <Event sx={{ fontSize: 22 }} />,
    question: "What is the booking process?",
    answer: "To secure your date, a 30% advance deposit is required. We discuss designs 1 month prior to the wedding to customize your love story."
  }
];

const MobileFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-[#FFFBF0] relative overflow-hidden">
      
      {/* Background Decor - Giant '?' */}
      <div className="absolute -right-10 top-40 text-[300px] text-[#D69E2E]/5 font-serif rotate-12 pointer-events-none select-none">
        ?
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 mb-3">
                <Quiz sx={{ fontSize: 18, color: '#D69E2E' }} />
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#D69E2E] uppercase">Good to Know</span>
            </motion.div>
            <h2 className="text-4xl font-['Great_Vibes'] text-[#4A2c2A]">Common Doubts</h2>
        </div>

        {/* ACCORDION LIST */}
        <div className="flex flex-col gap-5">
            {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`rounded-2xl transition-all duration-500 overflow-hidden relative ${
                            isOpen 
                            ? 'bg-white shadow-xl shadow-[#D69E2E]/20 border border-[#D69E2E]' 
                            : 'bg-white/50 border border-[#D69E2E]/20 hover:border-[#D69E2E]/50'
                        }`}
                    >
                        {/* ACTIVE GLOW BACKGROUND */}
                        {isOpen && (
                            <motion.div 
                                layoutId="activeGlow"
                                className="absolute inset-0 bg-gradient-to-r from-[#D69E2E]/5 to-transparent pointer-events-none"
                            />
                        )}

                        {/* QUESTION HEADER */}
                        <button 
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-5 text-left relative z-10"
                        >
                            <div className="flex items-center gap-4">
                                {/* ICON BOX */}
                                <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#D69E2E] text-white' : 'bg-[#FFFBF0] text-[#D69E2E]'}`}>
                                    {faq.icon}
                                </div>
                                <span className={`text-sm font-bold tracking-wide ${isOpen ? 'text-[#4A2c2A]' : 'text-[#4A2c2A]/80'}`}>
                                    {faq.question}
                                </span>
                            </div>

                            {/* TOGGLE ICON (ROTATING) */}
                            <motion.div 
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                className={`text-[#D69E2E] transition-opacity ${isOpen ? 'opacity-100' : 'opacity-60'}`}
                            >
                                {isOpen ? <Remove /> : <Add />}
                            </motion.div>
                        </button>

                        {/* ANSWER BODY */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
                                    className="overflow-hidden relative z-10"
                                >
                                    <div className="px-5 pb-6 pl-[4.5rem] pr-6">
                                        <p className="text-sm text-[#4A2c2A]/70 leading-relaxed font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default MobileFAQ;