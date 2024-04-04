import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar'

const AdminProtected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("auth-token");
      console.log("admin token", token)
      if (token) {
        console.log("Token is valid:", token);
      } else {
        console.log("Token is invalid or not found");
        navigate("/adminlogin");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <Sidebar />

    </div>
  );
};

export default AdminProtected;
