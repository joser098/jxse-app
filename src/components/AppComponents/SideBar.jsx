"use client";
import { SideBarContext } from "@/context/SideBarContext";
import { useContext } from "react";

const SideBar = () => {
  const { show } = useContext(SideBarContext);

  return (
    <nav
      className={`w-full px-8 absolute z-10 md:p-0 max-w-4xl ${
        show ? "block" : "hidden"
      }`}
    >
      <ul className="bg-ea rounded-b">
        <li className="text-1 text-center py-2">Sobre mi</li>
        <li className="text-1 text-center py-2">Proyectos</li>
        <li className="text-1 text-center py-2">Contacto</li>
      </ul>
    </nav>
  );
};

export default SideBar;
