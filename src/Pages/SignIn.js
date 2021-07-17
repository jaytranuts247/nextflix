import React, { useState } from "react";
import { auth } from "../firebase";
import "./SignIn.css";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // var user = userCredential.user;
        // console.log(userCredential, user);
        console.log("Successfully Sign Up new user");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        console.log("Successfully Sign in new user");
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          value={user.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="password"
          type="password"
          value={user.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signin__gray">New to XFlix?</span>{" "}
          <span className="signin__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
