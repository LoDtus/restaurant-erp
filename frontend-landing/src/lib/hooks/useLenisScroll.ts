import { useEffect } from "react";

export const useLenisScroll = (sectionId: string) => {
    useEffect(() => {
        const startScroll = () => {
            if (window.__lenis && typeof window.__lenis.scrollTo === "function") {
                const element = document.getElementById(sectionId);
                if (element) {
                    const headerOffset = 100;
                    const offsetTop = element.offsetTop - headerOffset;

                    window.__lenis.scrollTo(offsetTop, {
                        duration: 1.6,
                        easing: (t) =>
                            Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                }
            } else {
                setTimeout(startScroll, 50);
            }
        };
        startScroll();
    }, [sectionId]);
};
