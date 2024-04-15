import { Link, useNavigate } from "react-router-dom";
const Event = (props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/events/${props.data.id}`, {
          state: { event: props },
        })
      }
      className=" text-white my-8 h-[150px] w-28 md:w-52 md:h-64 cursor-pointer"
    >
      <div>
        <img
          src={props.data.img}
          className="h-[150px] md:h-64 w-32 md:w-48 rounded-[32px] border-2 border-[#717075] object-cover"
        />
      </div>
    </div>
  );
};

export default Event;
