export const NAVIGATION_TABS = [
    { key: "dashboard", path: "/", label: "Tổng quan", icon: null },
    { key: "hrm", path: "/hrm", label: "Nhân sự", icon: null, subMenu: [
        { key: "hrm-employee", path: "/employees", label: "Thông tin" },
        { key: "hrm-payroll", path: "/payrolls", label: "Bảng lương" },
        { key: "hrm-shift", path: "/shifts", label: "Ca làm việc" },
    ] },
    { key: "resources", path: "/resources", label: "Kho", icon: null, subMenu: [
        { key: "resources-material", path: "/materials", label: "Nguyên liệu" },
        { key: "resources-document", path: "/documents", label: "Giấy tờ" },
        { key: "resources-asset", path: "/assets", label: "Vật tư" },
    ] },
    { key: "crm", path: "/crm", label: "Khách hàng", icon: null },
    { key: "operation", path: "/operation", label: "Vận hành", icon: null },
    { key: "catalog", path: "/catalog", label: "Danh mục", icon: null, subMenu: [
        { key: "catalog-menu", path: "/menu", label: "Thực đơn" },
        { key: "catalog-category", path: "/category", label: "Phân loại" },
    ] },
    { key: "sale", path: "/sale", label: "Tài chính & Kinh doanh", icon: null },
    { key: "notification", path: "/notification", label: "Thông báo", icon: null },
    { key: "config", path: "/configs", label: "Thiết lập", icon: null, subMenu: [
        { key: "config-role", path: "/roles", label: "Vai trò" },
        { key: "config-position", path: "/positions", label: "Vị trí" },
        { key: "config-department", path: "/departments", label: "Phòng ban" },
    ] },
    { key: "setting", path: "/setting", label: "Cài đặt", icon: null },
]