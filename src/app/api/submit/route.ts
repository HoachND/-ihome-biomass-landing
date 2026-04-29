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

    // 2. Send to Google Apps Script
    const GAS_URL = process.env.GAS_URL || "https://script.google.com/macros/s/AKfycbzhS8obCoEW68Gca9EG6eIdO3fmDTM-5YyybRXRrF16hNbpM1KvZly5RG01AntJkYJBdA/exec"; 
    
    if (GAS_URL) {
      try {
        await fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          // mode: "no-cors" is needed when calling from client, but from server we just ignore the response if it's tricky
        });
      } catch (gasError) {
        console.error("Lỗi gửi Google Sheet:", gasError);
        // Continue even if GAS fails
      }
    }

    return NextResponse.json({ success: true, message: "Gửi thành công!" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi API Submit:", error);
    return NextResponse.json({ success: false, message: "Lỗi máy chủ." }, { status: 500 });
  }
}
