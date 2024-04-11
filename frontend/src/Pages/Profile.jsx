import astro from "../assets/Images/CAPortal_Astro3.webp"
import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const receivedUserData = location.state; 
    const events = receivedUserData?.events || []; 
    console.log(receivedUserData)

    return(
        <div>

            <div className="text-white bg-EventBG w-screen h-screen text-wider">
                <div>
                    <h1 className="text-5xl text-center pt-36 font-cuda ">PROFILE</h1>
                </div>
                <div className="flex justify-center p-12 gap-9 font-cM ">
                    <div>
                        <img src={astro} className="w-72 border-2 border-[#5f43b2] rounded-2xl" alt="User Image"/>
                    </div>
                    <div className="flex justify-center md:flex
                    ">
                    <div className="flex justify-between gap-28 pt-4 text-lg px-24">
                        <div className=" gap-20">
                        <h1 className="p-2 text-[#5f43b2] text-lg">{receivedUserData.name}</h1>
                        {console.log(receivedUserData.pNum)}
                        <h1 className="p-2">{receivedUserData.pNum}</h1>
                        <p className="w-80 p-2">{receivedUserData.college},{receivedUserData.city}, {receivedUserData.state}</p>
                    </div>
                    <div className="gap-28">
                        <div className="text-white font-cM p-2">GOONJ ID: <span className="text-[#5f43b2]">{receivedUserData.generated_id}</span></div>
                        <div className="p-2">{receivedUserData.email}</div>
                    </div>
                    </div>
                </div>
                <div className="px-60 font-cM">
                        <span className="font-medium text-lg border-b-2 border-[#5f43b2]">REGISTERED EVENTS</span>
                        
                        <ul>
                            {events.map(event => (
                                (
                                    <li key={event.id}>
                                        <div className="p-2">{event.name}</div>
                                        
                                    </li>
                                )
                            ))}
                        </ul>   
                        
                        
                    </div>



            </div>
           
        </div>
        </div>
    );
};

export default Profile