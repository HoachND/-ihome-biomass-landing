/**
 * GOOGLE APPS SCRIPT CHO IHOME BIOMASS
 * Hướng dẫn sử dụng:
 * 1. Mở file Google Sheet "Data Customer_IHOME Biomass"
 * 2. Chọn Tiện ích mở rộng (Extensions) -> Apps Script
 * 3. Copy toàn bộ code này dán đè vào file Code.gs
 * 4. Nhấn Deploy (Triển khai) -> New deployment (Triển khai mới)
 * 5. Chọn loại Web App, Execute as: Me, Who has access: Anyone
 * 6. Copy URL Web App và dán vào biến môi trường GAS_URL trên Vercel.
 */

const ADMIN_EMAIL = "ihomevina@gmail.com";
const SHEET_NAME = "Trang tính 1"; // Đổi thành tên sheet nếu cần

function doPost(e) {
  try {
    // Phân tích dữ liệu JSON gửi từ Frontend
    const data = JSON.parse(e.postData.contents);
    const { name, phone, email, projectType, message, language } = data;
    
    // Mở Sheet hiện tại
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Định dạng thời gian
    const timestamp = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
    
    // Thêm dòng mới vào Sheet
    // Cột: Thời gian | Họ tên | Số điện thoại | Email | Sản Phẩm Quan Tâm | Nguồn
    sheet.appendRow([
      timestamp,
      name,
      "'" + phone, // Dấu nháy đơn để Google Sheet giữ nguyên số 0 ở đầu
      email || "",
      projectType || "",
      "Landing Page IHOME Biomass" + (message ? ` (Ghi chú: ${message})` : "")
    ]);
    
    // Gửi Email thông báo (Bilingual)
    sendEmailNotification(data, timestamp);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data, timestamp) {
  const { name, phone, email, projectType, message, language } = data;
  
  const subject = `[IHOME BIOMASS] KHÁCH HÀNG MỚI - ${name} - ${phone}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #F97316; padding: 20px; text-align: center;">
        <h2 style="color: white; margin: 0; font-size: 24px;">🌱 THÔNG BÁO KHÁCH HÀNG MỚI</h2>
        <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">IHOME BIOMASS LANDING PAGE</p>
      </div>
      
      <div style="padding: 30px; background-color: #ffffff;">
        <p style="color: #475569; font-size: 16px; line-height: 1.5; margin-top: 0;">Xin chào hệ thống IHOME,<br>Hệ thống vừa ghi nhận một yêu cầu tư vấn mới từ khách hàng. Dưới đây là thông tin chi tiết:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b; width: 150px;">Thời gian</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">${timestamp}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Họ và Tên</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Số Điện Thoại</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #F97316; font-weight: bold;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Email</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">${email || "Không cung cấp"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Sản Phẩm</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: bold;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Ghi chú (nếu có)</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">${message || "Không có ghi chú"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #1e293b;">Ngôn ngữ</td>
            <td style="padding: 12px; color: #475569;">${language === "en" ? "English" : "Tiếng Việt"}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="tel:${phone}" style="background-color: #84CC16; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Gọi Ngay</a>
        </div>
      </div>
      
      <div style="background-color: #f8fafc; padding: 15px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">Email này được gửi tự động từ hệ thống Landing Page IHOME Biomass.<br>Vui lòng không trả lời trực tiếp email này.</p>
      </div>
    </div>
  `;
  
  try {
    GmailApp.sendEmail(ADMIN_EMAIL, subject, "", {
      htmlBody: htmlBody,
      name: "IHOME System"
    });
  } catch (e) {
    console.error("Lỗi gửi email: ", e);
  }
}

// Hàm để hỗ trợ OPTIONS request (CORS preflight) nếu gọi trực tiếp từ client
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
