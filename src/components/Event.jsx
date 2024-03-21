import { Link ,useNavigate} from "react-router-dom"
import img from "../assets/Images/EventImages/nukkad.webp"
const Event = (props) => {
   const navigate = useNavigate();
   console.log(props)
    return (
       
        <div
        onClick={() =>
            navigate(`/events/${props.data.id}`, {
              state: { event: props },
            })
          } 
        className=" text-white my-8 h-40 w-32 md:w-52 md:h-64 cursor-pointer">
          <img src={props.data.img} className="h-40 md:h-64 w-32 md:w-52 rounded-[32px] border-2 border-[#717075]"/>
        </div>
       
    )
}

export default Event