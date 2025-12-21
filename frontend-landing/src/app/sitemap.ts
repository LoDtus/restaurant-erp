// app/sitemap.ts  (đặt trong thư mục app – Next.js 15 tự nhận)
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://longviquan.vn";
    return [
        { url: baseUrl, lastModified: new Date(), priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.9 },
        { url: `${baseUrl}/menu`, lastModified: new Date(), priority: 0.9 },
        { url: `${baseUrl}/reservation`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    ];
};