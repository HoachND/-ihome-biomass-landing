"use client";

import { useI18n } from "@/context/I18nContext";
import { ArrowRight, Flame, Leaf, Settings } from "lucide-react";

export default function Solutions() {
  const { t } = useI18n();

  const products = [
    {
      id: "sawdust-briquettes",
      titleKey: "form_opt2",
      descKey: "sol_desc",
      icon: <Settings className="text-lime-500" size={32} />,
      image: "/images/products/Anh_SP1.jpg",
      calorific: "4200 - 4500",
      features: [t("sol_f2_1"), t("sol_f2_2"), t("sol_f2_3")]
    },
    {
      id: "loose-sawdust",
      titleKey: "form_opt3",
      descKey: "sol_desc",
      icon: <Leaf className="text-emerald-500" size={32} />,
      image: "/images/products/FB_IMG_1658405750299.jpg",
      calorific: "3800 - 4200",
      features: [t("sol_f3_1"), t("sol_f3_2"), t("sol_f3_3")]
    },
    {
      id: "agro-waste",
      titleKey: "form_opt4",
      descKey: "sol_desc",
      icon: <Leaf className="text-amber-500" size={32} />,
      image: "/images/products/product-8.jpg",
      calorific: "3800 - 4000",
      features: [t("sol_f3_1"), t("sol_f3_2"), t("sol_f3_3")]
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold tracking-wider text-sm mb-4 block uppercase">
            {t("sol_badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {t("sol_title")}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("sol_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={t(item.titleKey)} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur p-2 rounded-xl shadow-sm">
                  {item.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t(item.titleKey)}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold text-slate-700 w-28">{t("sol_invest")}</span>
                    <span className="text-orange-600 font-bold">{item.calorific} kcal/kg</span>
                  </div>
                  <div className="w-full h-px bg-slate-100 my-2"></div>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#get-quote" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group/link">
                  {t("sol_consult")}
                  <ArrowRight size={18} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
