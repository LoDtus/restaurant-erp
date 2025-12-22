export const NAVIGATION_TABS = [
    { id: "dashboard", path: "/", label: "Tổng quan", icon: null },
    { id: "hrm", path: "/hrm", label: "Nhân sự", icon: null, subMenu: [
        { id: "hrm-employee", path: "/employee", label: "Thông tin" },
        { id: "hrm-payroll", path: "/payroll", label: "Bảng lương" },
        { id: "hrm-shift", path: "/shift", label: "Ca làm việc" },
    ] },
    { id: "logistic", path: "/logistic", label: "Kho hàng", icon: null, subMenu: [
        { id: "logistic-material", path: "/material", label: "Nguyên liệu" },
        { id: "logistic-asset", path: "/asset", label: "Vật tư" },
        { id: "logistic-document", path: "/document", label: "Giấy tờ" },
    ] },
    { id: "crm", path: "/crm", label: "Khách hàng", icon: null },
    { id: "operation", path: "/operation", label: "Vận hành", icon: null },
    { id: "catalog", path: "/catalog", label: "Danh mục", icon: null, subMenu: [
        { id: "catalog-menu", path: "/menu", label: "Thực đơn" },
        { id: "catalog-category", path: "/category", label: "Phân loại" },
    ] },
    { id: "sale", path: "/sale", label: "Tài chính & Kinh doanh", icon: null },
    { id: "notification", path: "/notification", label: "Thông báo", icon: null },
    { id: "config", path: "/config", label: "Thiết lập", icon: null },
    { id: "setting", path: "/setting", label: "Cài đặt", icon: null },
]