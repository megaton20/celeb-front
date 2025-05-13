import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BattleDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/fixtures/${id}`)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching battle details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Battle details not found.
      </div>
    );
  }

  // Get unique criteria list
  const getAllCriteria = () => {
    const criteriaSet = new Set();
    data.judge_scores.forEach((judge) => {
      if (judge.scores) {
        Object.keys(judge.scores).forEach((contenderName) => {
          judge.scores[contenderName].forEach((score) => {
            criteriaSet.add(score.criteria);
          });
        });
      }
    });
    return Array.from(criteriaSet);
  };

  const calculateTotalScores = () => {
    return data.judge_scores.reduce(
      (totals, judge) => {
        if (judge.scores) {
          Object.keys(judge.scores).forEach((contenderName) => {
            judge.scores[contenderName].forEach(({ criteria, score }) => {
              if (contenderName === data.contender1_name) {
                totals.contender1 += score;
              } else if (contenderName === data.contender2_name) {
                totals.contender2 += score;
              }
            });
          });
        }
        return totals;
      },
      { contender1: 0, contender2: 0 }
    );
  };

  const totalScores = calculateTotalScores();
  const allCriteria = getAllCriteria();

  return (
    <div>
        <Navbar/>

    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <br/>
      <br/>
      <br/>
      <div className="w-full max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-yellow-400 text-center mb-4">
          Match Stats
        </h2>

        {/* Contender Info */}
        <div className="flex justify-between items-center text-center mb-6">
          <div className="w-1/3">
            <img
              src={`http://localhost:4000/uploads/${data.contender1_photo}`}
              alt={data.contender1_name}
              className="w-24 h-24 mx-auto rounded-full"
            />
            <p className="mt-2 text-sm">{data.contender1_name}</p>
          </div>

          <div className="w-1/3 text-center">
            <p className="text-gray-300 text-xl font-bold">VS</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(data.match_date).toLocaleDateString()}
            </p>
          </div>

          <div className="w-1/3">
            <img
              src={`http://localhost:4000/uploads/${data.contender2_photo}`}
              alt={data.contender2_name}
              className="w-24 h-24 mx-auto rounded-full"
            />
            <p className="mt-2 text-sm">{data.contender2_name}</p>
          </div>
        </div>

        {/* Stats Table */}
        {data.judge_scores?.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-2 w-1/3 text-center text-gray-400">
                    {data.contender1_name}
                  </th>
                  <th className="p-2 w-1/3 text-center text-gray-500">
                    Criteria
                  </th>
                  <th className="p-2 w-1/3 text-center text-gray-400">
                    {data.contender2_name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {allCriteria.length > 0 ? (
                  allCriteria.map((criteria, index) => {
                    let contender1Total = 0;
                    let contender2Total = 0;

                    data.judge_scores.forEach((judge) => {
                      if (judge.scores) {
                        Object.keys(judge.scores).forEach((contenderName) => {
                          judge.scores[contenderName].forEach((score) => {
                            if (score.criteria === criteria) {
                              if (contenderName === data.contender1_name) {
                                contender1Total += score.score;
                              } else if (
                                contenderName === data.contender2_name
                              ) {
                                contender2Total += score.score;
                              }
                            }
                          });
                        });
                      }
                    });

                    return (
                      <tr key={index} className="border-b border-gray-700">
                        <td
                          className={`p-2 text-center font-bold ${
                            contender1Total > contender2Total
                              ? "text-green-400"
                              : "text-gray-300"
                          }`}
                        >
                          {contender1Total}
                        </td>
                        <td className="p-2 text-center text-gray-300">
                          {criteria.toUpperCase()}
                        </td>
                        <td
                          className={`p-2 text-center font-bold ${
                            contender2Total > contender1Total
                              ? "text-green-400"
                              : "text-gray-300"
                          }`}
                        >
                          {contender2Total}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="3" className="p-2 text-center text-gray-400">
                      No criteria found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-400">
            No judge scores available yet.
          </p>
        )}

        {/* Total Score Summary Section */}
        <div className="mt-6 text-center text-lg font-bold text-yellow-400">
          <p className="text-sm mt-6">Total Score Summary:</p>
          <div className="flex justify-center mt-4">
            <div className="w-1/3 bg-gray-700 p-4 rounded-md">
              <p>{data.contender1_name}</p>
              <p className="text-xl text-green-400">{totalScores.contender1}</p>
            </div>
            <div className="w-1/3 bg-gray-700 p-4 rounded-md">
              <p>{data.contender2_name}</p>
              <p className="text-xl text-green-400">{totalScores.contender2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default BattleDetail;
