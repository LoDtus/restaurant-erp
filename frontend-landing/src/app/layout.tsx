import "./globals.css";
import 'video.js/dist/video-js.css';
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import Header from "@/lib/modules/shared/Header";
import PageContent from "@/lib/modules/shared/PageContent";
import Footer from "@/lib/modules/shared/Footer";
import SmoothScrollWrapper from "@/lib/providers/SmoothScrollWrapper";

export const metadata: Metadata = {
    title: {
        default: "Long Vị Quán",
        template: "%s | Long Vị Quán",
    },
    description: "Nhà hàng Việt Nam truyền thống - Long Vị Quán",
    keywords: ["nhà hàng", "long vị quán", "ẩm thực việt", "đặt bàn"],
    authors: [{ name: "Nguyen Trung Long" }],
    openGraph: {
        title: "Long Vị Quán",
        description: "Hương vị Việt Nam đích thực",
        type: "website",
        locale: "vi_VN",
    },
};

// Thiếu metadata và title cho từng site
/**
"/": "Long Vị Quán - Nhà hàng Việt Nam truyền thống",
"/about": "Giới thiệu - Long Vị Quán",
"/menu": "Thực đơn - Long Vị Quán",
"/reservation": "Đặt bàn - Long Vị Quán",
"/contact": "Liên hệ - Long Vị Quán",
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className="antialiased">
                <NextTopLoader
                    color="#f59e0b"
                    height={3}
                    showSpinner={false}
                    speed={300}
                />
                <SmoothScrollWrapper>
                    <Header/>
                    <PageContent/>
                    <Footer/>
                </SmoothScrollWrapper>
            </body>
        </html>
    );
};