import { FaCheckCircle, FaClock, FaBan, FaTrophy, FaMusic, FaUserShield, FaUsers, FaVoteYea, FaCalendarAlt, FaGlassCheers, FaMicrophoneAlt, FaMoneyBillWave  } from "react-icons/fa";

const rules = [
  {
    icon: <FaUserShield className="text-yellow-500 text-4xl" />,
    title: "Eligibility",
    description: "Open to all rappers aged 16 and above.",
  },
  {
    icon: <FaMicrophoneAlt className="text-yellow-500 text-4xl" />,
    title: "Original Freestyle",
    description: "All performances must be 100% original with no ghostwriters.",
  },
  {
    icon: <FaMoneyBillWave className="text-yellow-500 text-4xl" />,
    title: "Entry Fee: $20",
    description: "A non-refundable registration fee applies to participate.",
  },
  {
    icon: <FaMusic className="text-yellow-500 text-4xl" />,
    title: "Freestyle & Flow",
    description: "Creativity, punchlines, and rhyme schemes are key. Pre-written verses are allowed.",
  },
  {
    icon: <FaClock className="text-yellow-500 text-4xl" />,
    title: "Time Limit",
    description: "Each battle round lasts 60 seconds per contestant. Stay within the time limit.",
  },
  {
    icon: <FaVoteYea className="text-yellow-500 text-4xl" />,
    title: "Voting & Elimination",
    description: "Votes determine progression. Every Friday at 11:59 PM, the 5 contestants with the lowest votes will be eliminated.",
  },
  {
    icon: <FaUsers className="text-yellow-500 text-4xl" />,
    title: "Finalists & Championship",
    description: "Only the top 10 contestants will make it to the final event for a head-to-head battle.",
  },
  {
    icon: <FaCheckCircle className="text-yellow-500 text-4xl" />,
    title: "Judging Criteria",
    description: "Lyrical skill, delivery, stage presence, and crowd reaction will impact scoring.",
  },
  {
    icon: <FaBan className="text-yellow-500 text-4xl" />,
    title: "Disqualification",
    description: "No hate speech, personal threats, or off-topic content allowed. Any violations will result in immediate removal.",
  },
  {
    icon: <FaCalendarAlt className="text-yellow-500 text-4xl" />,
    title: "Registration Period",
    description: "Registration starts on [Start Date] and closes on [End Date]. No late entries allowed.",
  },
  {
    icon: <FaGlassCheers className="text-yellow-500 text-4xl" />,
    title: "Gate Fee",
    description: "Spectators must purchase a cocktail drink worth $3,500 as an entry pass.",
  },
  {
    icon: <FaTrophy className="text-yellow-500 text-4xl" />,
    title: "Prizes & Rewards",
    description: "Top winners get cash prizes, record deals, studio sessions, and exclusive industry opportunities.",
  },
];

function ContestRules() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">Official Rap Battle Rules</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {rules.map((rule, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="mb-4">{rule.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400">{rule.title}</h3>
              <p className="mt-2 text-gray-400">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContestRules;