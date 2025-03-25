import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Sidebar from "./components/SideBar";
import Button from "../../components/Button";


function AdminPanel() {
  const [data, setData] = useState(null);
  const navigate = useNavigate()

      useEffect(() => {
        axios
          .get("http://localhost:4000/admin/users")
          .then((response) => {
            setData(response.data);
          })
          .catch(()=> navigate("/auth/login"));
        }, [navigate]);
        
      
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loadingRows, setLoadingRows] = useState({}); // Track loading per row

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

        <h1 className="text-3xl font-bold text-yellow-500">Voters List</h1>
      <p className="text-gray-400 mb-6">Manage your Voters </p>

           {/* all Users Table */}
           <div className="mt-10 overflow-x-auto">
          <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-yellow-400">
              <tr>
                <th className="py-3 px-6 text-left">Sn</th>
                <th className="py-3 px-6 text-left">Full Name</th>
                <th className="py-3 px-6 text-left">email</th>
                <th className="py-3 px-6 text-left">Referral code</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((users, index) => (
                <tr key={users.id} className="border-b border-gray-700">
                  <td className="py-4 px-6">{index + 1} </td>
                  <td className="py-4 px-6">{users.fname} </td>
                  <td className="py-4 px-6">{users.email}</td>
                  <td className="py-4 px-6">{users.r_code}</td>
                  <td className="py-4 px-6">
                    <Button onClick={() => handleClick(users.id)} loading={loadingRows[users.id]} type={"bg-red-500 w-full"}>
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