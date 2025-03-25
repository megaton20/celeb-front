import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [passedUser, setPassedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth", { withCredentials: true })
      .then((res) => {
        setPassedUser(res.data.authenticated || false);
      })
      .catch((err) => {
        console.error("❌ Auth Fetch Error:", err);
        setPassedUser(false);
      })
      .finally(() => setLoading(false));
  }, []);

  // ✅ Fix: Move logout inside AuthProvider
  const logout = async () => {
    try {
      await axios.post("http://localhost:4000/auth/logout", {}, { withCredentials: true });
      setPassedUser(false); // Update state after logout
    } catch (error) {
      console.error("❌ Logout Failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ passedUser, setPassedUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}