import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscriber = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        console.log("logout on app");
        dispatch(logout());
      }
    });

    return unSubscriber;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <ProtectedRoute exact path="/" component={HomePage} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
