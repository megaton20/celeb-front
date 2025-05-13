import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; 
function Rank() {
  const [contestants, setContestants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
     .get("http://localhost:4000/contestants/")
      .then((response) => {
        const sortedContestants = response.data.data.sort((a, b) => b.vote_count - a.vote_count);
        setContestants(sortedContestants);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching contestants:", error));
  }, []);

         // Show loader while data is being fetched
         if (loading) {
          return <Loader />;  
        }

  return (
    <div>
    <Navbar />
      <div className="container mx-auto p-8">
      <br/>
      <br/>
      <br/>
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">Contestant Rankings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 text-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-yellow-400">
                <th className="p-3">Rank</th>
                <th className="p-3">Stage Name</th>
                <th className="p-3">Votes</th>
              </tr>
            </thead>
            <tbody>
              {contestants.map((contestant, index) => (
                <tr key={contestant.id} className="text-center border-b border-gray-700 hover:bg-gray-800">
                  <td className="p-3 font-bold">{index + 1}</td>
                  <td className="p-3">{contestant.stage_name}</td>
                  <td className="p-3 font-bold text-yellow-400">{contestant.vote_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    <Footer />
    </div>
  );
}

export default Rank;
