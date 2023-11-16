"use client";
import Image from "next/image";
import arrowIcon from "../assets/images/icon-arrow-right.svg";
import Strength from "./Strength";
import { useState, useEffect } from "react";

const Generator = () => {
  const handleSubmit = () => {};
  const [sliderValue, setSliderValue] = useState("12");
  //   const [checked, setChecked] = useState();
  //   const handleChange = (e) => {
  //     e.target.checked ? setChecked(false) : '';
  //   };
  return (
    <div className="bg-darkGrey p-4 md:py-6 md:px-8">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="flex justify-between items-center text-[16px] md:text-[18px]">
            Character Length <span className="text-[24px] leading-[31px] text-green md:text-[32px]">{sliderValue}</span>
          </label>
          <input
            type="range"
            id="slider"
            min={1}
            max={50}
            value={sliderValue}
            className="mt-6 md:mt-8"
            onChange={(e) => setSliderValue(e.target.value)}
            style={{ background: `linear-gradient(to right, #A4FFAF ${sliderValue * 2}%, #18171F ${sliderValue * 2}%)` }}
          />
        </div>

        <label className="box mt-8">
          <input type="checkbox" name="uppercase" />
          Include Uppercase Letters
        </label>

        <label className="box my-4 md:my-5">
          <input type="checkbox" name="lowercase" />
          Include Lowercase Letters
        </label>

        <label className="box mb-4 md:mb-5">
          <input type="checkbox" name="numbers" />
          Include Numbers
        </label>

        <label className="box mb-8 md:mb-[30px]">
          <input type="checkbox" name="symbols" />
          Include Symbols
        </label>

        <Strength />

        <button type="submit" className="bg-green text-almostBlack text-[16px] inline-flex justify-center items-center py-[18px] w-full mt-4 md:mt-8 md:text-[18px]">
          GENERATE <Image src={arrowIcon} width={11} height={12} className="w-[11.11px] h-3 ml-4 md:ml-6" alt="arrow right" />
        </button>
      </form>
    </div>
  );
};

export default Generator;
