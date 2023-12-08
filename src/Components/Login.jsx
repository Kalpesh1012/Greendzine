/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Logo from "../Assets/logo.png";
import Validate from "../Utils/Validate";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [errormessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleButton = () => {
    const messgae = Validate(email.current.value, password.current.value);
    setErrorMessage(messgae);
    if (errormessage === null) {
      navigate("/home");
    }
  };
  return (
    <div className="w-screen h-screen bg-black">
      <img
        className="xl:pl-[630px] xsm:pl-24 xl:pt-12 xsm:pt-6"
        src={Logo}
        alt="Logo"
      />
      <div className="xl:ml-[540px] xsm:ml-8 mt-28">
        <input
          className="bg-[#5E5E5E82] text-white xl:w-96 xsm:w-80 h-11 border-2 border-[#5E5E5E82] rounded-2xl pl-5 pt-1 text-base"
          type="email"
          ref={email}
          placeholder="E-mail"
        ></input>
      </div>
      <div className="xl:ml-[540px] xsm:ml-8 mt-6 ">
        <input
          className="bg-[#5E5E5E82] text-white xl:w-96  xsm:w-80 h-11 border-2 border-[#5E5E5E82] rounded-2xl pl-5 pt-1 text-base"
          type="password"
          ref={password}
          placeholder="Password"
        ></input>
      </div>
      <h1 className="text-red-600 xl:ml-[650px] xsm:ml-11 mt-3 ">
        {errormessage}
      </h1>
      <div className="w-screen h-screen bg-black">
        <div className="xl:ml-[540px] xsm:ml-8 mt-6">
          <button
            onClick={() => {
              handleButton();
            }}
            className="xl:w-96 xsm:w-80 h-11 border-2 rounded-2xl text-base border-[#5E5E5E82] bg-green-700"
          >
            Login
          </button>
        </div>
        <h1 className="xl:ml-[680px] xsm:ml-28 mt-6 text-green-700">
          Forgot Password?
        </h1>
      </div>
    </div>
  );
};

export default Login;
