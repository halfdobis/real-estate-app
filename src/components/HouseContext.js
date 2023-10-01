import React, { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  return (
    <HouseContext.Provider value={console.log("this is the context")}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
