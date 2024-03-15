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
import saturnimage from  "../assets/Images/Home_Saturn_Img.webp"

const HomePage = () => {
    return (
        <div>
            <div >
                <div className="flex flex-col justify-center absolute sm:w-full h-screen z-10 w-[100%] px-8 mx-auto">
                    <div className="font-cM text-white text-left text-sm  sm:text-3xl mx-12">
                        <h1 className=" sm:mx-48 absolute sm:mt-28">GBPIET'S</h1>
                    </div>
                    <div className="">
                        <h1 className="font-samarkan text-white text-[90px] md:text-[200px] lg:text-[320px] text-center ">GOONJ 24</h1>
                    </div>    
                    <div className="flex justify-end text-xs sm:text-2xl sm:absolute sm:mt-96 sm:right-56">
                        <h1 className="font-cM text-white w-fit  ">VIKSIT BHARAT @2047: VOICE OF YOUTH</h1>
                    </div>
                </div>    
                <div>
                    <video src={vidHome} autoPlay muted loop className="w-full h-screen object-cover"></video>
                </div>
            </div>
            <div className="bg-EventBG py-4 w-full h-full">
                <div>
                    <div className="absolute w-full font-cSB">
                        <div className="flex text-white sm:mx-44 ml-5 pt-1  sm:pt-4">
                            <Link to="/events">
                                <div className="flex flex-col items-center sm:text-2xl text-sm">
                                    <p>
                                        EVENTS
                                    </p>
                                    <img src={EventsGlobe} className="w-20 sm:w-72 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-end text-white mx-72 sm:pt-10">
                            <Link to="/gallery">
                                <div className="flex flex-col items-center text-sm sm:text-2xl">
                                    <p>
                                        GALLERY
                                    </p>
                                    <img src={GalleryGlobe} className="w-16 sm:w-56 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                        <div className="flex text-white sm:mx-64 sm:pt-44 ml-16 -mt-16 sm:mt-0">
                            <Link to="/sponsors">
                                <div className="flex flex-col items-center sm:text-2xl text-sm">
                                    <p>
                                        SPONSORS
                                    </p>
                                    <img src={SponsorsGlobe} className="sm:w-48 w-20 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center text-white  sm:mt-0">
                            <div className="flex flex-col items-center text-2xl ">
                                <video src={orbitSun} autoPlay muted loop className="sm:w-28 w-16" ></video>
                            </div>
                        </div>
                        <div className="flex justify-end text-white sm:mx-40 sm:pt-36  sm:mt-0">
                            <Link to="/teams">
                                <div className="flex flex-col items-center text-sm sm:text-2xl">
                                    <p>
                                        TEAMS
                                    </p>
                                    <img src={TeamsGlobe} className="sm:w-80 w-20 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center text-white   sm:pt-44">
                            <Link to="/caportal">
                                <div className="flex flex-col items-center text-sm sm:text-2xl">
                                    <p>
                                        CA PORTAL
                                    </p>
                                    <img src={CAPortal_Globe} className="w-24 sm:w-64 hover:scale-110 ease-in-out duration-200"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="py-10">
                        <img src={orbitHome} className="w-full"/>
                    </div>
                </div>
                <div>
                    <div className="text-white h-full pt-10 mx-4 ">
                        <div className="text-center font-cuda text-4xl sm:text-7xl p-6">
                            <h1 className="">ABOUT</h1>
                            <p className="font-cR sm:text-base text-xs font-bold">GBPIET's CULTURAL FEST</p>
                        </div>
                        <div className="font-cM text-sm sm:mx-16 sm:text-lg">
                            <div className="flex flex-col">
                            <div className="">
                                <img src={AboutHome} className="w-20 sm:w-56"></img>
                            </div>
                            <div className="border-l-2  border-[#5f43b2] pl-5 border-solid z-20 ">
                                <h1 className="sm:w-[38%]">Welcome to "<span className="text-[#5f43b2] ">Goonj</span>", where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Goonj, our annual college cultural fest, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.</h1>
                            </div>
                            </div>
                            <div className="flex justify-center items-center pt-12 ">
                                <img src={saturnimage} className="sm:w-[450px] w-56 absolute mt-8 hidden sm:block"></img>
                            </div>
                           <div className="flex flex-col pt-10 sm:pt-0">
                             <div className="flex flex-row-reverse w-full">
                                <img src={AboutHome} className="w-20 sm:w-56"/>
                                </div>
                            <div className="border-r-2  border-[#5f43b2] pr-5 border-solid flex justify-end ">
                                <h1 className="sm:w-[38%] text-end"><span className="text-[#5f43b2] z-20">Goonj's</span> events are a high-spirited mix of dance, music, discussions, and global flavours. From thrilling competitions to artistic exhibitions, each moment is a burst of creativity and cultural celebration. Join us for a dynamic experience that transcends boundaries!</h1>
                            </div>
                            </div>
                            <div>
                            <div className="flex justify-start items-center pt-10 sm:pt-0">
                                <img src={AboutHome} className="w-20 sm:w-56  "></img>
                            </div>
                            <div className="border-l-2  border-[#5f43b2] pl-5 border-solid pt-2 flex ">
                                <h1 className="sm:w-[38%]">Welcome to "<span className="text-[#5f43b2] ">Goonj</span>," where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Goonj, our annual college cultural fest, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.</h1>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default HomePage
