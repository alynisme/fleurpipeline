"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Apakah bunga ini asli?",
    answer: "Tidak, ini adalah bunga artifisial kualitas premium yang dirancang untuk keindahan abadi tanpa perlu disiram."
  },
  {
    question: "Apakah bisa dikirim ke luar kota?",
    answer: "Tentu! Karena bunga kami tidak akan layu, pengiriman ke seluruh Indonesia sangat aman dengan packing khusus."
  },
  {
    question: "Bagaimana cara merawatnya?",
    answer: "Cukup bersihkan debu secara berkala dengan kemoceng lembut atau kain kering agar warna tetap cerah bertahun-tahun."
  },
  {
    question: "Apakah saya bisa pesan kustom?",
    answer: "Bisa banget! Setelah mengisi form FleurFinder, Anda bisa diskusi kustomisasi lewat WhatsApp kami."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col space-y-4 relative z-10">
      {FAQ_DATA.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={index} 
            className="backdrop-blur-md bg-white/50 border border-pink-200 rounded-2xl shadow-sm overflow-hidden transition-colors hover:bg-white/70"
          >
            <button
              onClick={() => toggleOpen(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="text-xl font-playfair font-bold text-gray-800 pr-8">
                {faq.question}
              </h3>
              <div className="flex-shrink-0 text-pink-500">
                {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 pt-0 text-gray-600 font-montserrat leading-relaxed text-left">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
