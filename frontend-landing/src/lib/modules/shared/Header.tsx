"use client";
import { HEADER_TABS } from "@/lib/configs/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "nextjs-toploader/app";

export default function Header() {
    const router = useRouter();

    const scrollToSection = (sectionId: string) => {
        if (window.__lenis) {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerOffset = 100;
                const offsetTop = element.offsetTop - headerOffset;
                window.__lenis.scrollTo(offsetTop, {
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            }
        }
    };

    return (
        <header className="fixed top-0 w-full p-3 flex justify-center bg-blue-200 border">
            <nav
                className="md:w-[1350px]
                    border flex justify-between items-center
                "
            >
                <h1
                    className="text-2xl font-semibold
                        cursor-pointer duration-200 active:scale-95
                    "
                    onClick={() => router.replace("/")}
                >
                    Long Vị Quán
                </h1>

                <ul className="flex items-center">
                    {HEADER_TABS.map((tab, tabIndex) => (
                        <li
                            key={tab.id}
                            onClick={() => scrollToSection(tab.id)}
                            className={`border py-1 px-2
                                cursor-pointer duration-200 transition active:scale-95
                                ${ tabIndex > 0 && 'ml-1' }
                            `}
                        >
                            <FontAwesomeIcon className="mr-1" icon={tab?.icon}/>
                            <span className="pt-0.5">{tab?.label}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}