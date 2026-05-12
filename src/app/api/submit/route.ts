import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, projectType, message, language } = data;

    // Telegram configuration
    const BOT_TOKEN = "8724327895:AAG4lf55tebnB0RhCqxwoTa_-rG4T8QXutQ";
    const CHAT_ID = "-5179603882";
    
    // Format Telegram Message
    const text = `
🌿 <b>KHÁCH HÀNG MỚI - IHOME BIOMASS</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Khách hàng:</b> ${name}
📞 <b>SĐT:</b> ${phone}
📧 <b>Email:</b> ${email || "Không có"}
🔥 <b>Sản phẩm quan tâm:</b> ${projectType}
📝 <b>Ghi chú:</b> ${message || "Không có"}
🌍 <b>Ngôn ngữ:</b> ${language === "en" ? "English" : "Tiếng Việt"}
🕒 <b>Thời gian:</b> ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}
━━━━━━━━━━━━━━━━━━
    `;

    // 1. Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const telegramRes = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: "HTML" }),
    });

    if (!telegramRes.ok) {
      console.error("Lỗi gửi Telegram:", await telegramRes.text());
    }

    // 2. GỬI ĐẾN GOOGLE APPS SCRIPT
    const PROJECT_GAS_URL = "https://script.google.com/macros/s/AKfycbzhS8obCoEW68Gca9EG6eIdO3fmDTM-5YyybRXRrF16hNbpM1KvZly5RG01AntJkYJBdA/exec";
    const GLOBAL_GAS_URL = "https://script.google.com/macros/s/AKfycbzVK3sPVnbDfcRxk8n_5vi-gRU2X_1GTXVHuU8kcrk6Kfk3wkpqKRDJACtb3msUFRm6/exec";
    const GLOBAL_SHEET_ID = "1LAtBjiRbwTxt7qu9XSYwzbVMNYBvC6guq-Zv_Yp3Cf0";
    
    try {
      await Promise.all([
        // Gửi cho dự án
        fetch(PROJECT_GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ ...data, source: "energy.vimgroup.vn - IHOME Biomass" }),
        }),
        // Gửi cho Database Tổng VIMGROUP
        fetch(GLOBAL_GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ 
            ...data, 
            source: "energy.vimgroup.vn (contact-form)",
            targetSheetId: GLOBAL_SHEET_ID 
          }),
        })
      ]);
    } catch (gasError) {
      console.error("GAS Synchronization Error (non-blocking):", gasError);
    }

    return NextResponse.json({ success: true, message: "Gửi thành công!" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi API Submit:", error);
    return NextResponse.json({ success: false, message: "Lỗi máy chủ." }, { status: 500 });
  }
}
