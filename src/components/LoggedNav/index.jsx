import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

import "./LoggedNav.css";
import Checklist from "../Checklist";
import { useAuth } from "../../Context";
const LoggedNav = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { user } = useAuth();
  const buttonPress = () => {
    setToggle(!toggle);
  };

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const getProfilePicture = async () => {
      try {
        //post method
        const resLocal = await fetch(
          `http://localhost:3000/local-users/${user.userId}`
        );
        const localData = await resLocal.json();
        //return a url
        if (!localData) {
          const resGoogle = await fetch(
            `http://localhost:3000/google-users/${user.userId}`
          );
          const googleResult = await resGoogle.json();
          setProfilePicture(googleResult.profilePic);
        } else {
          const LocalResult = await resGoogle.json();
          setProfilePicture(LocalResult.profilePic);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getProfilePicture();
  }, [profilePicture]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo-holder">
            <div onClick={buttonPress} id="checklist-toggler">
              <i className={toggle ? "fas fa-times" : "fas fa-list-check"}></i>
            </div>
            <Checklist toggle={toggle} />
            <NavLink to="/" className="nav-logo">
              <img src="Bump-logo.png" alt="bump logo" id="navbar-logo-img" />
            </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className="nav-links"
                onClick={handleClick}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/calendar"
                className="nav-links"
                onClick={handleClick}
              >
                Calendar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/community"
                className="nav-links"
                onClick={handleClick}
              >
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/my-journal"
                className="nav-links"
                onClick={handleClick}
              >
                My Journal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faqs" className="nav-links" onClick={handleClick}>
                FAQs
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              style={{ transform: "translateY(5px)" }}
            ></i>
          </div>
          <NavLink to="/user" id="pfp-link" onClick={handleClick}>
            <img
              id="pfp"
              src={
                profilePicture ? profilePicture : "blank-profile-picture.webp"
              }
              alt="profile picture"
            />
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default LoggedNav;
