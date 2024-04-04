import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("auth-token");

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
      <Component />
    </div>
  );
};

export default AdminProtected;
