import EventVid from "../assets/Videos/EventsVid.webm";
import EventShowCase from "../components/EventsShowCase.jsx";
import {data} from "../data/dummydata.js"

const Events = () => {
  console.log(data)
  return (
    <div className="bg-EventBG">
      <div className="relative flex items-center justify-center h-screen">
        <div className="relative z-30 text-5xl md:text-[150px] text-white font-cuda">
          Events
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-full h-full object-cover"
        >
          <source src={EventVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="py-5 md:px-20 ">
        {data.map((item)=>(
          <div key={item.id} className="px-10 md:py-4">
            <EventShowCase item={item} />
           </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
