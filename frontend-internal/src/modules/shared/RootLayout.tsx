import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

export default function RootLayout() {
    return (
        <div className='w-full h-full'>
            <Header/>
            <div className="grow flex">
                <NavigationBar/>
                <div className="grow">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};