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
        console.log("✅ Authenticated User:", res.data);
        setPassedUser(res.data.user || null);
      })
      .catch((err) => {
        console.error("❌ Auth Fetch Error:", err);
        setPassedUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ passedUser, setPassedUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
