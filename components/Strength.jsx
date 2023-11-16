import {useState} from "react";

const Strength = () => {
  const [isStrong, setIsStrong] = useState();

  return (
    <div className="bg-almostBlack p-4 flex justify-between items-center md:py-6 md:px-8">
      <p className="text-[16px] text-lightGrey md:text-[18px]">STRENGTH</p>
      <div className="flex items-center">
        <p className="text-[18px] text-almostWhite md:text-[24px]">MEDIUM</p>
              <div className="space-x-2 ml-4 flex items-center">
          <span className={`${isStrong ? 'bg-yellow' : ''} strength-bar`}></span>
          <span className="strength-bar"></span>
          <span className="strength-bar"></span>
          <span className="strength-bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Strength;
