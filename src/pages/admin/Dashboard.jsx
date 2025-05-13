import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars, FaUsers, FaTrophy, FaChartBar } from "react-icons/fa";

import Sidebar from "./components/SideBar";
import Button from "../../components/Button";


function AdminPanel() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
      
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loadingRows, setLoadingRows] = useState({}); 

  const navigate = useNavigate()

      useEffect(() => {
        axios
          .get("http://localhost:4000/admin/")
          .then((response) => {
            setData(response.data);

          })
          .catch(()=> navigate("/auth/login"));
        }, [navigate]);
        
        const generateMatches = async () => {
          setLoading(true);
          setMessage("");
      
          try {
            const response = await axios.post("http://localhost:4000/admin/generate-matches");
            setMessage(response.data.message);
          } catch (error) {
            setMessage("Error generating matches.");
          } finally {
            setLoading(false);
          }
        };

  const handleClick = async (name) => {
    setLoadingRows((prev) => ({ ...prev, [name]: true })); // Set loading for clicked row

    // Simulate API request (replace with real API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoadingRows((prev) => ({ ...prev, [name]: false })); // Reset loading for that row
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"} w-full`}>
        {/* Sidebar Toggle */}
        <button className="text-white text-2xl mb-4 md:hidden" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
        <button className="hidden md:block text-white text-2xl mb-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </button>

        <h1 className="text-3xl font-bold text-yellow-500">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaUsers className="text-yellow-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Total Contestants</h2>
              <p className="text-gray-400 text-lg">{data.allContendersResult.length}</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaUsers className="text-yellow-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Total Voters</h2>
              <p className="text-gray-400 text-lg">{data.users.length}</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaTrophy className="text-yellow-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Total Votes</h2>
              <p className="text-gray-400 text-lg">{data.formatedallVotesAmount} </p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaChartBar className="text-yellow-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Revenue</h2>
              <p className="text-gray-400 text-lg">{data.formatedsuccesfulTransactionAmount}</p>
            </div>
          </div>
        </div>

        <button
        onClick={generateMatches}
        disabled={loading}
        className="px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        {loading ? "Generating Matches..." : "Generate Match Fixtures"}
      </button>

      {message && <p className="mt-4 text-yellow-400">{message}</p>}

           {/* all Contender Table */}
           <div className="mt-10 overflow-x-auto">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 mt-4">Contestants</h2>
          <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-yellow-400">
              <tr>
                <th className="py-3 px-6 text-left">Sn</th>
                <th className="py-3 px-6 text-left">Stage Name</th>
                <th className="py-3 px-6 text-left">Votes</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.allContendersResult.map((contestant, index) => (
                <tr key={contestant.id} className="border-b border-gray-700">
                  <td className="py-4 px-6">{index +1}</td>
                  <td className="py-4 px-6">{contestant.stage_name}</td>
                  <td className="py-4 px-6">{contestant.vote_count}</td>
                  <td className="py-4 px-6">
                    <Button onClick={() => handleClick(contestant.id)} loading={loadingRows[contestant.id]} type={"bg-red-500 w-full"}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminPanel;


