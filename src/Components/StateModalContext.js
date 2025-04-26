import React, { createContext, useState } from 'react';

export const StateModalContext = createContext();

export const MapProvider = ({ children }) => {
  const [stateModal, setStateModal] = useState(false);

  return (
    <StateModalContext.Provider value={{ stateModal, setStateModal }}>
      {children}
    </StateModalContext.Provider>
  );
};