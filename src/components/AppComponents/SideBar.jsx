"use client";
import { SideBarContext } from "@/context/SideBarContext";
import { useContext } from "react";

const SideBar = () => {
  const { show, setShow } = useContext(SideBarContext);

  const closeNav = () => setShow(!show);
  return (
    <nav
      className={`w-full px-8 absolute z-[5] md:p-0 max-w-4xl ${
        show
          ? "transition-transform duration-500 ease-in-out transform translate-y-0"
          : "transition-transform duration-300 ease-in-out transform -translate-y-[15rem]"
      }`}
    >
      <div className="bg-ea rounded-b">
        <a
          className="text-1 text-center py-2 cursor-pointer hover:bg-9 block"
          href="#about"
          onClick={closeNav}
        >
          Sobre mi
        </a>
        <a
          className="text-1 text-center py-2 cursor-pointer hover:bg-9 block"
          href="#projects"
          onClick={closeNav}
        >
          Proyectos
        </a>
        <a
          className="text-1 text-center py-2 cursor-pointer hover:bg-9 block"
          href="#contact"
          onClick={closeNav}
        >
          Contacto
        </a>
        <a
          className="text-1 text-center py-2 cursor-pointer hover:bg-9 block"
          href="/feedback"
          onClick={closeNav}
        >
          Encuesta
        </a>
      </div>
    </nav>
  );
};

export default SideBar;
