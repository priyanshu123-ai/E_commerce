import React, { createContext } from 'react';

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  const serveUrl = "http://localhost:4000";

  const value = {
    serveUrl,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
