"use client";

import { useI18n } from "@/context/I18nContext";
import { CheckCircle, Award, Leaf } from "lucide-react";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-lime-500 rounded-3xl transform rotate-3 opacity-20 blur-sm"></div>
            <div className="bg-white rounded-3xl p-2 shadow-2xl relative">
              <img 
                src="/images/ceo-thuy.png" 
                alt="CEO IHOME Việt Nam" 
                className="w-full h-auto rounded-2xl object-cover bg-slate-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 max-w-xs">
                <div className="flex gap-2 text-orange-500 mb-2">
                  <Award size={24} />
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t("about_quote")}</p>
                <p className="text-xs text-slate-500">{t("about_ceo_name")} - {t("about_ceo")}</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-orange-600 font-bold tracking-wider text-sm mb-4 block uppercase flex items-center gap-2">
              <Leaf size={16} /> {t("about_badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {t("about_title")}
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-8"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t("about_desc")}
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-lime-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">{t("about_f1_t")}</h4>
                  <p className="text-slate-600 text-sm">{t("about_f1_d")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-lime-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">{t("about_f2_t")}</h4>
                  <p className="text-slate-600 text-sm">{t("about_f2_d")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-lime-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">{t("about_f3_t")}</h4>
                  <p className="text-slate-600 text-sm">{t("about_f3_d")}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <img src="/images/logo-vimgroup.png" alt="VIMGROUP" className="h-12 object-contain" />
              <div className="w-px h-12 bg-slate-200"></div>
              <p className="text-sm text-slate-600 font-medium">{t("about_vimgroup")} <strong className="text-slate-900">VIMGROUP</strong>.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
