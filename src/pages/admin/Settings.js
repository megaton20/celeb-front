import { useState } from "react";
import { FaUser, FaLock, FaSlidersH, FaSave, FaBars } from "react-icons/fa";
import Sidebar from "./components/SideBar"

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [username, setUsername] = useState("MC Blaze");
  const [email, setEmail] = useState("mcblaze@example.com");
  const [darkMode, setDarkMode] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"} w-full`}>
        {/* Hamburger Button for Mobile */}
        <button className="text-white text-2xl mb-4 md:hidden" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
        <button className="hidden md:block text-white text-2xl mb-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </button>

      <h1 className="text-3xl font-bold text-yellow-500">Settings</h1>
      <p className="text-gray-400 mb-6">Manage your account and preferences</p>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-700 mb-6">
        <button
          className={`pb-2 flex items-center space-x-2 ${
            activeTab === "profile" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <FaUser /> <span>Profile</span>
        </button>
        <button
          className={`pb-2 flex items-center space-x-2 ${
            activeTab === "security" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("security")}
        >
          <FaLock /> <span>Security</span>
        </button>
        <button
          className={`pb-2 flex items-center space-x-2 ${
            activeTab === "preferences" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("preferences")}
        >
          <FaSlidersH /> <span>Preferences</span>
        </button>
      </div>

      {/* Profile Settings */}
      {activeTab === "profile" && (
        <div className="space-y-4">
          <div>
            <label className="text-gray-400 block">Username</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-400 block">Email</label>
            <input
              type="email"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600">
            <FaSave /> <span>Save Changes</span>
          </button>
        </div>
      )}

      {/* Security Settings */}
      {activeTab === "security" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Enable Two-Factor Authentication</span>
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 transition ${
                twoFactor ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform ${twoFactor ? "translate-x-6" : ""}`}></div>
            </button>
          </div>
        </div>
      )}

      {/* Preferences Settings */}
      {activeTab === "preferences" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 transition ${
                darkMode ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform ${darkMode ? "translate-x-6" : ""}`}></div>
            </button>
          </div>

          <div>
            <label className="text-gray-400 block">Notification Preferences</label>
            <select className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white">
              <option>All Notifications</option>
              <option>Only Important Updates</option>
              <option>Do Not Disturb</option>
            </select>
          </div>
        </div>
      )}

      </main>

     
    </div>
   
  );
}

export default Settings;