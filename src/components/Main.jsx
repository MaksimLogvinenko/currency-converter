import React from "react";

import phoneImg from "../assets/img/phone.png";

const Main = () => {
  return (
    <div className="relative h-full">
      <img className="hidden lg:flex absolute top-0 right-1" src={phoneImg} alt="Phone" />
      <div className="container">
        <div className="absolute lg:w-1/3 lg:top-1/3">
          <h1 className="font-bold text-5xl mb-5">Currency converter</h1>
          <h2 className="font-medium text-2xl">
            Курс валют в банках Украины, онлайн конвертер валют, калькулятор
            валют.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
