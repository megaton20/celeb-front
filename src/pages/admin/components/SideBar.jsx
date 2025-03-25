// import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../components/AuthContext";
import {
  FaUser,
  FaUsers,
  FaTrophy,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaHome,
  // FaPlus
} from "react-icons/fa";

function Sidebar({sidebarOpen, setSidebarOpen}) {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  return (
  <aside className={`fixed inset-y-0 left-0 transform transition-all duration-300 bg-gray-800 z-50 ${sidebarOpen ? "w-60 translate-x-0" : "w-20 -translate-x-full md:translate-x-0"} md:w-250 md:translate-x-0 p-6`}>
      <div className="flex items-center justify-between">

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
            <Link className="flex items-center space-x-3" to="/admin/users"> <FaUser /> {" "} {sidebarOpen && <span>Users</span>}{" "} </Link>
          </li>

          {/* <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">
            <Link className="flex items-center space-x-3" to="/admin/rankings"> <FaTrophy /> {" "} {sidebarOpen && <span>Votes & Rankings</span>}{" "} </Link>
          </li> */}
        
          <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">
            <Link className="flex items-center space-x-3" to="/admin/settings"> <FaCog /> {" "} {sidebarOpen && <span> Settings </span>} </Link>
          </li>

          <li className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer">
            <Link className="flex items-center space-x-3" to="/"> <FaHome /> {" "} {sidebarOpen && <span>Home</span>}</Link>
            </li>
        </ul>
      </nav>

    

      <button className="flex items-center  text-red-500 hover:text-red-400 mt-8" onClick={logout}>  <FaSignOutAlt /> {" "} {sidebarOpen && <span>Logout</span>}       </button>
    </aside>
  );
}


export default Sidebar