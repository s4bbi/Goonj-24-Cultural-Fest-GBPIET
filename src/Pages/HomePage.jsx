import vidHome from "../assets/Videos/HeroBG.webm"
import orbitHome from "../assets/Images/Orbits.png" 
import AboutHome from "../assets/Images/AboutMoon_Img.webp"
import EventsGlobe from "../assets/Images/Events_Globe.webp"
import GalleryGlobe from "../assets/Images/Gallery_Globe.webp"
import SponsorsGlobe from "../assets/Images/Sponsors_Globe.webp"
import TeamsGlobe from "../assets/Images/Teams_Globe.webp"
import CAPortal_Globe from "../assets/Images/CAPortal_Globe.webp"
import orbitSun from "../assets/Videos/orbitSun.webm"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col justify-center absolute w-full h-screen z-10">
                        <div className="font-cM text-white text-left text-2xl pl-[186px] absolute pb-96">
                            <h1 className="">GBPIET'S</h1>
                        </div>
                        <div className="">
                            <h1 className="font-samarkan text-white text-[320px] text-center">GOONJ 24</h1>
                        </div>    
                        <div className="flex justify-end pr-[186px] text-2xl">
                            <h1 className="font-cM text-white  ">VIKSIT BHARAT @2047: VOICE OF YOUTH</h1>
                        </div>
                </div>    
                <div>
                    <video src={vidHome} autoPlay muted loop className="w-screen h-full object-cover"></video>
                </div>
            </div>
            <div className="bg-EventBG py-4 w-full h-full">
                <div>
                    <div className="absolute w-full font-cSB">
                        <div className="flex text-white mx-44 pt-4">
                                <Link to="/events">
                                    <div className="flex flex-col items-center text-2xl">
                                        <p>
                                            EVENTS
                                        </p>
                                        <img src={EventsGlobe} className="w-72 hover:scale-110 ease-in-out duration-200"/>
                                    </div>
                                </Link>
                        </div>
                        <div className="flex justify-end text-white mx-72 pt-10">
                            <Link to="/gallery">
                                <div className="flex flex-col items-center text-2xl">
                                    <p>
                                        GALLERY
                                    </p>
                                    <img src={GalleryGlobe} className="w-56 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                        <div className="flex text-white mx-64 pt-44">
                            <Link to="/sponsors">
                                <div className="flex flex-col items-center text-2xl">
                                    <p>
                                        SPONSORS
                                    </p>
                                    <img src={SponsorsGlobe} className="w-48 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center text-white ">
                                <div className="flex flex-col items-center text-2xl">
                                    <video src={orbitSun} autoPlay muted loop className="w-24" ></video>
                                </div>
                        </div>
                        <div className="flex justify-end text-white mx-40 pt-36">
                            <Link to="/teams">
                                <div className="flex flex-col items-center text-2xl">
                                    <p>
                                        TEAMS
                                    </p>
                                    <img src={TeamsGlobe} className="w-80 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center text-white pt-44">
                            <Link to="/caportal">
                                <div className="flex flex-col items-center text-2xl">
                                    <p>
                                        CA PORTAL
                                    </p>
                                    <img src={CAPortal_Globe} className="w-64 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="py-10">
                        <img src={orbitHome} className="w-full"/>
                    </div>
                </div>
                <div>
                    <div className="text-white h-full pt-10  mx-4">
                    <div  className="text-center font-cuda text-7xl p-6">
                        <h1 className="">ABOUT</h1>
                        <p className="font-cR text-sm">GBPIET's CULTURAL FEST</p>
                    </div>
                    <div className="font-cM mx-16 p-8 text-lg">
                        <img src={AboutHome} className="w-32"></img>
                        <div className="flex justify-end p-4">
                            <img src="src/assets/Images/AboutMoon_Img.webp" className="w-20 absolute mt-8 "></img>
                        </div>
                        <div className="border-l  border-[#5f43b2] pl-5 border-solid ">
                            <h1 className="w-[38%]">Welcome to "<span className="text-[#5f43b2] ">Goonj</span>", where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Goonj, our annual college cultural fest, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.</h1>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="src/assets/Images/Home_Saturn_Img.webp" className="w-[450px] absolute mt-8"></img>
                        </div>
                        <div className="border-r  border-[#5f43b2] pr-5 border-solid flex justify-end ">
                            <h1 className="w-[38%] text-end"><span className="text-[#5f43b2] ">Goonj's</span> events are a high-spirited mix of dance, music, discussions, and global flavours. From thrilling competitions to artistic exhibitions, each moment is a burst of creativity and cultural celebration. Join us for a dynamic experience that transcends boundaries!</h1>
                        </div>
                        <div className="flex justify-start items-center p-24">
                            <img src="src/assets/Images/AboutMoon_Img.webp" className="w-56 absolute "></img>
                        </div>
                        <div className="border-l  border-[#5f43b2] pl-5 border-solid pt-2 flex ">
                            <h1 className="w-[38%]">Welcome to "<span className="text-[#5f43b2] ">Goonj</span>," where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Goonj, our annual college cultural fest, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.</h1>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>

    )
}

export default HomePage