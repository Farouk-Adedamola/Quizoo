// import React from 'react'
import { Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <div>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
        <h2>
          <Link to="/signup">Signup</Link>
        </h2>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default SharedLayout;
