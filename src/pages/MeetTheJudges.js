import judge1 from "../images/judges/judge1.jpg";
import judge2 from "../images/judges/judge2.jpg";
import judge3 from "../images/judges/judge3.jpg";
// import { FaMicrophoneAlt, FaMusic, FaStar } from "react-icons/fa";

const judges = [
  {
    name: "Mr. Adaiku Paul",
    image: judge1,
    title: "Hip-Hop Pioneer",
    bio: "A legendary DJ and producer known for discovering raw rap talent.",
  },
  {
    name: "Mr. Cosmas Ameh",
    image: judge2,
    title: "Freestyle King",
    bio: "Five-time rap battle champion and lyrical genius.",
  },
  {
    name: "Julie Storm",
    image: judge2,
    title: "Freestyle King",
    bio: "Five-time rap battle champion and lyrical genius.",
  },
  {
    name: "Judith Zendyl",
    image: judge3,
    title: "Award-Winning Lyricist",
    bio: "Songwriter and rapper who brings deep insights into lyricism and flow.",
  },
];

function MeetTheJudges() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-8"> Meet The Judges</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
              <img
                src={judge.image}
                alt={judge.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-yellow-500"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mt-4">{judge.name}</h3>
              <p className="text-gray-400">{judge.title}</p>
              <p className="mt-3 text-sm">{judge.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheJudges;
