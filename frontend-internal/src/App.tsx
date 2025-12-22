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
import EmployeeLayout from './modules/hrm/employee/EmployeeLayout';

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
                    <Route path="employee" element={<EmployeeLayout/>}/>
                    <Route path="setting" element={<SettingLayout/>}/>
                    <Route path="profile" element={<ProfileLayout/>}/>
                    <Route path="config" element={<ConfigLayout/>}/>
                    {/* <Route path="config/position" element={<PositionConfig/>}/> */}
                    <Route path="config/role" element={<RoleConfig/>}/>
                    {/* <Route path="schedule" element={<ScheduleLayout/>}/> */}
                    {/* <Route path="attendance" element={<AttendanceLayout/>}/> */}
                    {/* <Route path="contract" element={<ContractLayout/>}/> */}
                </Route>
            </Routes>

            {/* <Header/>
            <div className='w-full h-full flex'>
                <NavigationBar/>
                <ContentSide/>
            </div> */}
        </div>
    )
};