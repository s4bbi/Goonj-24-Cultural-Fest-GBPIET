import EventVid from "../assets/Videos/EventsVid.webm";
import EventShowCase from "../components/EventsShowCase.jsx";
import { data } from "../data/dummydata.js";

const Events = () => {
  return (
    <div className="bg-EventBG">
      <div className="w-full flex items-center justify-center h-screen">
        <div className="flex flex-col gap-6 z-30 absolute">
          <h1 className="text-5xl md:text-[150px] text-white font-cuda text-center">
            Events
          </h1>
          <h1 className="text-2xl text-yellow-500 shadow-lg font-cuda text-center">
            Prizes upto 2 Lakhs
          </h1>
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
