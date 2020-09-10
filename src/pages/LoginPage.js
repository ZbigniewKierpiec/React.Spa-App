import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Enter Login
        <input type="text" />
      </label>
      <label htmlFor="">
        Enter the Password
        <input type="password" />
      </label>
      <button>Log In</button>
    </div>
  );
};

export default LoginPage;
