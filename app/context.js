"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("Matthew");
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        isLoggedIn,
        SetIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider };
