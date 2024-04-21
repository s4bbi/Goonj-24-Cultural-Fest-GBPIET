import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Event = (props) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const img = new Image();
    img.src = props.data.img;
    img.onload = handleImageLoad;

    return () => {
      img.onload = null;
    };
  }, [props.data.img]);

  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      onClick={() =>
        navigate(`/events/${props.data.id}`, {
          state: { event: props },
        })
      }
      className="text-white my-8 h-[150px] w-28 md:w-52 md:h-64 cursor-pointer"
    >
      <div
        className={` duration-300 hover:scale-[1.06] ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={props.data.img}
          className="h-[150px] md:h-64 w-32 md:w-48 rounded-[32px] border-2 border-[#717075] object-cover transition-opacity duration-1000 hover:scale-100"
        />
      </div>
    </div>
  );
};

export default Event;
