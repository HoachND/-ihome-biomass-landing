"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Globe } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  const navLinks = [
    { name: t("nav_home"), href: "#home" },
    { name: t("nav_products"), href: "#products" },
    { name: t("nav_benefits"), href: "#benefits" },
    { name: t("nav_factory"), href: "#factory" },
    { name: t("nav_process"), href: "#process" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-black/10 backdrop-blur-[2px] py-4 border-b border-white/5"}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img src="/images/logo-ihome.png" alt="IHOME Logo" className={`transition-all duration-300 ${scrolled ? "h-9 md:h-12" : "h-11 md:h-16"}`} />
              <span className={`font-black text-xl md:text-2xl tracking-tighter hidden sm:block ${scrolled ? "text-slate-900" : "text-white"}`}>
                IHOME <span className="text-orange-500">VIỆT NAM</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`font-bold text-base hover:text-orange-500 transition-colors ${scrolled ? "text-slate-700" : "text-white/90"}`}>
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-gray-300/30 pl-6">
              <button onClick={toggleLanguage} className={`flex items-center gap-1.5 text-sm font-bold hover:text-orange-500 transition-colors ${scrolled ? "text-slate-700" : "text-white"}`}>
                <Globe size={18} />
                {language === "vi" ? "EN" : "VI"}
              </button>
              
              <a href="#get-quote" className={`px-6 py-2.5 rounded-full font-black text-sm transition-all hover:scale-105 flex items-center gap-2 ${scrolled ? "bg-orange-500 text-white shadow-lg" : "bg-white text-orange-600 shadow-xl"}`}>
                {t("nav_quote")}
              </a>
            </div>
          </div>

          {/* Mobile Right Controls - Standardized to Match VimSolar/VIMGROUP */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-3">
            {/* Call Now Button - Mobile Only */}
            <a 
              href="tel:0974516670" 
              className="flex items-center gap-1 bg-orange-500 text-white px-2.5 py-1.5 rounded-full shadow-lg animate-pulse-subtle"
            >
              <PhoneCall size={14} fill="currentColor" />
              <span className="text-[9px] font-black uppercase tracking-tighter">{t("nav_call")}</span>
            </a>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage} 
              className={`p-2 rounded-xl border flex items-center gap-1 transition-all ${
                scrolled 
                  ? "text-slate-800 border-slate-200 bg-slate-50" 
                  : "text-white border-white/20 bg-white/10 backdrop-blur-md"
              }`}
            >
              <Globe size={16} />
              <span className="text-[11px] font-extrabold">{language === "vi" ? "EN" : "VI"}</span>
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2.5 rounded-xl transition-all shadow-xl border ${
                scrolled 
                  ? "text-orange-600 bg-orange-50 border-orange-100" 
                  : "text-orange-500 bg-white border-white/20"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-5 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-4 text-2xl font-black text-slate-800 hover:bg-orange-50 hover:text-orange-500 rounded-xl transition-all">
              {link.name}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <a href="#get-quote" onClick={() => setIsOpen(false)} className="mx-2 px-4 py-4 bg-orange-500 text-white text-center font-black rounded-xl hover:bg-orange-600 shadow-lg flex justify-center items-center gap-3 text-lg">
            {t("nav_quote")}
          </a>
          <a href="tel:0974516670" className="mx-2 px-4 py-4 bg-slate-100 text-slate-800 text-center font-bold rounded-xl hover:bg-slate-200 flex justify-center items-center gap-3 text-lg border border-slate-200">
            <PhoneCall size={20} /> 0974.516.670
          </a>
        </div>
      )}
    </nav>
  );
}
