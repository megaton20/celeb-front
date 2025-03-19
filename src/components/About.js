
import { FaMicrophoneAlt, FaFire, FaUsers, FaAward } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-8">
           About The Ultimate Rap Battle
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          The Ultimate Rap Battle is more than just a competition—it's a celebration of poetry, rhythm, and raw emotions.  
          Whether you're spitting bars about life struggles, social issues, or personal victories, every verse tells a story.  
          This stage is where passion meets skill, and only the best rise to the top!
        </p>

        {/* Feature Boxes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Passion for Rap */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaMicrophoneAlt className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-yellow-400">Passion for Rap</h3>
            <p className="text-gray-400 mt-2">A platform to express emotions, ideas, and energy through powerful verses.</p>
          </div>

          {/* High Energy Battles */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaFire className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-yellow-400">High Energy Battles</h3>
            <p className="text-gray-400 mt-2">Freestyle, wordplay, and lyrical mastery—only the best make it to the top.</p>
          </div>

          {/* Community Driven */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaUsers className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-yellow-400">Community Driven</h3>
            <p className="text-gray-400 mt-2">A supportive rap community where new talent meets industry legends.</p>
          </div>

          {/* Rewards & Recognition */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaAward className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-yellow-400">Rewards & Fame</h3>
            <p className="text-gray-400 mt-2">Winners earn cash prizes, record deals, and major industry exposure.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
