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

    const getFullPath = (parentPath: string, childPath: string) => {
        return `${parentPath}${childPath}`.replace(/\/+/g, '/');
    };

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
                            className={`w-full py-1 px-5 mt-1 text-left text-dark-gray-text font-semibold rounded-md
                                flex justify-between items-center
                                ${isActive ? 'text-white bg-blue' : 'duration-200 hover:text-black hover:bg-gray-200 active:scale-95'}
                            `}
                            onClick={() => {
                                if (!tab.subMenu || tab.subMenu.length === 0) {
                                    navigate(tab.path);
                                    return;
                                }

                                // Tab CÓ submenu
                                const currentPath = location.pathname;

                                // Kiểm tra xem đang ở chính xác path của tab cha chưa
                                const isAtParentPath = currentPath === tab.path || currentPath === tab.path + '/';

                                if (isAtParentPath) {
                                    // Đã ở parent → chỉ cần mở menu ra (không navigate)
                                    // hoặc bạn có thể navigate lại chính nó để trigger re-render nếu cần
                                    // navigate(tab.path); // optional
                                } else {
                                    // Chưa ở parent → cần quyết định đi đâu

                                    // Cách 1: Luôn đi vào index nếu có (nhiều người thích cách này)
                                    navigate(tab.path);

                                    // Cách 2: Chỉ đi index nếu route cha có index, còn không thì đi con đầu tiên
                                    // (cách này cần biết cấu trúc router → hơi khó tự động, thường dùng cách dưới)
                                }
                            }}
                        >
                            <div className="flex items-center">
                                <FontAwesomeIcon className="mr-2" icon={tab?.icon ?? ''} />
                                <span>{tab?.label}</span>
                            </div>
                            {tab?.subMenu && (
                                isActive
                                    ? <FontAwesomeIcon icon={faAngleDown} />
                                    : <FontAwesomeIcon icon={faAngleRight} />
                            )}
                        </button>

                        {tab.subMenu && isActive && (
                            <div className="mt-1 ml-3 pl-2 flex flex-col border-l border-gray-line">
                                {tab.subMenu.map((sub, subIndex) => {
                                    const fullSubPath = getFullPath(tab.path, sub.path);
                                    const isSubActive = location.pathname === sub.path;

                                    return (
                                        <button
                                            key={sub.path}
                                            className={`py-1 px-5 text-left text-dark-gray-text font-semibold rounded-md
                                                ${isSubActive ? 'text-white bg-blue' : 'duration-200 hover:text-black hover:bg-gray-200 active:scale-95'}
                                                ${subIndex > 0 && 'mt-1'}
                                            `}
                                            onClick={() => navigateTo(fullSubPath)}
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