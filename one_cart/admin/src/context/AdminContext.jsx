import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

export const adminDataContext = createContext();

export default function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);
 

  const getAdmin = async () => {
    try {
      const result = await axios.get("http://localhost:4000/api/user/current/admin", {
        withCredentials: true,
      });
      setAdminData(result.data);
      console.log("Admin data:", result.data);
    } catch (error) {
      console.log("Admin fetch failed:", error.response?.data || error.message);
      setAdminData(null);
    }
  };

  useEffect(() => {
    
      getAdmin();
    
  }, []);

  const value = {
    adminData,
    setAdminData,
    getAdmin,
  };

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
}
