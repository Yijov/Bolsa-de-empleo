import React from "react";
import { Link } from "react-router-dom";
import { FcWorkflow } from "react-icons/fc";
const Logo: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="AppLogo">
        <FcWorkflow className="AppLogo-icon" />
        <h1>Not Aldaba</h1>
      </div>
    </Link>
  );
};

export default Logo;
