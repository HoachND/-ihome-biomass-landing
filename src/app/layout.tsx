import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://energy.vimgroup.vn"),
  title: "IHOME Việt Nam - Năng Lượng Sinh Khối Biomass | VIMGROUP",
  description: "IHOME Việt Nam by VIMGROUP - Chuyên sản xuất và cung cấp nhiên liệu sinh khối: viên nén gỗ, củi mùn cưa, thanh củi ép. Giải pháp năng lượng xanh, thân thiện môi trường, tiết kiệm chi phí cho doanh nghiệp.",
  keywords: "năng lượng sinh khối, biomass, viên nén gỗ, wood pellets, củi mùn cưa, IHOME, VIMGROUP, nhiên liệu sinh khối, năng lượng xanh, xuất khẩu biomass",
  openGraph: {
    title: "IHOME Việt Nam - Năng Lượng Sinh Khối Bền Vững",
    description: "Giải pháp nhiên liệu sinh khối chất lượng cao, thân thiện môi trường. Xuất khẩu quốc tế.",
    type: "website",
    url: "https://energy.vimgroup.vn",
    siteName: "IHOME Việt Nam",
    locale: "vi_VN",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "IHOME Việt Nam - Biomass Energy",
      },
    ],
  },
  icons: {
    icon: "/images/logo-ihome.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-slate-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
