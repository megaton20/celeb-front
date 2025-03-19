// import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaUsers,
  FaTrophy,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

function Sidebar({sidebarOpen, setSidebarOpen}) {

  return (
  <aside className={`fixed inset-y-0 left-0 transform transition-all duration-300 bg-gray-800 z-50 ${sidebarOpen ? "w-60 translate-x-0" : "w-20 -translate-x-full md:translate-x-0"} md:w-250 md:translate-x-0 p-6`}>
      <div className="flex items-center justify-between">
        <h2 className={`text-xl font-extrabold text-yellow-500 transition-opacity ${sidebarOpen ? "opacity-100" : "opacity-0 md:opacity-100" }`}>
          Admin
        </h2>
        {sidebarOpen && (
            <button className="sm:hidden text-white text-2xl" onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
          )}
      </div>


      <nav className="mt-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">

            <Link className="flex items-center space-x-3" to="/admin/dashboard"> <FaChartBar /> {" "} {sidebarOpen && <span>Dashboard</span>}</Link>
          </li>
          <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">
            <Link className="flex items-center space-x-3" to="/admin/contestants"> <FaUsers /> {" "} {sidebarOpen && <span>Contestants</span>}</Link>
          </li>
          <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">
            <Link className="flex items-center space-x-3" to="/admin/rankings"> <FaTrophy /> {" "} {sidebarOpen && <span>Votes & Rankings</span>}{" "} </Link>
          </li>
          <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">
            <Link className="flex items-center space-x-3" to="/admin/rankings"> <FaUser /> {" "} {sidebarOpen && <span>Add</span>}{" "} </Link>
          </li>
          <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">
            <Link className="flex items-center space-x-3" to="/admin/settings"> <FaCog /> {" "} {sidebarOpen && <span> Settings </span>} </Link>
          </li>
        </ul>
      </nav>

      <button className="flex items-center  text-red-500 hover:text-red-400 mt-8">
         <a className="flex items-center space-x-3" href="/logout"> <FaSignOutAlt /> {" "} {sidebarOpen && <span>Logout</span>} </a>
      </button>
    </aside>
  );
}


export default Sidebar