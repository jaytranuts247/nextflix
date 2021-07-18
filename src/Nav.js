import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__contents">
        <div className="nav__logo">
          <img
            src="../images/xflix_2.svg"
            alt="logo"
            onClick={() => history.push("/")}
          />
        </div>
        {/* <img
          className="nav__avatar"
          onClick={() => history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        /> */}
        <div className="nav__account" onClick={() => history.push("/profile")}>
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
