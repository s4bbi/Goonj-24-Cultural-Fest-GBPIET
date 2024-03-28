import TeamsVid from "../assets/Videos/TeamsVid.webm";
import TeamsEarth from "../assets/Images/TeamsEarth.png";
import Card from "../components/Card"
import {teamData} from "../data/TeamData"
const Teams = () => {
    return (
       <div className="bg-EventBG">
        <div className="relative flex items-center justify-center h-screen">
            <div className="text-white z-30 md:text-[150px] font-cuda text-5xl ">
                TEAMS
            </div>
            <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-full h-full object-cover"
        >
          <source src={TeamsVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="">
           {teamData.map((item)=>(
            <div key={item.id}>
            <p  className="text-white  font-cuda text-bold text-lg  sm:text-[50px] pt-16 text-center ">{item.name}</p>
            <div className="w-[220px] mx-auto sm:w-full  sm:flex sm:justify-evenly md:justify-between sm:gap-10 sm:p-20 sm:flex-wrap">
              {item.members.map((member)=>(
                <Card data={member}/>
              ))}
            </div>
            
            </div>
           ))}
        </div>
               
       </div>
        
    )
}

export default Teams