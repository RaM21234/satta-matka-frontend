import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminSignup from "./pages/Admin/AdminSignup";
import UserSignup from "./pages/User/UserSignup";
import UserLogin from "./pages/User/UserLogin";
import User from "./pages/User/User";
import { ToastContainer } from "react-toastify";
import UserProtected from "./components/UserProtected";
import AdminProtected from "./components/AdminProtected";
import Jodicsv from "./pages/Admin/Jodicsv";
import Panelcsv from "./pages/Admin/Panelcsv";
import JodiTable from "./pages/Home/JodiTable";
import PanelTable from "./pages/Home/PanelTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />

        <Routes>
          {/* admin routes */}
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/adminsignup" element={<AdminSignup />} />
          <Route exact path="/admin" element={<AdminProtected />} />

          {/* home routes */}
          <Route exact path="/" element={<UserProtected Component={Home} />} />
          <Route exact path="/jodi" element={<JodiTable />} />
          <Route exact path="/panel" element={<PanelTable />} />

          {/* user routes  */}
          <Route exact path="/userlogin" element={<UserLogin />} />
          <Route exact path="/usersignup" element={<UserSignup />} />
          <Route
            exact
            path="/user"
            element={<UserProtected Component={User} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
