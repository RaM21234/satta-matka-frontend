import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminSignup from "./pages/Admin/AdminSignup";
import UserSignup from "./pages/User/UserSignup";
import UserLogin from "./pages/User/UserLogin";
import User from "./pages/User/User";

import UserProtected from "./components/UserProtected";
import AdminProtected from "./components/AdminProtected";
import Jodicsv from "./pages/Admin/Jodicsv";
import Panelcsv from "./pages/Admin/Panelcsv";
import JodiTable from "./pages/Home/JodiTable";
import PanelTable from "./pages/Home/PanelTable";
import EditableJodi from "./pages/Home/test1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <Route exact path="/editableJodi" element={<EditableJodi />} />

          {/* home routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jodi/:name" element={<JodiTable />} />
          <Route exact path="/panel/:name" element={<PanelTable />} />

          {/* user routes  */}
          <Route exact path="/userlogin" element={<UserLogin />} />
          <Route exact path="/usersignup" element={<UserSignup />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
