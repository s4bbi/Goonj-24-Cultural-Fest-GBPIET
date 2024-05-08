import { useContext, useEffect, useState } from "react";
import astro from "../assets/Images/CAPortal_Astro3.webp";
import { VKYRequest } from "../utils/requests";
import { deleteCookie, setCookie } from "../utils/Cookies";
import LoggedContext from "../main";
import { UserContext } from "../main";


const Profile = () => {
  const [receivedUserData, setReceivedUserData] = useState({});
  const {setIsLogin} = useContext(LoggedContext);
  const {setUserData} = useContext(UserContext);
  useEffect(() => {
    const renderProfile = async () => {
      try {
        const response = await VKYRequest("get", "/users");
        setReceivedUserData(response.data.user);
      } catch (error) {
        console.log(error);
        deleteCookie('jwt');
        setIsLogin(false);

        setUserData({
          name: undefined,
          email: undefined,
          googleSubjectId: undefined,
          img: undefined,
          pNum: undefined,
          state: undefined,
          city: undefined,
          college: undefined
        });
      }
    };

    renderProfile();
  }, []);

  return (
    <div className="text-white bg-EventBG w-full h-screen">
      <h1 className="text-5xl text-center pt-36 font-cuda">PROFILE</h1>
      <div className="flex flex-col sm:flex-row text-center sm:text-left items-center justify-center p-12 gap-9 font-cM ">
        <img
          src={receivedUserData?.img || astro}
          className="w-36 h-36 md:w-72 md:h-72 border-2 border-[#5f43b2] rounded-2xl"
          alt="User Image"
        />
        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-[#5f43b2] text-lg">
              {receivedUserData?.name}
            </div>
            <div className="text-[#5f43b2]">
              <span className="text-white">GOONJ ID: </span>{" "}
              {receivedUserData?.generated_id}
            </div>
            <div>{receivedUserData?.pNum}</div>
            <div>
              {receivedUserData?.college}, {receivedUserData?.city},{" "}
              {receivedUserData?.state}
            </div>
            <div>{receivedUserData?.email}</div>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-24 font-cM">
        <span className="font-medium text-lg border-b-2 border-[#5f43b2]">
          REGISTERED EVENTS
        </span>
       <div className="max-h-10 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: '10px' }}>
        <ul>
          {Array.isArray(receivedUserData.events) && receivedUserData.events.map((event) => (
            <li key={event} className="p-2" style={{ display: 'inline-block', margin: '10px'}}>
      {event}
    </li>
          ))}
        </ul>
          </div>
      </div>
    </div>
  );
};

export default Profile;
