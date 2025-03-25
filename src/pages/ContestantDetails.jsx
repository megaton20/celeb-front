import { useParams, Link } from "react-router-dom";

// Sample Contestants Data
const contestants = [
  {
    id: 1,
    name: "MC Blaze",
    ranking: "#1",
    image: "/images/mc_blaze.jpg",
    bio: "A lyrical genius known for his fast flows.",
  },
  {
    id: 2,
    name: "Lil Storm",
    ranking: "#3",
    image: "/images/lil_storm.jpg",
    bio: "Brings thunderous bars and crazy energy.",
  },
  {
    id: 3,
    name: "Queen Lyric",
    ranking: "#2",
    image: "/images/queen_lyric.jpg",
    bio: "A queen on the mic with unmatched wordplay. A queen on the mic with unmatched wordplay.  A queen on the mic with unmatched wordplay.  A queen on the mic with unmatched wordplay.  A queen on the mic with unmatched wordplay. ",
  },
];

function ContestantDetails() {
  const { id } = useParams(); // Get ID from URL
  const contestant = contestants.find((c) => c.id === parseInt(id));

  if (!contestant) {
    return <h1 className="text-center text-red-500">Contestant not found</h1>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <img src={contestant.image} alt={contestant.name} className="w-40 h-40 rounded-full border-4 border-yellow-500" />
      <h1 className="text-3xl font-bold mt-4">{contestant.name}</h1>
      <p className="text-yellow-500 text-lg mt-2">{contestant.ranking}</p>
      <p className="mt-4 max-w-md text-center">{contestant.bio}</p>

      <Link to="/contestants" className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded">
        Back to Contestants
      </Link>
    </div>
  );
}

export default ContestantDetails;
