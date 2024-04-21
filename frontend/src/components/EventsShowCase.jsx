import Event from "./Event";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const EventShowCase = (item) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="border-2 border-[#5F43B2] my-10 bg-[#5F43B2] rounded-[42px] bg-clip-padding backdrop-filter bg-opacity-[0.2] touch-none md:px-16 md:py-2"
    >
      <div className="flex items-center mt-4 mx-5 gap-4 md:gap-10">
        <div className="w-16 h-16 md:w-20 md:h-20 ">
          <img src={item.item.img} />
        </div>

        <h2 className="text-white text-lg md:text-2xl font-cR font-black">
          {item.item.name}
        </h2>
      </div>
      <div className="flex overflow-auto gap-2 md:gap-[50px] pl-5 md:mx-10">
        {item.item.Event.map((data) => (
          <div key={data.id}>
            <Event data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventShowCase;
