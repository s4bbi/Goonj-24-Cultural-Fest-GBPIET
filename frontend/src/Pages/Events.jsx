import EventVid from "../assets/Videos/EventsVid.webm";
import { useEffect } from "react";
import EventShowCase from "../components/EventsShowCase.jsx";
import { data } from "../data/dummydata.js";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Events = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-EventBG">
      <div className="w-full flex items-center justify-center h-screen">
        <div className="flex flex-col gap-6 z-30 absolute">
          <h1 className="text-5xl md:text-[150px] text-white font-cuda text-center">
            Events
          </h1>
          <Link
            to={
              "https://docs.google.com/document/d/1mu5PZMSbht2vgUaaJtxnjni0gc4le3DANzaoopBlJF4/edit?usp=sharing"
            }
          >
            <h1
              className="text-xs sm:text-xs text-gray-300 font-cR shadow-lg text-center"
              data-aos="fade-up"
            >
              terms and conditions apply*
            </h1>
          </Link>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-full h-full object-cover brightness-90"
        >
          <source src={EventVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="py-5 md:px-20 ">
        {data.map((item) => (
          <div key={item.id} className="px-5 md:py-4">
            <EventShowCase item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
