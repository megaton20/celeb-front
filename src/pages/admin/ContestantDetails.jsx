import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ContestantDetails() {
  const { id } = useParams();
  const [contestant, setContestant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContestant = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/contestants/${id}`);
        if (response.data.success) {
          setContestant(response.data.contestant);
        } else {
          setError("Contestant not found.");
        }
      } catch (error) {
        setError("Error fetching contestant details.");
      } finally {
        setLoading(false);
      }
    };

    fetchContestant();
  }, [id]);

  if (loading) return <div className="text-center text-white text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center p-6">
      <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">{contestant.stageName}</h1>
        <img src={contestant.photo} alt={contestant.stageName} className="w-full h-64 object-cover rounded-lg mb-4" />

        <div className="space-y-3">
          <p><span className="font-semibold text-gray-300">Full Name:</span> {contestant.fullName}</p>
          <p><span className="font-semibold text-gray-300">Email:</span> {contestant.email}</p>
          <p><span className="font-semibold text-gray-300">Phone:</span> {contestant.phone}</p>
          <p><span className="font-semibold text-gray-300">Category:</span> {contestant.category}</p>
          <p><span className="font-semibold text-gray-300">Votes:</span> {contestant.votes}</p>
          <p><span className="font-semibold text-gray-300">Bio:</span> {contestant.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default ContestantDetails;
