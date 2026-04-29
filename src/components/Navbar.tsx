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
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center md:mr-8">
            <a href="#" className="flex items-center gap-2">
              <img src="/images/logo-ihome.png" alt="IHOME Logo" className="h-10 md:h-16 w-auto object-contain" />
              <span className={`font-black text-2xl tracking-tight hidden sm:block whitespace-nowrap ${scrolled ? "text-slate-900" : "text-white"}`}>
                IHOME <span className="text-orange-500">VIỆT NAM</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 flex-grow justify-end">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`font-bold text-lg whitespace-nowrap hover:text-orange-500 transition-colors ${scrolled ? "text-slate-700" : "text-white/90"}`}>
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-gray-300/30 pl-4">
              <button onClick={toggleLanguage} className={`flex items-center gap-1 text-sm font-semibold hover:text-orange-500 transition-colors ${scrolled ? "text-slate-700" : "text-white"}`}>
                <Globe size={16} />
                {language === "vi" ? "EN" : "VI"}
              </button>
              
              <a href="#get-quote" className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center gap-2 ${scrolled ? "bg-orange-500 text-white hover:bg-orange-600 shadow-md" : "bg-white text-orange-600 hover:bg-gray-100"}`}>
                {t("nav_quote")}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleLanguage} className={`text-sm font-bold px-2 py-1 rounded border ${scrolled ? "text-slate-800 border-slate-300" : "text-white border-white/30"}`}>
              {language === "vi" ? "EN" : "VI"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? "text-slate-900" : "text-white"} p-1`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-2xl font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg">
              {link.name}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <a href="#get-quote" onClick={() => setIsOpen(false)} className="mx-4 px-4 py-3 bg-orange-500 text-white text-center font-bold rounded-lg hover:bg-orange-600 flex justify-center items-center gap-2">
            {t("nav_quote")}
          </a>
          <a href="tel:0974516670" className="mx-4 px-4 py-3 bg-slate-100 text-slate-800 text-center font-bold rounded-lg hover:bg-slate-200 flex justify-center items-center gap-2">
            <PhoneCall size={18} /> 0974.516.670
          </a>
        </div>
      )}
    </nav>
  );
}
