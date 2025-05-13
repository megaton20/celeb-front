import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; 


function ContestantDetails() {
  const { id } = useParams(); // Get ID from URL
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(1);
  const [totalAmount, setTotalAmount] = useState(100); // 1 vote = ₦100

      // Handle vote selection change
      const handleVoteChange = (event) => {
        const selectedVotes = parseInt(event.target.value, 10);
        setVotes(selectedVotes);
        setTotalAmount(selectedVotes * 100); // 1 vote = ₦100
      };

      // Paystack payment configuration
      const handlePayment = () => {
        const paymentDetails = {
          amount: totalAmount * 100, // Paystack requires amount in kobo (₦100 = 10000 kobo)
          email: 'user@example.com', // User's email, ideally fetched from the session
        };

        // Example: Redirect to Paystack for payment
        window.location.href = `/paystack-payment?amount=${paymentDetails.amount}&email=${paymentDetails.email}`;
      };

      useEffect(() => {
        axios
          .get(`http://localhost:4000/contestants/${id}`)
          .then((response) => {
            setData(response.data.data);
            setLoading(false);
          })
          .catch(error => {
            console.error("Error fetching contestants:", error);
            setLoading(false);
          });
      }, [id]);


        // Show loader while data is being fetched
        if (loading) {
          return <Loader />;  
        }

  return (
    <div>
      <Navbar />
        <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
          <div className="container mx-auto px-4">
            <br/>
            <br/>
            <br/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Image */}
              <div className="flex flex-col items-center">
                <img
                  src={`http://localhost:4000/uploads/${data.photo_url}`}
                  alt={data.name}
                  className="w-40 h-40 rounded-full border-4 border-yellow-500 shadow-lg mb-4"
                />
                <h1 className="text-4xl font-bold text-yellow-500">{data.fname}</h1>
                <p className="text-sm text-gray-400 mt-2">{data.email}</p>
              </div>

              {/* Bio Section */}
              <div className="mt-6 md:mt-0 max-w-2xl text-center md:text-left">
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Bio</h2>
                <p className="text-lg text-gray-300">{data.bio}</p>
              </div>
            </div>

            {/* Voting History */}
            <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Voting History</h3>
              <p className="text-gray-300">Votes Received: <span className="text-yellow-400">{data.vote_count}</span></p>
              <p className="text-gray-300">Points: <span className="text-yellow-400">{data.vote_count * 2}</span></p>
            </div>

        

            {/* Voting Section */}
            <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-yellow-500 mb-4">Vote for Contestant</h2>

              {/* Vote Selection */}
              <div className="flex items-center mb-4">
                <label htmlFor="votes" className="text-white mr-4">Select Number of Votes:</label>
                <select
                  id="votes"
                  value={votes}
                  onChange={handleVoteChange}
                  className="px-4 py-2 bg-black text-white rounded-lg"
                >
                  {[...Array(100).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1} Vote{n + 1 > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Total Amount */}
              <div className="text-lg text-white mb-4">
                Total Amount: <span className="text-yellow-400">₦{totalAmount}</span>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                className="w-full px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
              >
                Pay with Paystack
              </button>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default ContestantDetails;
