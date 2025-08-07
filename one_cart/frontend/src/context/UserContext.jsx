// context/UserContext.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create the context
export const UserContext = createContext();

// Provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current user from the backend
  const getCurrentUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/use/current", {
        withCredentials: true,
      });
      console.log(res)

      if (res.data.success) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("getCurrentUser error:", error.response?.data || error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, setUser,getCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
