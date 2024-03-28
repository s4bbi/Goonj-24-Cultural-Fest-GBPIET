import "../CssFiles/Card.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import yashi from "../assets/Images/TeamsImages/DevTeam/Nitesh.jpg";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
const Card = (props)=>{
    console.log(props.data)
    return(
        <>
        <div class="card mt-5  sm:mt-0">
  <div class="background">
 {props.data.img && <img src={props.data.img} className="w-full h-full"/>} 
  </div>
  <div class="logo">
    <div class="logo-svg bg-black py-1 px-[1px] ">
     <p className="text-[14px] text-violet-700 text-bold">{props.data.name}</p>
    </div>
  </div>
  <div class="box box1">
    <span class="icon"><Link to={props.data.linkdin} target="_blank"><FaLinkedin className="text-2xl absolute hover:text-[#0A66C2] hover:cursor-pointer" /></Link></span>
  </div>
  <div class="box box2"> 
  <span class="icon">{ props.data.git ?
  <Link to={props.data.git}  target="_blank">
  <FaGithub  className="text-2xl absolute hover:text-[#0D1117] hover:cursor-pointer"/> </Link>:  <Link to={props.data.insta}  target="_blank"><FaInstagram  className="text-2xl absolute hover:text-red-800 hover:cursor-pointer"/></Link>
  }
      </span>
      </div>
  <div class="box box3"><span class="icon"><Link to={props.data.email} target="_blank"><MdEmail className="text-2xl absolute hover:text-[#EA4335] hover:cursor-pointer" /></Link></span></div>
  <div class="box box4"></div>
</div>
        </>
    );
}

export default Card;