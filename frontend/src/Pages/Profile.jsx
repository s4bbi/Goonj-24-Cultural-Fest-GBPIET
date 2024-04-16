import astro from "../assets/Images/CAPortal_Astro3.webp";
import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const receivedUserData = location.state;
    const events = receivedUserData?.events || [];
    
    return (
        <div className="text-white bg-EventBG w-full">
            <h1 className="text-5xl text-center pt-36 font-cuda">PROFILE</h1>
            <div className="flex justify-center p-12 gap-9 font-cM">
                <img src={astro} className="w-36 md:w-72 border-2 border-[#5f43b2] rounded-2xl" alt="User Image"/>
                <div className="flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="text-[#5f43b2] text-lg">{receivedUserData?.name}</div>
                        <div className="text-[#5f43b2]">GOONJ ID: {receivedUserData?.generated_id}</div>
                        <div>{receivedUserData?.pNum}</div>
                        <div>{receivedUserData?.college}, {receivedUserData?.city}, {receivedUserData?.state}</div>
                        <div>{receivedUserData?.email}</div>
                    </div>
                </div>
            </div>
            <div className="px-8 md:px-24 font-cM">
                <span className="font-medium text-lg border-b-2 border-[#5f43b2]">REGISTERED EVENTS</span>
                <ul>
                    {events.map(event => (
                        <li key={event.id} className="p-2">{event.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
