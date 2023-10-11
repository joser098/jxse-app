'use client'
const { createContext, useState } = require("react");

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <SideBarContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
