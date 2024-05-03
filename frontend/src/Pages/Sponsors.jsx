import SponsorsVid from "../assets/Videos/SponsorsVid.webm";
import telescope from "../assets/Images/telescope.png";
import telescope2 from "../assets/Images/telescope2.png";
import SBI_Logo from "../assets/Images/SBI_Logo.svg"
import LIC_Logo from "../assets/Images/LIC_Logo.png"
import KwaliFoods_Logo from "../assets/Images/KwaliFoods_Logo.png"

const Sponsors = () => {
    return (
        <div className="bg-EventBG">
            <div className="relative flex items-center justify-center h-screen">
                <div className="text-white z-30 md:text-[150px] font-cuda text-5xl drop-shadow-2xl ">
                    Sponsors
                </div>
                <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-full h-full object-cover"
            >
            <source src={SponsorsVid} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            </div>
            <div className="w-full py-16 mx-auto justify-center items-center flex flex-col gap-10">
                <div className="md:w-8/12 flex flex-col md:flex-row px-10 gap-20 justify-between items-center mx-auto">
                    <img src={telescope} className="hidden md:flex w-56" alt="" />
                    <img src={SBI_Logo} className="w-24 md:w-48" alt="" />
                </div>
                <div className="md:w-8/12 flex flex-col md:flex-row px-10 gap-20 justify-between items-center mx-auto">
                    <img src={LIC_Logo} className="w-24 md:w-48" alt="" />
                    <img src={telescope2} className="hidden md:flex w-56" alt="" />
                </div>
                <div className="md:w-8/12 flex flex-col md:flex-row px-10 gap-20 justify-between items-center mx-auto">
                    <img src={telescope} className="hidden md:flex w-56" alt="" />
                    <img src={KwaliFoods_Logo} className="w-24 md:w-48" alt="" />
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center py-10">
                    <div className="flex flex-col items-center">
                        <p className="font-cuda text-xl md:text-5xl text-center text-white">Alumni Sponsors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors