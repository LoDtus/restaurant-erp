"use client";
import { useLenisScroll } from "@/lib/hooks/useLenisScroll";
import { usePathname } from "next/navigation";
import Menu from "../menu/Menu";
import Reservation from "../reservation/Reservation";

const sections = ["home", "about", "menu", "reservation", "contact"] as const;

const getSectionFromPath = (path: string): string => {
    if (path === "/") return "home";
    const s = path.slice(1);
    return sections.includes(s as any) ? s : "home";
};

export default function PageContent() {
    const pathname = usePathname();
    const targetSection = getSectionFromPath(pathname);

    useLenisScroll(targetSection);

    return (
        <main
            className="flex flex-col items-center border
                grow pt-18
            "
        >
            <div
                className="md:w-[1350px]
                    border
                "
            >
                <section id="home" className="min-h-screen ...">
                    Home
                </section>
                <section id="about" className="min-h-screen ...">
                    Giới thiệu
                </section>
                <section id="menu" className="min-h-screen ...">
                    <Menu/>
                </section>
                <section id="reservation" className="min-h-screen ...">
                    <Reservation/>
                </section>
                <section id="contact" className="min-h-screen ...">
                    Liên hệ
                </section>
            </div>
        </main>
    );
}