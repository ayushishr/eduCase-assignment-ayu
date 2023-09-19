import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/dashboard' element={<DashboardPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
