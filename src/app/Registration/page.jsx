"use client";

import React, { useState } from "react";

const Registration = () => {
  const fullnameC = (event) => {
    setFullname(event.target.value);
    console.log(event.target.value);
  };

  const mobileC = (event) => {
    setMobile(event.target.value);
  };

  const passwordC = (event) => {
    setPassword(event.target.value);
  };

  const [fullName, setFullname] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [res, setRes] = useState();

  const newUserReg = async () => {
    const newUserData = {
      fullName,
      password,
      mobile,
    };
    try {
      const reg = await fetch("http://localhost:4000/new_user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });
      const result = await response.json();
      console.log("server response:", result);
      setRes(result);
    } catch (error) {
      console.log("error submitting", error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-amber-200">CREADIT APP</h1>
      <form
        action=""
        className="border-2 flex flex-col items-center   justify-center"
      >
        <div className="w-[300px] flex flex-row justify-between m-2">
          <label htmlFor="">Full Name:</label>
          <input
            type="text"
            className="border-1"
            name="name"
            onChange={fullnameC}
          />
        </div>
        <div className="w-[300px] flex flex-row justify-between m-2">
          <label htmlFor="">Mobile:</label>
          <input
            type="text"
            className="border-1"
            name="name"
            onChange={mobileC}
          />
        </div>
        <div className="w-[300px] flex flex-row justify-between m-2">
          <label htmlFor="">PassWord:</label>
          <input
            type="text"
            name="name"
            className="border-1"
            onChange={passwordC}
          />
        </div>
        <div className="w-[300px] flex flex-row justify-between m-2">
          <label htmlFor="">Confirm PassWord:</label>
          <input type="text" name="name" className="border-1" />
        </div>
        <button
          type="button"
          className="border-sky-500 border-2"
          onClick={newUserReg}
        >
          Create New User
        </button>
      </form>
      <p>final result: {res}</p>
    </div>
  );
};

export default Registration;
