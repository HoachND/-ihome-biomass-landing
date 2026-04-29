"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Widgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Zalo */}
      <a 
        href="https://zalo.me/0974516670" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-blue-500/30 group relative"
      >
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none origin-right transform group-hover:translate-x-0 translate-x-2">
          Chat Zalo
        </span>
        <span className="text-[#0068FF] font-black text-3xl italic tracking-tighter">Z</span>
      </a>

      {/* Messenger */}
      <a 
        href="https://m.me/vimsolar" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-purple-500/30 group relative"
      >
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none origin-right transform group-hover:translate-x-0 translate-x-2">
          Messenger
        </span>
        <MessageCircle className="text-white" size={28} />
      </a>

      {/* Phone */}
      <a 
        href="tel:0974516670" 
        className="w-14 h-14 bg-green-500 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-green-500/30 relative group"
      >
        <div className="absolute inset-0 rounded-full pulse-ring"></div>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none origin-right transform group-hover:translate-x-0 translate-x-2">
          0974.516.670
        </span>
        <Phone className="text-white relative z-10" size={26} fill="currentColor" />
      </a>
    </div>
  );
}
