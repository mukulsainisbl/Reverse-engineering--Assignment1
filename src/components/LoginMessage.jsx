// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{ isLoggedIn ? <h4>Welcome Back</h4> : <h4>Please Log In</h4>} </div>;
}

export default LoginMessage;
