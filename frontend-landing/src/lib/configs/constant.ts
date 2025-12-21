import {
    faHouse,
    faUtensils,
    faCalendarCheck,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export const HEADER_TABS = [
    { id: "home", path: "/", label: "Trang chủ", icon: faHouse },
    { id: "about", path: "/about", label: "Giới thiệu", icon: faHouse },
    { id: "menu", path: "/menu", label: "Thực đơn", icon: faUtensils },
    { id: "reservation", path: "/reservation", label: "Đặt bàn", icon: faCalendarCheck },
    { id: "contact", path: "/contact", label: "Liên hệ", icon: faPhoneVolume },
];