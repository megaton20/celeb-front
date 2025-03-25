import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import rapBattle1 from "../images/rap_battle_1.jpg";
import rapBattle2 from "../images/rap_battle_2.jpg";
import sponsors1 from "../images/sponsor/client-1.png";
import sponsors2 from "../images/sponsor/client-2.png";
import sponsors3 from "../images/sponsor/client-3.png";
import sponsors4 from "../images/sponsor/client-4.png";
import sponsors5 from "../images/sponsor/client-5.png";
import sponsors6 from "../images/sponsor/client-6.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

import MeetTheJudges from "./MeetTheJudges";
import ContestRules from "./ContestRules";
import ContactSection from "../components/Contact";


function Home() {
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
      document.title = "Rap Battle Contest - Home";
    }, []);
  
    return (
      <div>
          <Navbar />
          <div className="bg-black text-white">
        {/* Hero Section with Carousel */}
        <section className="relative w-full h-screen overflow-hidden">
      {/* Swiper Background Image Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {[rapBattle1].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}> </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content Overlay - Fixed Text & Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 mb-6">
           {/* Heading - Lower Third Position */}
           <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          Welcome To Celeb
        </h1>
        <p className=" font-extrabold  drop-shadow-lg" style={{marginBottom: "20px", padding: "12px"}}> where words ignite, rhymes collide, and emotions run deep
         Spit your truth. Own the mic. Because this isn't just a battle—it's poetry in motion.</p>

        <div className="flex gap-6 mb-6">
          {/* Register Button */}
          <Link to="/contest/register" className="px-6 py-3 bg-yellow-500 text-black text-xl font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition"> Join Contest
          </Link>

          {/* Play Button */}
          <button
            className="px-6 py-3 bg-gray-800 text-white text-xl font-bold rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-900 transition play-button"
            onClick={() => setShowIframe(true)}>
            ▶ Watch 
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showIframe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-full max-w-3xl p-4">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setShowIframe(false)}
            >
              ✖
            </button>
            <iframe
              className="w-full h-[500px] md:h-[600px] rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Rap Battle Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
        </section>
  
        <About/>
        {/* Prizes to be Won */}
        <section className="py-20 text-center">

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl font-bold text-yellow-400"> Prizes to Be Won</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10 px-6">
            {[
              { title: "🥇 1st Place", prize: "$1,000 + Record Deal" },
              { title: "🥈 2nd Place", prize: "$500 + Studio Session" },
              { title: "🥉 3rd Place", prize: "$100 + Merch Package" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-lg mt-2">{item.prize}</p>
              </div>
            ))}
          </div>
          </div>
        </section>
  
    
       
        <ContestRules/>
        
          {/* CTA */}
          <section className="py-20 bg-yellow-500 text-black text-center"  style={{ backgroundImage: `url(${rapBattle2})`, backgroundAttachment: "fixed" }}>

            <h2 className="text-5xl font-bold"> Ready to Battle?</h2>
            <Link to="/register" className="mt-6 px-8 py-3 bg-black text-white text-2xl font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-block" >
              Register Now
            </Link>
        </section>

        <MeetTheJudges/>

        {/* Sponsors */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold text-yellow-400"> Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center mt-10 px-6">
                {[sponsors1, sponsors2, sponsors3, sponsors4, sponsors5, sponsors6].map((sponsor, index) => (
                    <img key={index} src={sponsor} alt={`Sponsor ${index + 1}`} className="h-16 md:h-24 object-contain" />
                ))}
                </div>

        </section>
  
      

           {/* Testimonials */}
          <section className="py-20 bg-gray-900 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8"> What Rappers Say</h2>
          <div className="max-w-4xl mx-auto mt-10">
                <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
                    {[
                    { 
                        text: "The best rap battle experience of my life! The energy was insane!", 
                        name: "MC Blaze", 
                        image: sponsors1 
                    },
                    { 
                        text: "I got discovered here, and now I'm signed!", 
                        name: "Lil Storm", 
                        image: sponsors2 
                    },
                    { 
                        text: "Unforgettable! Can’t wait for the next battle.", 
                        name: "Young Spit", 
                        image: sponsors3 
                    },
                    ].map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-16 h-16 rounded-full mb-4 border-4 border-yellow-500 object-cover"
                        />
                        <p className="text-lg italic">{testimonial.text}</p>
                        <h4 className="mt-4 font-bold text-yellow-500">{testimonial.name}</h4>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
        <ContactSection/>
  
        {/* Footer */}
        <section className="bg-gray-800 py-3 text-center text-gray-400">
          <p className="text-lg">Powered by strobe Technologies</p>
          <div className="flex justify-center gap-4 mt-3">
         
          </div>
        </section>
         </div>
         
         <Footer />
      </div>
     
    );
  }

export default Home;


