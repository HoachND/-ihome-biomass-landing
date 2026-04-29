"use client";

import { useI18n } from "@/context/I18nContext";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl inline-block">
                <img src="/images/logo-ihome.png" alt="IHOME Logo" className="h-10 object-contain" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">IHOME <span className="text-orange-500">VIỆT NAM</span></span>
            </div>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              {t("footer_desc")}
            </p>
            <div className="flex items-center gap-4 text-sm font-medium border border-slate-800 rounded-full px-4 py-2 inline-flex bg-slate-800/50">
              <span className="text-slate-400">A member of</span>
              <img src="/images/logo-vimgroup.png" alt="VIMGROUP Logo" className="h-16 object-contain" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t("footer_links")}</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">{t("nav_home")}</a></li>
              <li><a href="#products" className="hover:text-orange-400 transition-colors">{t("nav_products")}</a></li>
              <li><a href="#benefits" className="hover:text-orange-400 transition-colors">{t("nav_benefits")}</a></li>
              <li><a href="#factory" className="hover:text-orange-400 transition-colors">{t("nav_factory")}</a></li>
              <li><a href="#process" className="hover:text-orange-400 transition-colors">{t("nav_process")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t("footer_contact")}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">Hotline:</span>
                <span className="text-white font-semibold">0974.516.670</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">Email:</span>
                <span>ihomevina@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">{t("footer_office")}:</span>
                <span className="leading-relaxed">B88, Phố Trúc, KĐT Ecopark, Hưng Yên</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">{t("footer_factory")}:</span>
                <span className="leading-relaxed">KCN Phố Nối A, Văn Lâm, Hưng Yên</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} IHOME Việt Nam. All rights reserved.</p>
          <a href="https://vimai.vimgroup.vn" target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs opacity-80 hover:opacity-100 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
            {t("footer_credit")}
          </a>
        </div>
      </div>
    </footer>
  );
}
