import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bellicon from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { logoutUser } from "../../Firebase";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logoutUser();
    alert(result.message);
    navigate("/login"); // or your landing route
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tu Show</li>
          <li>Movies</li>
          <li>My list</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img
          className="icons"
          src={search}
          alt="search image"
          style={{ cursor: "pointer" }}
        />
        <p style={{ cursor: "pointer" }}>Childer</p>
        <img className="icons" src={bellicon} alt="bellicon image" />
        <div className="nvarbar_profile">
          <img src={profile} alt="profile image" className="profile" />
          <img src={caret} alt="caret image" />
          <div className="dropdown">
            <p onClick={() => handleLogout()}>Sign-out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
