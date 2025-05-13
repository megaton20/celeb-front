import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; 
import { useState, useEffect } from "react";
import axios from "axios";



function Contestants() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/contestants/")
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
        .catch(error => {
        console.error("Error fetching contestants:", error);
        setLoading(false);
      });
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
        <br/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((contestant) => (
              <div key={contestant.id} className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
                <img src={`http://localhost:4000/uploads/${contestant.photo_url}`} alt={contestant.name} className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-500" />
                <h2 className="text-xl font-bold mt-2">{contestant.name}</h2>
                <p className="text-sm text-gray-400">{contestant.vote_count}</p>
                <p className="text-sm text-gray-400">{contestant.bio}</p>
                <Link  to={`/contestant/${contestant.id}`} className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
    <Footer />
      </div>
  );
}

export default Contestants;
