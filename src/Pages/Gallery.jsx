import GalleryVid from "../assets/Videos/GalleryVid.webm";
import Img1 from "../assets/Images/Gallery_Images/1.webp";
import Img2 from "../assets/Images/Gallery_Images/2.webp";
import Img3 from "../assets/Images/Gallery_Images/3.webp";
import Img4 from "../assets/Images/Gallery_Images/4.webp";
import Img5 from "../assets/Images/Gallery_Images/5.webp";
import Img6 from "../assets/Images/Gallery_Images/6.webp";
import Img7 from "../assets/Images/Gallery_Images/7.webp";
import Img8 from "../assets/Images/Gallery_Images/8.webp";
import Img9 from "../assets/Images/Gallery_Images/9.webp";
import Img10 from "../assets/Images/Gallery_Images/10.webp";
import Img11 from "../assets/Images/Gallery_Images/11.webp";
import Img12 from "../assets/Images/Gallery_Images/12.webp";
import Img13 from "../assets/Images/Gallery_Images/13.webp";
import Img14 from "../assets/Images/Gallery_Images/14.webp";
import Img15 from "../assets/Images/Gallery_Images/15.webp";
import Img16 from "../assets/Images/Gallery_Images/16.webp";
import Img17 from "../assets/Images/Gallery_Images/17.webp";
import Img18 from "../assets/Images/Gallery_Images/18.webp";
import Img19 from "../assets/Images/Gallery_Images/19.webp";
import Img20 from "../assets/Images/Gallery_Images/20.webp";
import Img21 from "../assets/Images/Gallery_Images/21.webp";
import Img22 from "../assets/Images/Gallery_Images/22.webp";

const Gallery = () => {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-col gap-10 items-center justify-center w-[100%] h-screen sm:w-full absolute z-10">
                <h1 className="font-cuda text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 3xl:text-9xl">
                    Gallery
                </h1>            
            </div>

            <div className="w-full h-screen">
                <video className="w-full h-full object-cover brightness-90" autoPlay loop muted>
                    <source src={GalleryVid} type="video/webm" />
                </video>
            </div>
            <div className="bg-cover bg-center bg-no-repeat bg-EventBG py-1 ">
                <div className="w-full flex gap-2 sm:gap-14 px-1 sm:py-10 ">
                    <div>
                        <img src={Img1} className="object-cover w-[550px] sm:h-[650px] rounded-lg bg-center ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl" alt="" />
                    </div>
                    <div>
                        <img src={Img2} className="object-cover  w-[550px] sm:h-[650px] rounded-lg bg-center ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl" alt="" />
                    </div>
                    <div>
                        <img src={Img3} className="object-cover  w-[550px] sm:h-[650px] rounded-lg bg-center ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl" alt=""/>
                    </div>
                </div>
                <div className="sm:w-[90%] w-[95%] mx-auto mt-10 sm:py-16">
                    <img src={Img4} className="object-cover" alt=""/>
                </div>
                <div className="w-full flex gap-2 sm:gap-14 px-1 sm:py-10 sm:px-10 py-10">
                    <div>
                        <img src={Img5} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[550px] sm:h-[650px] h-[220px] rounded-xl"/>
                    </div>
                    <div>
                        <img src={Img6} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[550px] sm:h-[650px]"/>
                    </div>
                    <div>
                        <img src={Img7} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[550px] sm:h-[650px]"/>
                    </div>

                </div>
                <div className="w-full flex gap-2 sm:gap-14 px-1 sm:py-10 sm:px-10 py-10 ">
                    <div>
                        <img src={Img8} className="object-cover -my-20 ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[550px] sm:h-[650px] sm:py-10 py-10"/>
                    </div>
                    <div>
                        <img src={Img9} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[550px] sm:h-[650px]"/>
                    </div>
                    <div>
                        <img src={Img10} className="object-cover -my-20 ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[550px] sm:h-[650px] sm:py-10 py-10"/>
                    </div>

                </div>
                <div className="w-full flex gap-2 sm:gap-14 px-1 sm:py-10 sm:px-10 py-3">
                    <div>
                        <img src={Img11} className="object-cover  ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[430px] sm:h-[650px] sm:py-10 h-[250px] rounded-lg sm:w-[680px]"/>
                    </div>
                    <div>
                        <img src={Img12} className="object-cover  ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl w-[550px] sm:h-[650px] sm:py-10 py-10 rounded-lg sm:w-"/>
                    </div>
                </div>
                <div className="w-full flex gap-2 sm:gap-14 px-1 sm:py-10 sm:px-10 py-12">
                    <div>
                        <img src={Img13} className="object-cover -mt-10 ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl pb-32 w-[400px] sm:h-[650px] sm:py-10  rounded-lg py-8"/>
                    </div>
                    <div>
                        <img src={Img14} className="object-cover -mt-10 ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl w-[320px] sm:h-[650px] sm:py-10 h-[250px] rounded-lg "/> 
                    </div>
                </div>
                <div>
                    <div className="sm:w-[90%] w-[95%] mx-auto mt-2 sm:py-16">
                        <img src={Img15} className="onject-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-2xl "/>
                    </div>
                </div>
                <div className="w-full flex gap-2 sm:gap-14 px-1 sm:py-10 sm:px-10 py-10 ">
                    <div>
                        <img src={Img16} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl w-[550px] sm:h-[650px] h-[220px] rounded-xl"/>
                    </div>
                    <div>
                        <img src={Img17} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl w-[550px] sm:h-[650px] h-[220px] rounded-xl"/>
                    </div>
                    <div>
                        <img src={Img18} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl w-[550px] sm:h-[650px] h-[220px] rounded-xl"/>
                    </div>

                </div>
                <div className="sm:w-[90%] w-[95%] mx-auto mt-10 sm:py-16">
                    <img src={Img19} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl"/>
                </div>
                <div className="sm:w-[90%] w-[95%] mx-auto mt-10 sm:py-16">
                    <img src={Img20} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl"/>
                </div>
                <div className="w-full flex gap-2 sm:gap-14 px-1 sm:py-10 sm:px-10 py-3">
                    <div>
                        <img src={Img21} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl w-[430px] sm:h-[650px] sm:py-10  rounded-lg sm:w-[680px]"/>
                    </div>
                    <div>
                        <img src={Img22} className="object-cover ease-in-out duration-200 hover:border-[4px] hover:scale-[1.05] border-[#5f43b2] hover:rounded-3xl w-[650px] sm:h-[650px] sm:py-10 py-10 rounded-lg "/>
                    </div>
                </div>
                <div className="p-16">
                    <h1 className="font-cM text-center">ALL THE PHOTOS ABOVE ARE TAKEN BY</h1> 
                    <h1 className="text-violet-700 font-cSB text-center">GBPIET’s DRISHTIKON PHOTOGRAPHY CLUB</h1>
                </div>
            </div> 
        </div>
    );
};

export default Gallery;
