import TeamsVid from "../assets/Videos/TeamsVid.webm";
import TeamsEarth from "../assets/Images/TeamsEarth.png";
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
        <div className="text-white md:flex w-screen text-lg md:text-[50px] py-10 font-cuda text-bold justify-center items-center md:mt-20 grid place-items-center ">
            <div className="" >
                DEV TEAM
            </div>
            <div className="md:px-20">
                {/*img  */}
                <img src={TeamsEarth} alt="team_earth img" /> 
            </div>
            <div className="">
                CORE TEAM
            </div>
        </div>
               
       </div>
        
    )
}

export default Teams