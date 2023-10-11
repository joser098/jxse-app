"use client";
import { SideBarContext } from "@/context/SideBarContext";
import { useContext } from "react";

const LandingHeader = () => {
  const { show, setShow } = useContext(SideBarContext);
  return (
    <header className="flex justify-between py-3 px-8 md:px-0 items-center w-full top-0 bg-transparent">
      <img className="w-24" src="/whiteLogo.png" alt="logo" />

      <div className="cursor-pointer" onClick={() => setShow(!show)}>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </header>
  );
};

export default LandingHeader;
