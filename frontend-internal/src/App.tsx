import './App.css';
import ContentSide from './modules/shared/ContentSide';
import NavigationBar from './modules/shared/NavigationBar';

export default function App() {
    return (
        <div className="w-full h-screen">
            <div className='w-full h-full flex'>
                <NavigationBar/>
                <ContentSide/>
            </div>
        </div>
    )
};