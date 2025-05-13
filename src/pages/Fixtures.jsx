import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

function Fixtures() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/fixtures/")
      .then(response => {
        setFixtures(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching fixtures:", error);
        setLoading(false);
      });
  }, []);

  // Show loader while data is being fetched
  if (loading) {
    return <Loader />;  
  }

  if (fixtures.length === 0) {
    return <div className="text-center text-white mt-10">No match fixtures available.</div>;
  }

  return (
      <div>

        <Navbar/>
        <div className="container mx-auto p-8">

          <br/>
          <br/>
          <br/>
          <br/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
            {fixtures.map(match => (
              <div key={match.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">

                <div className="flex items-center justify-between">
                  {/* Contender 1 */}
                  <div className="flex flex-col items-center">
                    <img 
                    src={`http://localhost:4000/uploads/${match.contender1_photo}`} 
                        alt={match.contender1_name} 
                        className="w-20 h-20 rounded-full border-2 border-yellow-500 mb-2"/>
                    <p className="text-lg font-bold">{match.contender1_name}</p>
                    <p className="text-sm text-gray-400">{match.contender1_stage}</p>
                  </div>

                  <span className="text-2xl text-yellow-400 font-bold">VS</span>

                  {/* Contender 2 */}
                  <div className="flex flex-col items-center">
                    <img src={`http://localhost:4000/uploads/${match.contender2_photo}`} 
                        alt={match.contender2_name} 
                        className="w-20 h-20 rounded-full border-2 border-yellow-500 mb-2"/>
                    <p className="text-lg font-bold">{match.contender2_name}</p>
                    <p className="text-sm text-gray-400">{match.contender2_stage}</p>
                  </div>
                </div>

                {/* Match Date */}
                <p className="text-center text-gray-300 mt-4">
                  <strong>Match Date:</strong> {new Date(match.match_date).toLocaleDateString()}
                </p>

                <Link  to={`/fixtures/${match.id}`} className="mt-4 block px-4 py-2 bg-yellow-500 text-black text-center rounded w-100">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Footer/>
      </div>
  );
}

export default Fixtures;
