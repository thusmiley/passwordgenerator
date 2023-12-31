"use client";
import Strength from "./Strength";
import { useState, useEffect } from "react";
import { uppercase, lowercase, numbers, symbols } from "@/utils/data";

const Generator = () => {
  const [lengthValue, setLengthValue] = useState("10");
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const [strengthValidation, setStrengthValidation] = useState("MEDIUM");
  const [barColor, setBarColor] = useState("yellow");
  const [optionSelected, setOptionSelected] = useState(3);
  const [boxDisabled, setBoxDisabled] = useState(false);

  useEffect(() => {
    let pool = uppercase.concat(lowercase, numbers);
    let arr = [];
    for (let i = 0; i < lengthValue; i++) {
      let random = Math.floor(Math.random() * pool.length);
      arr.push(pool[random]);
    }
    setPassword(arr.join(""));
  }, []);

  let pool = [];
  let strengthBar = 0;

  const generateNow = (e) => {
    e.preventDefault();
    setCopySuccess("");

    // create an array pool of selected checkboxes
    if (includeUppercase) {
      pool = pool.concat(uppercase);
    }

    if (includeLowercase) {
      pool = pool.concat(lowercase);
    }

    if (includeNumbers) {
      pool = pool.concat(numbers);
    }

    if (includeSymbols) {
      pool = pool.concat(symbols);
    }

    // create a random password from the array
    let arr = [];
    for (let i = 0; i < lengthValue; i++) {
      let random = Math.floor(Math.random() * pool.length);
      arr.push(pool[random]);
    }
    setPassword(arr.join(""));

    // password strength validation and styling
    if (lengthValue < 7) {
      strengthBar = 1;
      setStrengthValidation("TOO WEAK!");
      setBarColor("red");
    } else if (lengthValue < 9) {
      strengthBar = 2;
      setStrengthValidation("WEAK");
      setBarColor("orange");
    } else if (lengthValue < 12) {
      strengthBar = 3;
      setStrengthValidation("MEDIUM");
      setBarColor("yellow");
    } else {
      strengthBar = 4;
      setStrengthValidation("STRONG");
      setBarColor("green");
    }
  };

  // make sure there's always at least one checkbox checked
  useEffect(() => {
    console.log(optionSelected);
    if (optionSelected === 1) {
      setBoxDisabled(true);
    } else {
      setBoxDisabled(false);
    }
  }, [optionSelected]);

  return (
    <>
      <div className="bg-darkGrey mb-4 p-4 flex justify-between items-center md:py-5 md:px-8 md:mb-6">
        <span className="text-[24px] leading-[31px] text-almostWhite selection:bg-green selection:text-almostBlack truncate md:text-[32px] md:leading-[43px]">{password} </span>
        <div className="flex justify-end items-center">
          <p className="text-[16px] text-green mr-4 md:text-[18px]">{copySuccess}</p>
          <svg
            onClick={() => {
              setCopySuccess("COPIED");
              navigator.clipboard.writeText(password);
            }}
            width="21"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            className="copyIcon cursor-pointer"
          >
            <path
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
            />
          </svg>
        </div>
      </div>

      {/* generator */}
      <div className="bg-darkGrey p-4 md:py-6 md:px-8">
        <form onSubmit={generateNow}>
          <div className="form-control">
            <label className="flex justify-between items-center text-[16px] md:text-[18px]">
              Character Length <span className="text-[24px] leading-[31px] text-green md:text-[32px]">{lengthValue}</span>
            </label>
            <input
              type="range"
              id="length"
              min={1}
              max={50}
              value={lengthValue}
              className="mt-6 md:mt-8"
              onChange={(e) => setLengthValue(e.target.value)}
              style={{ background: `linear-gradient(to right, #A4FFAF ${lengthValue * 2}%, #18171F ${lengthValue * 2}%)` }}
            />
          </div>

          <label className="box mt-8">
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              onClick={() => (!includeUppercase ? setOptionSelected(optionSelected + 1) : setOptionSelected(optionSelected - 1))}
              disabled={boxDisabled && includeUppercase ? true : false}
            />
            Include Uppercase Letters
          </label>

          <label className="box my-4 md:my-5">
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              onClick={() => (!includeLowercase ? setOptionSelected(optionSelected + 1) : setOptionSelected(optionSelected - 1))}
              disabled={boxDisabled && includeLowercase ? true : false}
            />
            Include Lowercase Letters
          </label>

          <label className="box mb-4 md:mb-5">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              onClick={() => (!includeNumbers ? setOptionSelected(optionSelected + 1) : setOptionSelected(optionSelected - 1))}
              disabled={boxDisabled && includeNumbers ? true : false}
            />
            Include Numbers
          </label>

          <label className="box mb-8 md:mb-[30px]">
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={includeSymbols}
              onClick={() => (!includeSymbols ? setOptionSelected(optionSelected + 1) : setOptionSelected(optionSelected - 1))}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              disabled={boxDisabled && includeSymbols ? true : false}
            />
            Include Symbols
          </label>

          {/* strength */}
          <div className="bg-almostBlack p-4 flex justify-between items-center md:py-6 md:px-8">
            <p className="text-[16px] text-lightGrey md:text-[18px]">STRENGTH</p>
            <div className="flex items-center">
              <p className="text-[18px] text-almostWhite md:text-[24px]">{strengthValidation}</p>

              <div className="space-x-2 ml-4 flex items-center">
                <span
                  className={`${barColor === "red" ? "bg-red border-red" : ""} ${barColor === "orange" ? "bg-orange border-orange" : ""} ${
                    barColor === "yellow" ? "bg-yellow border-yellow" : ""
                  } ${barColor === "green" ? "bg-green border-green" : ""} strength-bar`}
                ></span>
                <span
                  className={`${barColor === "orange" ? "bg-orange border-orange" : ""} ${barColor === "yellow" ? "bg-yellow border-yellow" : ""} ${
                    barColor === "green" ? "bg-green border-green" : ""
                  }  strength-bar`}
                ></span>
                <span className={`${barColor === "yellow" ? "bg-yellow border-yellow" : ""} ${barColor === "green" ? "bg-green border-green" : ""}  strength-bar`}></span>
                <span className={`${barColor === "green" ? "bg-green border-green" : ""}  strength-bar`}></span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="group bg-green text-almostBlack text-[16px] inline-flex justify-center items-center py-[18px] w-full mt-4 duration-150 hover:bg-darkGrey hover:text-green border-[2px] border-green md:mt-8 md:text-[18px]"
          >
            GENERATE
            <svg width="12" height="12" className="ml-4 arrowIcon md:ml-6" alt="arrow right" xmlns="http://www.w3.org/2000/svg">
              <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Generator;
