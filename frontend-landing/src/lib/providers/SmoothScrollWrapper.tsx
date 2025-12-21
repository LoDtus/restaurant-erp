"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.6,           // chậm một chút → cảm giác sang trọng hơn
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: true,
            normalizeWheel: true,
            lerp: 0.08,              // thêm dòng này → mượt như bơ thật sự!
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Lưu global để dùng ở nơi khác
        window.__lenis = lenis;

        return () => {
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    return <>{children}</>;
}