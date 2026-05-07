"use client";

import { useState } from "react";
import { Heart, Camera, MessageCircle, Send, X, Info, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);

  return (
    <footer className="w-full border-t border-pink-200 bg-white/60 backdrop-blur-md mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-playfair font-bold text-gray-800">
              FleurFinder<span className="text-pink-500">.</span>
            </h3>
            <p className="text-gray-600 font-montserrat leading-relaxed">
              Bahasa bunga abadi untuk setiap momen berharga dalam hidup Anda. Pilihan premium yang tak lekang oleh waktu.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-500 hover:text-white transition-colors shadow-sm">
                <Camera className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-500 hover:text-white transition-colors shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-gray-800">Tautan Cepat</h4>
            <ul className="space-y-3 font-montserrat text-gray-600 flex flex-col items-start">
              <li>
                <button onClick={() => setIsAboutOpen(true)} className="hover:text-pink-500 transition-colors cursor-pointer">Tentang Kami</button>
              </li>
              <li>
                <a href="#catalog-section" className="hover:text-pink-500 transition-colors">Katalog Koleksi</a>
              </li>
              <li>
                <button onClick={() => setIsCareOpen(true)} className="hover:text-pink-500 transition-colors cursor-pointer">Cara Perawatan</button>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">Syarat & Ketentuan</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-gray-800">Everlasting Love Tips</h4>
            <p className="text-gray-600 font-montserrat text-sm">
              Dapatkan inspirasi kado romantis dan penawaran eksklusif langsung di inbox Anda.
            </p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="w-full px-4 py-3 rounded-l-xl border-y border-l border-pink-200 bg-white/50 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all font-montserrat"
              />
              <button 
                type="submit" 
                className="px-5 py-3 bg-pink-500 text-white rounded-r-xl hover:bg-pink-600 transition-colors shadow-md border border-pink-500 flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-pink-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-montserrat text-gray-500">
          <p>© 2026 FleurFinder. All rights reserved.</p>
          <p className="flex items-center">
            Dibuat dengan <Heart className="w-4 h-4 text-pink-500 mx-1 fill-pink-500" /> untuk Anda
          </p>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative border border-pink-100"
            >
              <button onClick={() => setIsAboutOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-pink-500 transition-colors">
                <X className="w-6 h-6" />
              </button>
              <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Info className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Tentang FleurFinder</h3>
              <p className="text-gray-600 font-montserrat leading-relaxed text-sm">
                FleurFinder adalah layanan kurasi buket bunga premium yang didedikasikan untuk membantu Anda menemukan ekspresi cinta yang paling tepat. Kami menggunakan sistem cerdas untuk mencocokkan setiap kepribadian dan momen dengan bahasa bunga yang indah dan abadi.
              </p>
            </motion.div>
          </div>
        )}

        {isCareOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative border border-pink-100"
            >
              <button onClick={() => setIsCareOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-pink-500 transition-colors">
                <X className="w-6 h-6" />
              </button>
              <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Cara Perawatan</h3>
              <ul className="space-y-4 font-montserrat text-gray-700 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-lg shrink-0">💧</div>
                  Jangan disiram air
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-lg shrink-0">☀️</div>
                  Hindari matahari langsung
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-lg shrink-0">🧹</div>
                  Bersihkan debu dengan kuas halus
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}

