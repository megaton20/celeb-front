import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerMessage("");

    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setServerMessage(result.message);
        setMessageType("success");

        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } else {
        setMessageType("error");

        // If the server returns an array of errors, display them
        if (result.error && Array.isArray(result.error)) {
          setErrors(result.error.reduce((acc, err) => ({ ...acc, msg: err.msg }), {}));
        } else {
          setServerMessage(result.message || "Registration failed.");
        }
      }
    } catch (error) {
      setServerMessage("Error: " + error.message);
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Sign Up</h2>

        {/* Server messages */}
        {serverMessage && (
          <div className={`p-3 mb-4 text-sm rounded ${messageType === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {serverMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

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
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? "👁" : "🙈"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
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
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <a href="/auth/login" className="text-yellow-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;