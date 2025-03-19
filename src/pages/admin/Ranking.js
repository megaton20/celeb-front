import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./components/SideBar"

function Ranking() {
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

      <h1 className="text-3xl font-bold text-yellow-500">Votes And Ranking</h1>
      <p className="text-gray-400 mb-6">Manage your account and preferences</p>
 {/* Contestants Table */}
      <div className="mt-10 overflow-x-auto">

          <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-yellow-400">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Stage Name</th>
                <th className="py-3 px-6 text-left">Votes</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
       
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Sarah Smith</td>
                <td className="py-4 px-6">Lil Storm</td>
                <td className="py-4 px-6">6,750</td>
                <td className="py-4 px-6">
                  <button className="bg-red-500 text-black px-4 py-2 rounded">Evict</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

     
    </div>
   
  );
}

export default Ranking;