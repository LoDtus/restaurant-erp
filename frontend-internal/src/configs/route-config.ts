import { lazy } from "react";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
    faChartSimple,
    faUsers,
    faGear,
} from "@fortawesome/free-solid-svg-icons";

// Layouts
const RootLayout = lazy(() => import("@/modules/shared/RootLayout"));
const AuthLayout = lazy(() => import("@/modules/auth/AuthLayout"));
// const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));
// const HrmLayout = lazy(() => import("@/modules/hrm/HrmLayout"));

export interface RouteMeta {
    path: string;
    label?: string;
    icon?: IconDefinition;
    hidden?: boolean; // không hiển thị trong menu
    requiredPermissions?: string[]; // hoặc string | string[]
    redirectIfUnauthorized?: "home" | "403" | string; // hành vi khi không có quyền
}

export interface RouteConfig extends RouteMeta {
    element?: React.ReactNode; // component chính
    layout?: React.ComponentType; // layout bao ngoài (nếu có)
    children?: RouteConfig[]; // nested routes
    index?: boolean; // route index
}

export const appRoutes: RouteConfig[] = [
    {
        path: "/auth",
        layout: AuthLayout,
        children: [
            {
                path: "",
                element: lazy(() => import("@/modules/auth/SignIn")),
                label: "Đăng nhập",
            },
            {
                path: "sign-in",
                element: lazy(() => import("@/modules/auth/SignIn")),
            },
            {
                path: "forgot-password",
                element: lazy(() => import("@/modules/auth/ForgotPassword")),
            },
        ],
    },

    {
        path: "/",
        layout: RootLayout, // layout chính có NavigationBar
        children: [
            {
                path: "",
                element: DashboardLayout,
                label: "Dashboard",
                icon: faChartSimple,
                requiredPermissions: ["view:dashboard"],
            },
            {
                path: "hrm",
                label: "Nhân sự",
                icon: faUsers,
                requiredPermissions: ["view:hrm"],
                layout: HrmLayout, // layout riêng cho module HRM
                children: [
                    {
                        path: "employees",
                        label: "Danh sách nhân viên",
                        requiredPermissions: ["view:employees"],
                        element: lazy(
                            () => import("@/modules/hrm/employees/EmployeeList")
                        ),
                    },
                    {
                        path: "schedule",
                        label: "Lịch làm việc",
                        requiredPermissions: ["view:schedule"],
                        children: [
                            {
                                path: "calendar",
                                label: "Lịch tổng",
                                element: lazy(
                                    () =>
                                        import(
                                            "@/modules/hrm/schedule/Calendar"
                                        )
                                ),
                            },
                            // ...
                        ],
                    },
                ],
            },

            {
                path: "config",
                label: "Cấu hình",
                icon: faGear,
                requiredPermissions: ["admin:config"],
                redirectIfUnauthorized: "/403", // hoặc 'home'
                children: [
                    {
                        path: "role",
                        label: "Vai trò",
                        element: lazy(() => import("@/modules/config/RoleConfig")),
                    },
                ],
            },
        ],
    },

    // 403 page
    {
        path: "/403",
        element: lazy(() => import("@/components/access/NoAccess")),
        hidden: true,
    },
];
