import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectSubscription, selectUser } from "../features/userSlice";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  const subscription = useSelector(selectSubscription);

  // console.log(subscription?.current_period_end, new Date());

  return (
    <Route
      {...rest}
      render={(props) =>
        user && subscription && subscription.current_period_end < new Date() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/profile" />
        )
      }
    />
  );
};

export default ProtectedRoute;
