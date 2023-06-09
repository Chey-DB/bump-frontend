import React from "react";
import axios from "axios";
import { useAuth } from "../../Context";
import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const LoadingPage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://bump-backend.onrender.com/auth/checkUser", {
        withCredentials: true,
      })
      .then((response) => {
        const userId = response.data._id;
        const username = response.data.username;
        if (response.data) {
          setUser({ userId, username });
          navigate("/dashboard");
        } else {
          console.log("User is not logged in");
        }
      });
  }, []);

  return (
    <div>
      LoadingPage
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default LoadingPage;
