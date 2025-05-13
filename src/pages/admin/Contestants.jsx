import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./components/SideBar"
import Button from "../../components/Button"



function ContestantList() {
  const [contestants, setContestants] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/contestants/")
      .then((response) => {
        setContestants(response.data.data);
      })
      .catch(()=> navigate("/login"));
  }, [navigate]);


  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [loading, setLoading] = useState(false); 

  const handleClick = async () => {
        setLoading(true);

        // Simulate API request (replace with real API call)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setLoading(false); 

      }

      if (!contestants) return <p>Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"} w-full`}>
        {/* Hamburger Button for Mobile */}
        <button className="text-white text-2xl mb-4 md:hidden" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
        <button className="hidden md:block text-white text-2xl mb-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </button>


      <h1 className="text-3xl font-bold text-yellow-500">Contestant List</h1>
      <p className="text-gray-400 mb-6">Manage your account and preferences</p>

    {/* Contestants Table */}
        <div className="mt-10 overflow-x-auto">

          <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-yellow-400">
              <tr>
                <th className="py-3 px-6 text-left">SN</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Stage Name</th>
                <th className="py-3 px-6 text-left">points</th>
                <th className="py-3 px-6 text-left">Votes</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {contestants.map((each, index)=>(
                  <tr className="border-b border-gray-700"  key={index}>
                  <td className="py-4 px-6">{index +1}</td>
                  <td className="py-4 px-6">{each.fname} {each.lname}</td>
                  <td className="py-4 px-6">{each.fname} </td>
                  <td className="py-4 px-6"> {each.points} </td>
                  <td className="py-4 px-6"> {each.vote_count} </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                      <Button onClick={handleClick} loading={loading} type="bg-green-500">
                        Approve
                      </Button>
                      <Button onClick={handleClick} loading={loading} type="bg-red-500">
                        Remove
                      </Button>
                    </div>
                  </td>

                </tr>
              )

              )}
            
   
            </tbody>
          </table>
        </div>
      </main>

     
    </div>
   
  );
}

export default ContestantList;