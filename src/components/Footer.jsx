import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-yellow-500"> About Us</h2>
            <p className="text-gray-400 mt-2">
              The Ultimate Rap Battle is where poetry meets passion. Join the biggest platform for underground lyricists to battle, rise, and be crowned the rap king.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-yellow-500"> Navigation</h2>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link to="/contestants" className="hover:text-yellow-400">Contestants</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

             {/* Quick Links */}
             <div>
            <h2 className="text-xl font-bold text-yellow-500"> Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><Link to="/fixtures" className="hover:text-yellow-400">Tournament</Link></li>
              <li><Link to="/contest/register" className="hover:text-yellow-400">Register</Link></li>
              <li><Link to="/rankings" className="hover:text-yellow-400">Rankings</Link></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h2 className="text-xl font-bold text-yellow-500">Contact & Socials</h2>
            <p className="text-gray-400 mt-2">Email: support@rapbattle.com</p>
            <p className="text-gray-400">Phone: +1 (555) 987-6543</p>
            <div className="flex gap-4 mt-4">
              <a href="https//facebook.com" className="text-yellow-500 hover:text-yellow-400 text-2xl"><FaFacebook /></a>
              <a href="https//facebook.com" className="text-yellow-500 hover:text-yellow-400 text-2xl"><FaTwitter /></a>
              <a href="https//facebook.com" className="text-yellow-500 hover:text-yellow-400 text-2xl"><FaInstagram /></a>
              <a href="https//facebook.com" className="text-yellow-500 hover:text-yellow-400 text-2xl"><FaYoutube /></a>
            </div>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <h2 className="text-xl font-bold text-yellow-500">  Stay Updated</h2>
          <p className="text-gray-400 mt-2">Subscribe to get the latest battle news, updates, and exclusive content.</p>
          <form className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l bg-gray-800 text-white outline-none"
            />
            <button className="bg-yellow-500 px-6 py-2 rounded-r text-black font-bold hover:bg-yellow-400">
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} The Ultimate Rap Battle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
