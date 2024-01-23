import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout Component={Home} />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/adminsignup" element={<AdminSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
