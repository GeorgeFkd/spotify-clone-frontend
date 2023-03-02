import React from "react";
import "./LoginButton.css";
function LoginButton({ app, Icon }) {
  return (
    <div className="loginButton">
      <button>
        <Icon />
        <p>Continue with {app}</p>
      </button>
    </div>
  );
}

export default LoginButton;
