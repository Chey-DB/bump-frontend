import React from "react";
import "./styles.css";
import MotivationalQuote from "../../components/MotivationalQuote";
import ProgressBar from "../../components/ProgressBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  axios.get('http://localhost:3000/auth/checkUser', { withCredentials: true })
  .then(response => {
    console.log(response.data);
    if (response.data) {
      // User is logged in
      // Use the user data
      console.log(response.data._id);
    } else {
      // User is not logged in
      console.log("User is not logged in");
    }
  });



  const user = {
    dueDate: new Date("2023-12-31"),
    currentWeek: 18,
  };

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/logout");
      if (response.status === 200) {
        navigate("/login");
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (err) {
      console.error("An error occurred while trying to log out:", err);
    }
  };

  return (
    <>
      <div className="container">
        {/* <Checklist /> */}
        <h1>Dashboard Page</h1>
        <h2>This is something</h2>
        <br />
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste,
          fugiat neque quod ipsa error alias totam dolorum sapiente explicabo?
        </h3>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          quaerat cumque et id sapiente accusantium commodi earum cupiditate
          exercitationem impedit veritatis natus pariatur repellendus odit
          nostrum at aut aspernatur. Perferendis!
        </p>
        <div className="button-div">
          <button>Press Me</button>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
