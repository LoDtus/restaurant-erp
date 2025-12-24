import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './modules/auth/AuthLayout';
import SignIn from './modules/auth/SignIn';
import ForgotPassword from './modules/auth/ForgotPassword';
import ResetPassword from './modules/auth/ResetPassword';
import RootLayout from './modules/shared/RootLayout';
import DashboardLayout from './modules/dashboard/DashboardLayout';
import ProfileLayout from './modules/profile/ProfileLayout';
import ConfigLayout from './modules/config/ConfigLayout';
import RoleConfig from './modules/config/RoleConfig';
import SettingLayout from './modules/setting/SettingLayout';
import EmployeeLayout from './modules/hrm/employees/EmployeeLayout';
import ShiftLayout from './modules/hrm/shifts/ShiftLayout';
import PayrollLayout from './modules/hrm/payrolls/PayrollLayout';
import MaterialLayout from './modules/resources/materials/MaterialLayout';
import DocumentLayout from './modules/resources/documents/DocumentLayout';
import AssetLayout from './modules/resources/assets/AssetLayout';
import PositionConfig from './modules/config/PositionConfig';
import DepartmentConfig from './modules/config/DepartmentConfig';
import HrmLayout from './modules/hrm/HrmLayout';
import ResourceLayout from './modules/resources/ResourceLayout';
import ScheduleLayout from './modules/hrm/shifts/ScheduleLayout';
import AttendanceLayout from './modules/hrm/shifts/AttendanceLayout';
import NoAccessLayout from './modules/shared/NoAccessLayout';

export default function App() {
    return (
        <div className="w-full h-screen">
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route index element={<SignIn/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                    <Route path="reset-password" element={<ResetPassword/>}/>
                </Route>

                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<DashboardLayout/>}/>
                    <Route path="dashboard" element={<DashboardLayout/>}/>
                    <Route path="/hrm">
                        <Route index element={<HrmLayout/>}/>
                        <Route path="employees" element={<EmployeeLayout/>}/>
                        <Route path="shifts" element={<ShiftLayout/>}/>
                        <Route path="payrolls" element={<PayrollLayout/>}/>
                    </Route>
                    <Route path="/resources">
                        <Route index element={<ResourceLayout/>}/>
                        <Route path="materials" element={<MaterialLayout/>}/>
                        <Route path="documents" element={<DocumentLayout/>}/>
                        <Route path="assets" element={<AssetLayout/>}/>
                    </Route>
                    <Route path="setting" element={<SettingLayout/>}/>
                    <Route path="profile" element={<ProfileLayout/>}/>
                    <Route path="config" element={<ConfigLayout/>}/>
                    <Route path="/configs">
                        <Route path="roles" element={<RoleConfig/>}/>
                        <Route path="positions" element={<PositionConfig/>}/>
                        <Route path="departments" element={<DepartmentConfig/>}/>
                    </Route>
                    <Route path="config/position" element={<PositionConfig/>}/>
                    <Route path="config/role" element={<RoleConfig/>}/>
                    <Route path="schedule" element={<ScheduleLayout/>}/>
                    <Route path="attendance" element={<AttendanceLayout/>}/>
                </Route>
            </Routes>

            <NoAccessLayout/>
        </div>
    )
};