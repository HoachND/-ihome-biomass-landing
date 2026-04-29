"use client";

import { useI18n } from "@/context/I18nContext";
import { Leaf, Scissors, ThermometerSun, Truck, ShieldCheck } from "lucide-react";

export default function Process() {
  const { t } = useI18n();

  const steps = [
    {
      icon: <Leaf className="text-emerald-500" size={32} />,
      title: t("proc_1_t"),
      desc: t("proc_1_d")
    },
    {
      icon: <Scissors className="text-orange-500" size={32} />,
      title: t("proc_2_t"),
      desc: t("proc_2_d")
    },
    {
      icon: <ThermometerSun className="text-amber-500" size={32} />,
      title: t("proc_3_t"),
      desc: t("proc_3_d")
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: t("proc_4_t"),
      desc: t("proc_4_d")
    },
    {
      icon: <Truck className="text-lime-500" size={32} />,
      title: t("proc_5_t"),
      desc: t("proc_5_d")
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-600 font-bold tracking-wider text-sm mb-4 block uppercase">
            {t("proc_badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {t("proc_title")}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("proc_desc")}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-emerald-100 via-orange-100 to-lime-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white shadow-lg border-4 border-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-sm shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#gallery" className="inline-block px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-full hover:border-orange-500 hover:text-orange-600 transition-colors">
            {t("proc_cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
