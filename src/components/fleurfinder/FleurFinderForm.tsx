"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { 
  ArrowRight, ArrowLeft, Heart, Sparkles, Gem, 
  User, Users, Gift, Calendar, Cake, HeartHandshake, Leaf, CalendarPlus
} from "lucide-react";

// Tipe untuk ikon
type IconType = React.ElementType;

interface Option {
  label: string;
  icon?: IconType;
}

interface StepData {
  id: string;
  title: string;
  type: "grid" | "buttons";
  options: Option[];
}

const STEPS: StepData[] = [
  {
    id: "status",
    title: "Untuk Siapa Bunga Ini?",
    type: "grid",
    options: [
      { label: "Gebetan", icon: Sparkles },
      { label: "Pacar", icon: Heart },
      { label: "Istri", icon: Gem },
      { label: "Ibu", icon: User },
      { label: "Teman", icon: Users },
    ],
  },
  {
    id: "situasi",
    title: "Apa Situasinya?",
    type: "grid",
    options: [
      { label: "Minta Maaf", icon: HeartHandshake },
      { label: "Anniversary", icon: Calendar },
      { label: "Ulang Tahun", icon: Cake },
      { label: "Kejutan Spontan", icon: Gift },
    ],
  },
  {
    id: "budget",
    title: "Berapa Budget Anda?",
    type: "buttons",
    options: [
      { label: "< Rp 200.000" },
      { label: "Rp 200.000 - Rp 500.000" },
      { label: "> Rp 500.000" },
    ],
  },
  {
    id: "kepribadian",
    title: "Seperti Apa Kepribadiannya?",
    type: "grid",
    options: [
      { label: "Minimalis/Elegan", icon: Leaf },
      { label: "Mewah/Glamor", icon: Gem },
      { label: "Unik/Eksotis", icon: Sparkles },
    ],
  },
];

export default function FleurFinderForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [greetingText, setGreetingText] = useState("");

  const handleSelect = (stepId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [stepId]: option }));
  };

  const handleNext = () => {
    if (!answers[STEPS[currentStep].id]) {
      toast.error("Mohon pilih salah satu opsi terlebih dahulu.");
      return;
    }

    if (currentStep < STEPS.length - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      // Show Skeleton Loading first
      setDirection(1);
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setShowResult(true);
      }, 2500);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setDirection(-1);
      setShowResult(false);
      return;
    }
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const slideVariants = {
    hidden: (dir: number) => ({
      x: dir > 0 ? "50%" : "-50%",
      opacity: 0,
      scale: 0.95,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-50%" : "50%",
      opacity: 0,
      scale: 0.95,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    }),
  };

  // Kalkulasi Progress Bar
  const progressPercentage = showResult 
    ? 100 
    : Math.round(((currentStep) / STEPS.length) * 100);

  // Result Section (Static for UI validation)
  if (showResult) {
    return (
      <motion.div
        custom={direction}
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-2xl mx-auto backdrop-blur-md bg-white/60 border border-white/40 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-pink-200/50 flex flex-col items-center text-center space-y-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/30 to-transparent pointer-events-none" />
        
        <Sparkles className="w-12 h-12 text-pink-500 mb-2 relative z-10" />
        <h2 className="text-4xl font-playfair font-bold text-gray-800 relative z-10">
          Rekomendasi Sempurna
        </h2>
        
        <div className="w-full relative rounded-2xl overflow-hidden aspect-video shadow-lg mb-2 z-10">
          <img 
            src="https://images.unsplash.com/photo-1548840504-297ebef769ce?auto=format&fit=crop&q=80&w=800" 
            alt="Bunga Pilihan"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-pink-700 relative z-10">Premium Red Roses</h3>
        <p className="text-gray-700 italic px-4 relative z-10">&ldquo;Simbol cinta sejati dan gairah yang tak lekang oleh waktu.&rdquo;</p>

        {/* Gift Card Input & Preview */}
        <div className="w-full flex flex-col md:flex-row gap-6 mt-4 relative z-10 text-left bg-white/40 p-4 rounded-2xl border border-white/50">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-bold text-gray-700">Pesan di Kartu Ucapan</label>
            <textarea 
              value={greetingText}
              onChange={(e) => setGreetingText(e.target.value)}
              placeholder="Tulis pesan romantis Anda di sini..."
              className="w-full p-4 rounded-xl border border-pink-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none h-32 font-montserrat text-sm"
            />
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-56 h-36 bg-[#Fdfbf7] rounded-sm shadow-md border border-gray-200 p-6 transform rotate-2 flex items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-red-800/10 to-transparent" />
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-red-800/20 opacity-50 flex items-center justify-center"><Heart className="w-4 h-4 text-red-800/30" /></div>
              <p className="font-caveat text-2xl text-gray-800 leading-tight">
                {greetingText || "Pesan Anda akan tampil di sini..."}
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-3 font-montserrat">*Preview Kartu Ucapan</p>
          </div>
        </div>

        <div className="flex w-full gap-3 pt-4 mt-2 border-t border-pink-200/50 relative z-10 flex-col sm:flex-row">
          <button
            onClick={handleBack}
            className="flex-1 py-3 px-4 rounded-2xl border-2 border-pink-300 text-pink-700 font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Ubah
          </button>
          
          <button
            onClick={() => {
              const nextYear = new Date();
              nextYear.setFullYear(nextYear.getFullYear() + 1);
              const dateStr = nextYear.toISOString().replace(/-|:|\.\d\d\d/g, "").slice(0, 8);
              const url = `https://calendar.google.com/calendar/r/eventedit?text=Anniversary:+Pesan+Bunga+Abadi+di+FleurFinder&dates=${dateStr}T090000Z/${dateStr}T100000Z&details=Waktunya+pesan+bunga+di+FleurFinder!`;
              window.open(url, "_blank");
            }}
            className="flex-1 py-3 px-4 rounded-2xl bg-white border border-pink-200 text-pink-600 font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
          >
            <CalendarPlus className="w-5 h-5" /> Ingatkan Tahun Depan
          </button>

          <button
            onClick={() => {
              toast.success("Pilihan yang abadi! Tim kami akan segera menghubungi Anda melalui WhatsApp.");
            }}
            className="flex-[1.5] py-3 px-4 rounded-2xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center shadow-lg hover:shadow-pink-500/30 gap-2"
          >
            <Sparkles className="w-4 h-4" /> Pesan via WA
          </button>
        </div>
      </motion.div>
    );
  }

  // Skeleton Loading Section
  if (isGenerating) {
    return (
      <motion.div
        custom={direction}
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-2xl mx-auto backdrop-blur-md bg-white/60 border border-white/40 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-pink-200/50 flex flex-col items-center text-center space-y-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/50 to-pink-50/50 animate-pulse pointer-events-none" />
        
        <Sparkles className="w-12 h-12 text-pink-300 mb-2 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 animate-pulse z-10">
          Sedang merangkai pilihan bunga abadi untuk Anda...
        </h2>
        
        <div className="w-full relative rounded-2xl bg-gray-200/50 animate-pulse aspect-video shadow-lg mb-2 z-10" />

        <div className="h-8 w-1/2 bg-gray-200/50 rounded-full animate-pulse z-10" />
        <div className="h-4 w-3/4 bg-gray-200/50 rounded-full animate-pulse z-10" />

        <div className="flex w-full gap-4 pt-4 mt-2 border-t border-pink-200/50 opacity-50 z-10">
          <div className="flex-1 py-4 rounded-2xl bg-gray-200/50 animate-pulse h-[56px]" />
          <div className="flex-1 py-4 rounded-2xl bg-gray-200/50 animate-pulse h-[56px]" />
        </div>
      </motion.div>
    );
  }

  const step = STEPS[currentStep];

  return (
    <div className="w-full max-w-2xl mx-auto backdrop-blur-md bg-white/60 border border-white/40 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-pink-200/50 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100/30 blur-3xl rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Progress Bar */}
      <div className="mb-8 relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-pink-600 font-bold tracking-widest uppercase text-xs">
            Langkah {currentStep + 1}
          </span>
          <span className="text-gray-400 text-xs font-medium">
            {progressPercentage}%
          </span>
        </div>
        <div className="h-2 w-full bg-pink-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="min-h-[300px] flex flex-col relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-8 text-center drop-shadow-sm">
              {step.title}
            </h2>

            {step.type === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {step.options.map((option) => {
                  const isSelected = answers[step.id] === option.label;
                  const Icon = option.icon;
                  return (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      key={option.label}
                      onClick={() => handleSelect(step.id, option.label)}
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                        isSelected
                          ? "border-pink-500 bg-pink-50 shadow-md shadow-pink-200/50 text-pink-700"
                          : "border-white/60 bg-white/50 text-gray-600 hover:border-pink-300 hover:bg-white/80 hover:shadow-lg"
                      }`}
                    >
                      {Icon && (
                        <Icon className={`w-8 h-8 mb-3 transition-colors ${isSelected ? "text-pink-500 fill-pink-100" : "text-gray-400"}`} />
                      )}
                      <span className="font-semibold text-sm md:text-base">{option.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-4 mb-8">
                {step.options.map((option) => {
                  const isSelected = answers[step.id] === option.label;
                  return (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={option.label}
                      onClick={() => handleSelect(step.id, option.label)}
                      className={`w-full py-5 px-6 rounded-2xl border-2 transition-all duration-300 text-left font-semibold text-lg flex items-center justify-between ${
                        isSelected
                          ? "border-pink-500 bg-pink-50 shadow-md shadow-pink-200/50 text-pink-700"
                          : "border-white/60 bg-white/50 text-gray-600 hover:border-pink-300 hover:bg-white/80"
                      }`}
                    >
                      {option.label}
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-pink-500 bg-pink-500' : 'border-gray-300'}`}>
                        {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex w-full justify-between items-center mt-auto pt-4 border-t border-pink-100/50">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`py-3 px-6 rounded-full transition-colors flex items-center justify-center font-semibold border-2 ${
              currentStep === 0
                ? "opacity-0 pointer-events-none"
                : "border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700"
            }`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Kembali
          </button>

          <button
            onClick={handleNext}
            disabled={!answers[step.id]}
            className={`py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-all shadow-lg ${
              !answers[step.id]
                ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                : "bg-pink-500 text-white hover:bg-pink-600 hover:shadow-pink-500/30"
            }`}
          >
            {currentStep === STEPS.length - 1 ? "Lihat Rekomendasi Bunga" : "Lanjut"}
            {currentStep !== STEPS.length - 1 && <ArrowRight className="w-5 h-5 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
}
