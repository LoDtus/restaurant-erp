import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleDown,
    faAnglesRight,
    faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NAVIGATION_TABS } from "../../configs/constants";

export default function NavigationBar() {
    const profile = "";
    const location = useLocation();
    const navigate = useNavigate();
    const [toggleNav, setToggleNav] = useState(false);

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div
            id="navigationBar"
            className="h-full pt-1 pb-2 px-2 shrink-0 flex flex-col border-r border-gray-line"
        >
            {NAVIGATION_TABS?.map((tab, tabIndex) => {
                const isActive = location?.pathname?.startsWith(tab.path);
                return (
                    <div key={tabIndex}>
                        <button
                            className={`w-full py-2 px-5 mt-1 text-left text-dark-gray-text font-semibold rounded-md
                                flex justify-between items-center
                                ${isActive ? 'text-white bg-blue' : 'duration-200 hover:text-black hover:bg-gray-200 active:scale-95'}
                            `}
                            onClick={() => navigateTo(tab?.path)}
                        >
                            <div className="flex items-center">
                                <FontAwesomeIcon className="mr-2" icon={tab?.icon}/>
                                <span>{tab?.label}</span>
                            </div>
                            { tab?.subMenu && (isActive
                                ? <FontAwesomeIcon icon={faAngleDown}/>
                                : <FontAwesomeIcon icon={faAngleRight}/>
                            )}
                        </button>

                        {tab.subMenu && isActive && (
                            <div className="mt-1 ml-3 pl-2 flex flex-col border-l border-gray-line">
                                {tab.subMenu.map((sub, subIndex) => {
                                    const isSubActive = location.pathname === sub.path;
                                    return (
                                        <button
                                            key={sub.path}
                                            className={`py-1 px-5 text-left text-dark-gray-text font-semibold rounded-md
                                                ${isSubActive ? 'text-white bg-blue' : 'duration-200 hover:text-black hover:bg-gray-200 active:scale-95'}
                                                ${subIndex > 0 && 'mt-1'}
                                            `}
                                            onClick={() => navigateTo(sub.path)}
                                        >
                                            {sub.label}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )
            })}

            <button onClick={() => navigateTo("/auth/sign-in")}>Auth</button>
        </div>
    );
};