import React, { useState } from "react";
import "./LoginPage.css";
import SignIn from "./SignIn";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginPage">
      <div className="loginPage__background">
        <img
          className="loginPage__logo"
          src="../../images/xflix_2.svg"
          alt=""
        />
        <button className="loginPage__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginPage__gradient"></div>
      </div>
      <div className="loginPage__body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere, Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className="loginPage__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginPage__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
