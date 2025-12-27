import { components } from './components';

export type RouteItem = {
    path: string;
    label?: string;
    icon?: React.ReactNode;
    element?: React.ComponentType;
    children?: RouteItem[];
    indexElement?: React.ComponentType;
};

// fix lại, không còn thực hiện thao dạng có element ở tab cha nữa
export const routeConfig: RouteItem[] = [
    { path: '/auth', label: 'Truy cập', children: [
        // { path: '/', label: 'Đăng nhập', element: components?.AuthLayout },
        { path: '/sign-in', label: 'Đăng nhập', element: components?.SignIn },
        { path: '/forgot-password', label: 'Quên mật khẩu', element: components?.ForgotPassword },
        { path: '/reset-password', label: 'Đặt lại mật khẩu', element: components?.ResetPassword },
    ] },

    { path: '/', label: 'Tổng quan', element: components?.DashboardLayout },
    { path: '/menu', label: 'Thực đơn', children: [
        { path: '', label: 'Hiện tại', element: components?.MenuLayout },
        { path: 'items', label: 'Danh sách', element: components?.MenuLayout },
    ] },
    { path: '/hrm', label: 'Nhân sự',  children: [
        { path: '', label: 'Tổng quan', element: components?.HrmLayout },
        { path: 'employees', label: 'Thông tin', element: components?.EmployeeLayout },
        { path: 'shifts', label: 'Ca làm việc', element: components?.ShiftLayout, children: [
            { path: 'attendances', label: 'Lịch làm việc', element: components?.EmployeeLayout },
            { path: 'schedules', label: 'Chấm công', element: components?.EmployeeLayout },
        ] },
        { path: 'payrolls', label: 'Bảng lương', element: components?.PayrollLayout },
    ] },
    { path: '/crm', label: 'Quản lý khách hàng', children: [
        { path: 'customers', label: 'Danh sách', element: components?.CustomerLayout },
    ] },
    { path: '/sales', label: 'Tài chính & Kinh doanh', element: components?.SaleLayout },
    { path: '/resources', label: 'Kho', children: [
        { path: 'materials', label: 'Nguyên liệu', element: components?.MaterialLayout },
        { path: 'documents', label: 'Giấy tờ', element: components?.DocumentLayout },
        { path: 'assets', label: 'Vật tư', element: components?.AssetLayout },
    ] },
    { path: '/configs', label: 'Thiết lập', children: [
        { path: 'roles', label: 'Vai trò', element: components?.RoleConfig },
        { path: 'positions', label: 'Vị trí', element: components?.PositionConfig },
        { path: 'departments', label: 'Phòng ban', element: components?.DepartmentConfig },
        { path: 'shifts', label: 'Ca làm việc', element: components?.DepartmentConfig },
        { path: 'nav-bar', label: 'Thanh điều hướng', element: components?.NavigationBarConfig },
    ] },
    { path: '/setting', label: 'Cài đặt', element: components?.SettingLayout },
    { path: '/profile', label: 'Trang cá nhân', element: components?.ProfileLayout },
];