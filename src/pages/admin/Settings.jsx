import { useState, useEffect } from "react";
import { FaUser, FaLock, FaSlidersH, FaSave, FaBars, FaTools } from "react-icons/fa";
import axios from "axios";
import Sidebar from "./components/SideBar";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [votingOpen, setVotingOpen] = useState(false);

  // Fetch initial settings from database
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/admin/get-settings");
        if (response.data.success) {
          setRegistrationOpen(response.data.registrationOpen);
          setVotingOpen(response.data.votingOpen);
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  // Function to toggle Start Registration
  const toggleRegistration = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/admin/start-registration", {
        status: !registrationOpen,
      });
      if (response.data.success) {
        setRegistrationOpen(!registrationOpen);
      }
    } catch (error) {
      console.error("Error toggling registration:", error);
    }
  };

  // Function to toggle Open Voting
  const toggleVoting = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/admin/open-voting", {
        status: !votingOpen,
      });
      if (response.data.success) {
        setVotingOpen(!votingOpen);
      }
    } catch (error) {
      console.error("Error toggling voting:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"} w-full`}>
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
          <button className={`pb-2 flex items-center space-x-2 ${activeTab === "profile" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"}`} onClick={() => setActiveTab("profile")}>
            <FaUser /> <span>Profile</span>
          </button>
          <button className={`pb-2 flex items-center space-x-2 ${activeTab === "security" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"}`} onClick={() => setActiveTab("security")}>
            <FaLock /> <span>Security</span>
          </button>
          <button className={`pb-2 flex items-center space-x-2 ${activeTab === "preferences" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"}`} onClick={() => setActiveTab("preferences")}>
            <FaSlidersH /> <span>Preferences</span>
          </button>
          <button className={`pb-2 flex items-center space-x-2 ${activeTab === "admin" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"}`} onClick={() => setActiveTab("admin")}>
            <FaTools /> <span>Admin Controls</span>
          </button>
        </div>

        {/* Admin Controls */}
        {activeTab === "admin" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400">Admin Controls</h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Start Registration</span>
              <button
                onClick={toggleRegistration}
                className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 transition ${registrationOpen ? "bg-green-500" : "bg-gray-700"}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform ${registrationOpen ? "translate-x-6" : ""}`}></div>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Open Voting</span>
              <button
                onClick={toggleVoting}
                className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 transition ${votingOpen ? "bg-green-500" : "bg-gray-700"}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform ${votingOpen ? "translate-x-6" : ""}`}></div>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Settings;
