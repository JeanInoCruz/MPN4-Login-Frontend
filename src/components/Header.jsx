import { useContext, useState } from "react";
import { Options } from "./Options";
import arrowDown from "../assets/arrowDown.svg";
import { AuthContext } from "../contexts/AuthContext";
import logo from "../assets/devchallenges.svg";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { profile } = useContext(AuthContext);

  const rawData = profile.data;

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <header className=" items-center font-bold flex justify-between">
      <div className="flex items-center content-center gap-3 text-[14px] text-[#F0402C]">
        <img src={logo} alt="logo" className="mb-4 mt-5 sm:mt-0" />
      </div>
      <div className="flex items-center content-center gap-4 text-[12px]">
        <img
          src={`http://localhost:5000/${rawData.photo}`}
          className="w-8 h-8 rounded-lg"
          alt="profile picture"
        />

        <h2>{rawData.name}</h2>
        <div className={`relative`}>
          <button
            onClick={handleIsActive}
            className="h-[24px] w-[24px] flex justify-center items-center content-center"
          >
            <img src={arrowDown} alt="Arrow" className="hover:cursor-pointer" />{" "}
          </button>
          <Options isActive={isActive} />
        </div>
      </div>
    </header>
  );
};
