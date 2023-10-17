"use client";
import { SideBarContext } from "@/context/SideBarContext";
import { useContext } from "react";

const LandingHeader = () => {
  const { show, setShow } = useContext(SideBarContext);
  return (
    <header className="flex justify-between py-3 px-8 md:px-0 items-center w-full top-0 bg-transparent">
      <a href="/">
        <img className="w-24" src="/whiteLogo.png" alt="logo" />
      </a>

      <div
        className="cursor-pointer transition-all ease-out"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <svg
            width="50px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fafafa"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#fafafa"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fafafa"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#fafafa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
