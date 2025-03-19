import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import axios from "axios";

// Sample Contestants Data
const contestants = [
  {
    id: 1,
    name: "MC Blaze",
    image: "/images/mc_blaze.jpg",
    bio: "A lyrical genius known for his fast flows.",
  },
  {
    id: 2,
    name: "Lil Storm",
    image: "/images/lil_storm.jpg",
    bio: "Brings thunderous bars and crazy energy.",
  },
  {
    id: 3,
    name: "Queen Lyric",
    image: "/images/queen_lyric.jpg",
    bio: "A queen on the mic with unmatched wordplay.",
  },
  {
    id: 4,
    name: "Queen Lyricsss",
    image: "/images/queen_lyric.jpg",
    bio: "A queen on the mic with unmatched wordplay.",
  },
];

function Contestants() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/contestants/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error)=> console.log(console.error(error)));
    }, []);
    

  return (
    <div>
          <Navbar />
        <div className="min-h-screen bg-blackm text-white p-6">
        <br/>
      <br/>
      <br/>
          <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6"> Contestants </h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contestants.map((contestant) => (
              <div key={contestant.id} className="bg-gray-900 p-5 rounded-lg shadow-lg text-center">
                <img src={contestant.image} alt={contestant.name} className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-500" />
                <h2 className="text-xl font-bold mt-2">{contestant.name}</h2>
                <p className="text-sm text-gray-400">{contestant.bio}</p>
                <Link 
                  to={`/contestant/${contestant.id}`} 
                  className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded"
                >
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
