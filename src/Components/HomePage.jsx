/* eslint-disable no-unused-vars */
import React from "react";
import moptro from "../assets/moptro.png";
import Logo from "../assets/user.png";
import ProgressItem from "./ProgressItem";
import { productivityData } from "../Utils/Constants";
import Fotter from "./Fotter";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="flex justify-between">
        <Link to="/home">
          <img
            className="xl:h-28 xsm:h-24  xl:w-40 xsm:w-24 xl:mt-2 xsm:mt-20 xl:ml-0 xsm:ml-36"
            src={moptro}
            alt="Moptro"
          />
        </Link>
        <Link to="/">
          <img
            className="xl:h-28 xsm:h-20 xl:w-40 xsm:w-20"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="xl:h-[450px] xl:w-[500px] xsm:w-96 xl:ml-[520px] xsm:ml-0 xl:mt-6 xsm:mt-12 border-2 border-[#5E5E5E82] rounded-xl bg-[#5E5E5E82]">
        <h1 className="text-white pl-14 h-10 w-full border-2 rounded-xl xl:text-2xl font-semibold">
          Employee Productivity Dashboard
        </h1>
        {productivityData.map(({ day, percentage }, index) => (
          <ProgressItem key={index} day={day} percentage={percentage} />
        ))}
      </div>
      <Fotter />
    </div>
  );
};

export default HomePage;
