import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminSignup from './pages/Admin/AdminSignup';
import UserSignup from './pages/User/UserSignup';
import UserLogin from './pages/User/UserLogin';
import User from './pages/User/User';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <Routes>
          <Route exact path="/" element={<Layout Component={Home} />} />


          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/adminsignup" element={<AdminSignup />} />
          <Route exact path="/admin" element={<Admin />} />


          <Route exact path="/userlogin" element={<UserLogin />} />
          <Route exact path="/usersignup" element={<UserSignup />} />
          <Route exact path="/user" element={<User />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
