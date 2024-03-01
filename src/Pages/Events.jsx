import EventVid from "../assets/Videos/EventsVid.webm";
import {data} from "../data/dummydata.js"
const Events = () => {
  return (
    <div className="">
      <div className="relative flex items-center justify-center h-screen">
        <div className="relative z-30  text-5xl md:text-[150px] text-white   font-cuda">
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
      <div>
        {data.map((item)=>{
          return <h2 key={item.id}>{item.data.DRAMAFLICT.DRAMA.name}</h2>
        }
          
        )}
      </div>
    </div>
  );
};

export default Events;
