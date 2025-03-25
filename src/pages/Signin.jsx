import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
// import axios from "axios";



function Login() {
  const { setPassedUser } = useContext(AuthContext); // Get from context
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {

      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", 
        withCredentials: true
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result.user)); // Store user details
        setPassedUser(result.user); // Update auth state
        navigate("/admin/dashboard"); // Redirect to dashboard
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Login</h2>

        {error && <div className="bg-red-600 p-3 rounded text-white mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded ${
              isSubmitting
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account? <a href="/auth/register" className="text-yellow-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;