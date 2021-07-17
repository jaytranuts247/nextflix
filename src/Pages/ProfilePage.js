import React from "react";
import "./ProfilePage.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansPage from "./PlansPage";

const ProfilePage = () => {
  const user = useSelector(selectUser);

  const handleSignout = () => {
    auth
      .signOut()
      .then(() => console.log("Sign out successful"))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePage__body">
        <div className="profilePage__container">
          <div className="profilePage__info">
            <div className="profilePage__icon">
              <h1>Your Profile</h1>
              {/* <img
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt=""
              /> */}
              <div className="profilePage__account">
                <i class="fas fa-user-circle"></i>
              </div>
            </div>
            <div className="profilePage__details">
              <h2>{user.email}</h2>
              <div className="profilePage__plans">
                <h3>Plans</h3>

                <PlansPage />

                <button
                  onClick={handleSignout}
                  className="profilePage__signOut"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
