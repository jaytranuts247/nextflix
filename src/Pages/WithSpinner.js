import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const WithSpinner =
  (WrapperComponent) =>
  ({ isLoading, ...restProps }) => {
    console.log("isLoading", isLoading);
    return isLoading ? (
      <div style={{}}>
        <SyncLoader />
      </div>
    ) : (
      <WrapperComponent {...restProps} />
    );
  };

export default WithSpinner;
