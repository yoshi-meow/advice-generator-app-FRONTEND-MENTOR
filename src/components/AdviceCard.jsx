import React, { useState, useEffect } from "react";
import Divider from "../assets/images/pattern-divider-desktop.svg";
import Dice from "../assets/images/icon-dice.svg";

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  };

  const getRandomAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-custom">
      <div>
        <div className="block card-advice bg-DarkGrayishBlue p-8 rounded-lg shadow-md w-[34rem]">
          <span className="block text-sm font-semibold my-4 text-NeonGreen text-center tracking-[0.4em]">
            ADVICE #{adviceId}
          </span>
          <h1 className="font-custom text-LightCyan text-[28px] my-6 font-bold text-center tracking-wide">
            "{advice}"
          </h1>
          <div className="flex items-center justify-center my-8">
            <img src={Divider} alt="divider" />
          </div>
          <div className="flex items-center justify-center h-0">
            <button
              className="btn bg-NeonGreen p-5 rounded-full  translate-y-8"
              onClick={getRandomAdvice}
            >
              <img src={Dice} alt="dice" />
            </button>
          </div>
        </div>
        <div className="block my-16 text-LightCyan text-center">
          Challenge by{" "}
          <a
            className="underline font-semibold"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="underline font-semibold"
            href="https://www.frontendmentor.io/profile/ncece11"
            target="_blank"
          >
            Yoshimeow
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;
