import React from "react";
import img from "../images/notFound.jpeg";
const NotFound = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>
        The content, You're looking for, could not be found on the Server
      </h1>
      <img src={img} alt="" className="img" style={{ width: "100%" }} />
    </React.Fragment>
  );
};

export default NotFound;
