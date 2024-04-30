import TeamsVid from "../assets/Videos/TeamsVid.webm";
import Card from "../components/Card";
import { teamData } from "../data/TeamData";
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
      <div className="w-10/12 mx-auto pb-10">
        {teamData.map((item) => (
          <div key={item.id}>
            <p className="text-white font-cuda text-bold text-3xl md:text-[50px] py-20 text-center">
              {item.name}
            </p>
            <div className="mx-auto w-full sm:flex sm:justify-evenly sm:gap-20 sm:flex-wrap font-cuda">
              {item.members.map((member) => (
                <div key={member.id}>
                  <Card data={member} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
