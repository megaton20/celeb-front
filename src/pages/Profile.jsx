import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function User() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bio, setBio] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/profile/")
      .then((response) => {
        setUser(response.data);
        setBio(response.data.bio);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleUpdateBio = () => {
    axios
      .put("http://127.0.0.1:8000/api/user/update-bio/", { bio })
      .then((response) => {
        setUser(response.data);
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error updating bio:", error));
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
    <Navbar />
    <div className="max-w-2xl mx-auto mt-10 bg-gray-900 p-6 rounded-lg shadow-md text-white">
    <br/>
      <br/>
      <br/>
      <div className="flex items-center gap-4">
        <img
          src={user.avatar || "/images/avatar.png" || "/images/131.jpg"}
          alt="Profile Avatar"
          className="w-20 h-20 rounded-full border-2 border-yellow-400"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-yellow-300">{user.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Bio</h3>
          <button onClick={() => setIsModalOpen(true)} className="text-yellow-400 hover:text-yellow-300">
            <i className="fas fa-edit"></i> Edit
          </button>
        </div>
        <p className="mt-2 text-gray-300">{user.bio || "No bio available"}</p>
      </div>

      {/* Modal for Editing Bio */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold text-yellow-400">Edit Bio</h3>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 mt-3 bg-gray-700 text-white rounded-lg"
              rows="4"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateBio}
                className="px-4 py-2 bg-yellow-400 text-black font-bold rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
          <Footer />
    </div>
    </div>
  );
}

export default User;
