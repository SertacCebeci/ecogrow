import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = (e) => {
    e.preventDefault();
  };

  const handleUsernameChange = (e) => {
    let val = e.target.value;
    setUsername(val);
  };
  const handlePasswordChange = (e) => {
    let val = e.target.value;
    setPassword(val);
  };
  return (
    <form className="flex flex-col w-3/12 h-4/6 p-4 items-center justify-start opacity-60 rounded-md shadow-lg shadow-black backdrop-blur-sm border">
      <div className="w-4/5 py-8 px-4 bg-white border shadow-lg shadow-black flex flex-col items-center justify-evenly mt-2 mb-4">
        <h3 className="font-bold text-2xl">Login Here</h3>
      </div>

      <div className="w-4/5 py-8 px-4 bg-white border shadow-lg shadow-black flex flex-col items-center justify-evenly mt-2 mb-4">
        <label className="text-lg font-semibold my-2 " htmlFor="username">
          Username
        </label>
        <input
          className="text-start pl-2 my-2 w-4/5 border border-black"
          placeholder="Email or Phone"
          id="username"
          onChange={(e) => handleUsernameChange(e)}
        />
        <label className="text-lg font-semibold my-2" htmlFor="password">
          Password
        </label>
        <input
          className="text-start pl-2 my-2 w-4/5 border border-black"
          type="password"
          id="password"
          onChange={(e) => handlePasswordChange(e)}
        />
      </div>

      <button
        onClick={(e) => handleLoginClick(e)}
        className="text-center w-4/5 h-12 border bg-white hover:bg-gray-200 rounded-md shadow-lg shadow-black text-lg font-semibold"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
