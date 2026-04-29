"use client";

import { useState } from "react";
import { useI18n } from "@/context/I18nContext";
import { Maximize2, X } from "lucide-react";

export default function Gallery() {
  const { t, language } = useI18n();
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const images = [
    { id: 1, src: "/images/products/FB_IMG_1658405752486.jpg", category: "products", title: t("gal_img1_t"), desc: t("gal_img1_d") },
    { id: 2, src: "/images/products/Anh_SP1.jpg", category: "products", title: t("gal_img2_t"), desc: t("gal_img2_d") },
    { id: 3, src: "/images/products/product-7.jpg", category: "products", title: t("gal_img3_t"), desc: t("gal_img3_d") },
    { id: 4, src: "/images/products/product-8.jpg", category: "products", title: t("gal_img4_t"), desc: t("gal_img4_d") },
    { id: 5, src: "/images/factory/factory-1.jpg", category: "factory", title: t("gal_img5_t"), desc: t("gal_img5_d") },
    { id: 6, src: "/images/factory/factory-2.jpg", category: "factory", title: t("gal_img6_t"), desc: t("gal_img6_d") },
    { id: 7, src: "/images/factory/factory-3.jpg", category: "factory", title: t("gal_img7_t"), desc: t("gal_img7_d") },
    { id: 8, src: "/images/factory/factory-6.jpg", category: "factory", title: t("gal_img8_t"), desc: t("gal_img8_d") },
  ];

  const filteredImages = filter === "all" ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-orange-600 font-bold tracking-wider text-sm mb-4 block uppercase">
            {t("gal_badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {t("gal_title")}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("gal_desc")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setFilter("all")} 
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === "all" ? "bg-orange-500 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            {t("gal_cat_all")}
          </button>
          <button 
            onClick={() => setFilter("products")} 
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === "products" ? "bg-orange-500 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            {t("gal_cat_products")}
          </button>
          <button 
            onClick={() => setFilter("factory")} 
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === "factory" ? "bg-orange-500 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            {t("gal_cat_factory")}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-100"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 className="text-white absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100" />
                <h4 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                <p className="text-lime-400 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 animate-in fade-in">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <div className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-2/3 bg-black flex items-center justify-center">
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-full max-h-[70vh] object-contain" />
            </div>
            <div className="md:w-1/3 p-8 md:p-10 flex flex-col justify-center bg-white">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider mb-4 w-max">
                {selectedImage.category === "products" ? t("gal_cat_products") : t("gal_cat_factory")}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{selectedImage.title}</h3>
              <p className="text-slate-600 mb-8">{selectedImage.desc}</p>
              
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <p className="text-sm text-slate-700 mb-4 font-medium leading-relaxed">{t("gal_modal_desc")}</p>
                <a href="#get-quote" onClick={() => setSelectedImage(null)} className="block w-full py-3 px-4 bg-orange-500 text-white text-center font-bold rounded-xl hover:bg-orange-600 transition-colors">
                  {t("gal_modal_cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
