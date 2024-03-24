import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LoginSignup} from '../pages/LoginSignup';
import { MainPage } from '../pages/MainPage';
import {MessagingPage} from "../pages/MessagingPage";

function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <style>
                {`body { background-color: black; }`}
            </style>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/messages" element={<MessagingPage />}/>
                <Route path="/login" element={<LoginSignup/>}/>
                <Route path="/feed" element={<MainPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;