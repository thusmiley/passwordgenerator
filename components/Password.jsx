import Image from "next/image";
import copyIcon from "../assets/images/icon-copy.svg";

const Password = () => {
  return (
    <div className="bg-darkGrey mb-4 p-4 flex justify-between items-center md:py-5 md:px-8 md:mb-6">
      <span className="text-[24px] leading-[31px] text-almostWhite md:text-[32px] md:leading-[43px]">PTx1f5DaFX </span>
      <div className="flex justify-end items-center">
        <p className="text-[16px] text-green mr-4 md:text-[18px]">COPIED</p>
        <Image src={copyIcon} className="w-[17.5px] h-5" alt="copy"/>
      </div>
    </div>
  );
};

export default Password;
