import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Caveat } from "next/font/google";
import { Toaster } from "sonner";
import GlobalDecorations from "@/components/ui/GlobalDecorations";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FleurFinder - Bahasa Bunga untuk Si Dia",
  description: "Rekomendasi buket bunga yang tepat untuk pasangan Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${montserrat.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-montserrat text-gray-800 bg-white cursor-none">
        <CustomCursor />
        <GlobalDecorations />
        <Toaster 
          position="top-center" 
          toastOptions={{ 
            style: { 
              background: '#F5F5DC', 
              color: '#831843', 
              border: '1px solid #FFC0CB',
              fontFamily: 'var(--font-montserrat)'
            } 
          }} 
        />
        {children}
      </body>
    </html>
  );
}
