/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import moptro from "../assets/moptro.png";
import Logo from "../assets/user.png";
import { ApiDetails } from "../Utils/Constants";
import { filterdata } from "../Utils/helper";
import Fotter from "./Fotter";
import { Link } from "react-router-dom";

const EmployessDetails = () => {
  const [data, setData] = useState(ApiDetails);
  const [firstname, setfistname] = useState("");
  return (
    <div className="h-screen w-screen bg-black overflow-y-auto">
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
      <div>
        <input
          value={firstname}
          onChange={(e) => {
            setfistname(e.target.value);
          }}
          placeholder="Search with Name"
          className="bg-[#5E5E5E82] xl:ml-[500px] xsm:ml-7 h-12 xl:w-[570px] xsm:w-72 border-2 rounded-lg pl-5 text-white xl:mt-0 xsm:mt-8"
        ></input>
        <button
          onClick={() => {
            const filtData = filterdata(firstname, ApiDetails);
            setData(filtData);
          }}
          className="h-12 xl:w-28 xsm:w-14 border-2 ml-2 rounded-xl bg-[#5E5E5E82]"
        >
          🔎
        </button>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div
              key={item.Empid}
              className="xl:h-64 xsm:h-44 xl:w-[400px] xsm:w-80 border-2 bg-[#5E5E5E82] xl:ml-[600px] xsm:ml-7 mt-4 rounded-xl"
            >
              <div className="text-white ml-10 xl:mt-8 xsm:mt-2">
                <h1>
                  Emp Id <span className="ml-4">: {item.Empid}</span>
                </h1>
                <h1 className="mt-4">
                  Name <span className="ml-6">: {item.Name}</span>
                </h1>
                <h1 className="mt-4">
                  D.O.B
                  <span className="ml-7">
                    :<span className="text-orange-600">{item.DOB}</span>
                  </span>
                </h1>
                <h1 className="mt-4">
                  Role
                  <span className="ml-9">
                    : <span className="text-green-600">{item.Role}</span>
                  </span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <Fotter />
    </div>
  );
};

export default EmployessDetails;
