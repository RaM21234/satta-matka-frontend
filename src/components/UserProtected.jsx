import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

const UserProtected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("auth-token");

      if (token) {
        console.log("Token is valid:", token);
      } else {
        console.log("Token is invalid or not found");
        navigate("/userlogin");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Component />
    </div>
  );
};

export default UserProtected;
