import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const battles = [
  {
    id: 1,
    date: "March 20, 2025",
    time: "8:00 PM",
    rapper1: { name: "MC Blaze", ranking: "#1", image: "/images/mc_blaze.jpg" },
    rapper2: { name: "Lil Storm", ranking: "#3", image: "/images/lil_storm.jpg" },
  },
  {
    id: 2,
    date: "March 22, 2025",
    time: "9:00 PM",
    rapper1: { name: "Drip King", ranking: "#4", image: "/images/drip_king.jpg" },
    rapper2: { name: "Queen Lyric", ranking: "#2", image: "/images/queen_lyric.jpg" },
  },
  {
    id: 3,
    date: "March 24, 2025",
    time: "7:30 PM",
    rapper1: { name: "Ice Shadow", ranking: "#5", image: "/images/ice_shadow.jpg" },
    rapper2: { name: "Young Spit", ranking: "#6", image: "/images/young_spit.jpg" },
  },
];

function Tournament() {
  return (

    <div>
    <Navbar />

    <div className="min-h-screen  p-4 md:p-6 text-gray-800 dark:text-white">
      <br/>
      <br/>
      <br/>
      <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 text-center mb-4 md:mb-6">
        Rap Battle Tournament
      </h1>

      <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
        {battles.map((battle) => (
          <div
            key={battle.id}
            className=" p-3 md:p-5 rounded-lg shadow-lg flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left"
          >
            {/* Rapper 1 */}
            <div className="flex flex-col items-center sm:w-1/4">
              <img src={battle.rapper1.image} alt={battle.rapper1.image} className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-yellow-500"/>
              <h2 className="text-lg md:text-xl font-bold mt-2">{battle.rapper1.name}</h2>
              <p className="text-xs md:text-sm ">{battle.rapper1.ranking}</p>
            </div>

            {/* VS in the middle */}
            <div className="text-2xl md:text-4xl font-extrabold text-red-500 my-3 sm:my-0">
              VS
            </div>

            {/* Rapper 2 */}
            <div className="flex flex-col items-center sm:w-1/3">
              <img
                src={battle.rapper2.image}
                alt={battle.rapper1.image}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-yellow-500"
              />
              <h2 className="text-lg md:text-xl font-bold mt-2">{battle.rapper2.name}</h2>
              <p className="text-xs md:text-sm ">{battle.rapper2.ranking}</p>
            </div>

            {/* Date, Time & Venue */}
            <div className="mt-3 sm:mt-0 sm:w-1/3 text-center sm:text-right">
              <p className="text-sm md:text-lg">{battle.date}</p>
              <p className="text-sm md:text-lg">{battle.time}</p>
              <p className="text-sm md:text-lg">Madison Square Garden</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </div>
  );
}

export default Tournament;
