"use client";

import { useI18n } from "@/context/I18nContext";
import { TrendingDown, Shield, Leaf, Factory, Zap, CheckCircle2 } from "lucide-react";

export default function Benefits() {
  const { t } = useI18n();

  const benefits = [
    {
      icon: <TrendingDown size={32} className="text-orange-500" />,
      title: "ben_1_t",
      desc: "ben_1_d",
      stat: "30-50%",
      statLabel: "ben_1_s",
    },
    {
      icon: <Zap size={32} className="text-lime-500" />,
      title: "ben_2_t",
      desc: "ben_2_d",
      stat: "4800+",
      statLabel: "ben_2_s",
    },
    {
      icon: <Factory size={32} className="text-sky-500" />,
      title: "ben_3_t",
      desc: "ben_3_d",
      stat: "10k+",
      statLabel: "ben_3_s",
    },
    {
      icon: <Shield size={32} className="text-amber-500" />,
      title: "ben_4_t",
      desc: "ben_4_d",
      stat: "2x",
      statLabel: "ben_4_s",
    },
    {
      icon: <Leaf size={32} className="text-emerald-500" />,
      title: "ben_5_t",
      desc: "ben_5_d",
      stat: "100%",
      statLabel: "ben_5_s",
    },
    {
      icon: <CheckCircle2 size={32} className="text-blue-500" />,
      title: "ben_6_t",
      desc: "ben_6_d",
      stat: "FSC",
      statLabel: "ben_6_s",
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-[#171717] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a1206] to-transparent opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div className="lg:w-1/3">
            <span className="text-lime-400 font-bold tracking-wider text-sm mb-4 block uppercase">
              {t("ben_badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              {t("ben_title")}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {t("ben_desc")}
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="font-semibold text-white mb-2">{t("ben_cta_text")}</div>
              <a href="#get-quote" className="text-orange-500 font-bold hover:text-orange-400 transition-colors inline-flex items-center">
                {t("ben_cta")}
              </a>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t(benefit.title)}</h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{t(benefit.desc)}</p>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-black text-lime-400">{benefit.stat}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">{t(benefit.statLabel)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
