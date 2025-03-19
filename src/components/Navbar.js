import { Link } from "react-router-dom";
import { useState } from "react";
import  "../styles/style.css"
// import ThemeToggle from "../components/ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-gray-800 dark:text-white fixed top-0 left-0 w-full  p-4 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold"><Link to={"/"}>Celeb</Link></h1>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"} {/* Change icon when open */}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/contestants" className="hover:text-blue-200">Contestants</Link>
          <Link to="/fixtures" className="hover:text-blue-200">Fixtures</Link>
          <Link to="/rankings" className="hover:text-blue-200">Rank</Link>
          <Link to="/profile" className="hover:text-blue-200">Profile</Link>
          {/* <Link to="/register" className="hover:text-blue-200">Create User</Link> */}
          <Link to="/login" className="hover:text-blue-200">sign in</Link>
          <Link to="/admin/dashboard" className="hover:text-blue-200">dashboard</Link>
          {/* <ThemeToggle /> */}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2 bg-blue-700 p-4">
          <Link to="/" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/users" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>Users</Link>
          <Link to="/register" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>Create User</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;