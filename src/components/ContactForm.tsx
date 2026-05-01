"use client";

import { useState } from "react";
import { useI18n } from "@/context/I18nContext";
import { Send, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const { t, language } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: t("form_opt1"),
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language }),
      });

      if (response.ok) {
        setIsSuccess(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F97316', '#84CC16', '#FACC15']
        });
        setFormData({ name: "", phone: "", email: "", projectType: t("form_opt1"), message: "" });
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại / An error occurred, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Không thể kết nối đến máy chủ / Cannot connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-quote" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -z-10 skew-x-12 transform origin-top"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-orange-600 font-bold tracking-wider text-sm mb-4 block uppercase">
              {t("form_badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              {t("form_title")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {t("form_desc")}
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Phone className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t("form_hotline")}</h4>
                  <p className="text-2xl font-black text-orange-600">0974.516.670</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t("form_office")}</h4>
                  <p className="text-slate-600">B88, Phố Trúc, KĐT Ecopark, Hưng Yên</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">ihomevina@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 relative">
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-lime-500" size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{t("form_success_title")}</h3>
                <p className="text-slate-600 mb-8">{t("form_success_desc")}</p>
                <button onClick={() => setIsSuccess(false)} className="px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-colors">
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t("form_name")}</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Nguyễn Văn A" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t("form_phone")}</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="09xxxxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t("form_email")}</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="email@domain.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t("form_type")}</label>
                  <select value={formData.projectType} onChange={(e) => setFormData({...formData, projectType: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all appearance-none cursor-pointer">
                    <option value={t("form_opt1")}>{t("form_opt1")}</option>
                    <option value={t("form_opt2")}>{t("form_opt2")}</option>
                    <option value={t("form_opt3")}>{t("form_opt3")}</option>
                    <option value={t("form_opt4")}>{t("form_opt4")}</option>
                    <option value={t("form_opt5")}>{t("form_opt5")}</option>
                  </select>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg">
                  {isSubmitting ? t("form_sending") : t("form_submit")}
                  {!isSubmitting && <Send size={20} />}
                </button>
                
                <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1 mt-4">
                  <ShieldCheck size={14} /> {t("form_secure")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const CheckCircle = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
