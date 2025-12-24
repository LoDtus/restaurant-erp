import { lazy } from "react";
import type ProfileLayout from "../modules/profile/ProfileLayout";

export const components = {
    AuthLayout: lazy(() => import("@/modules/auth/AuthLayout")),
    SignIn: lazy(() => import("@/modules/auth/SignIn")),
    ForgotPassword: lazy(() => import("@/modules/auth/ForgotPassword")),
    ResetPassword: lazy(() => import("@/modules/auth/ResetPassword")),

    // Dashboard & shared
    DashboardLayout: lazy(() => import("@/modules/dashboard/DashboardLayout")),
    HrmLayout: lazy(() => import("@/modules/hrm/HrmLayout")),

    // HRM
    EmployeeLayout: lazy(() => import("@/modules/hrm/employees/EmployeeLayout")),
    ShiftLayout: lazy(() => import("@/modules/hrm/shifts/ShiftLayout")),
    PayrollLayout: lazy(() => import("@/modules/hrm/payrolls/PayrollLayout")),

    // Sale
    SaleLayout: lazy(() => import("@/modules/sale/SaleLayout")),

    // Resource
    ResourceLayout: lazy(() => import("@/modules/resources/ResourceLayout")),
    MaterialLayout: lazy(() => import("@/modules/resources/materials/MaterialLayout")),
    DocumentLayout: lazy(() => import("@/modules/resources/documents/DocumentLayout")),
    AssetLayout: lazy(() => import("@/modules/resources/assets/AssetLayout")),

    // Crm
    CustomerLayout: lazy(() => import("@/modules/crm/customers/CustomerLayout")),

    // Menu
    MenuLayout: lazy(() => import("@/modules/menu/MenuLayout")),
    MenuItemsLayout: lazy(() => import("@/modules/menu/MenuItemsLayout")),

    // Config
    ConfigLayout: lazy(() => import("@/modules/config/ConfigLayout")),
    RoleConfig: lazy(() => import("@/modules/config/RoleConfig")),
    PositionConfig: lazy(() => import("@/modules/config/PositionConfig")),
    DepartmentConfig: lazy(() => import("@/modules/config/DepartmentConfig")),
    Shif: lazy(() => import("@/modules/config/DepartmentConfig")),

    SettingLayout: lazy(() => import("@/modules/setting/SettingLayout")),
    ProfileLayout: lazy(() => import("@/modules/profile/ProfileLayout")),
} as const;

export type LazyComponentKey = keyof typeof components;
