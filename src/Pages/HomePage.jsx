import vidHome from "../assets/Videos/HeroBG.webm"
import imgHome from "../assets/Images/Events_BG.webp"
import orbitHome from "../assets/Images/Orbits_Img.webp" 
import AboutHome from "../assets/Images/AboutMoon_Img.webp"
import EventsGlobe from "../assets/Images/Events_Globe.webp"


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
            <div className="bg-[url('src/assets/Images/Events_BG.webp')] w-full h-full">

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
                            <h1 className="w-[38%]">Welcome to "<span className="text-[#5f43b2] ">Goonj</span>",where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Goonj, our annual college cultural fest, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.</h1>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="src/assets/Images/Home_Saturn_Img.webp" className="w-[450px] absolute mt-8"></img>
                        </div>
                        <div className="border-r  border-[#5f43b2] pr-5 border-solid flex justify-end ">
                            <h1 className="w-[38%] text-end">Welcome to "<span className="text-[#5f43b2] ">Goonj</span>," where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Goonj, our annual college cultural fest, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.</h1>
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