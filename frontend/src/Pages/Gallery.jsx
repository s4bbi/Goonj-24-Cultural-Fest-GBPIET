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
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div className="bg-black text-white ">
            <div className="flex items-center justify-center h-screen w-full mx-auto absolute">
                <h1 className="z-30 text-5xl md:text-[150px] text-white font-cuda drop-shadow-2xl">
                    Gallery
                </h1>            
            </div>

            <div className="w-full h-screen">
                <video className="w-full h-full object-cover brightness-90" autoPlay loop muted>
                    <source src={GalleryVid} type="video/webm"/>
                </video>
            </div>
            <div className="flex flex-col gap-12 bg-cover bg-center bg-no-repeat bg-EventBG pt-16 px-10">
                <div className="w-full flex gap-5 sm:gap-14">
                    <div>
                        <img src={Img1} className="object-contain w-[550px] sm:h-[650px] rounded-lg bg-center " alt="Image" />
                    </div>
                    <div>
                        <img src={Img2} className="object-contain w-[550px] sm:h-[650px] rounded-lg bg-center " alt="Image" />
                    </div>
                    <div>
                        <img src={Img3} className="object-contain w-[550px] sm:h-[650px] rounded-lg bg-center " alt="Image"/>
                    </div>
                </div>
                <div className="sm:w-[90%] w-[95%] mx-auto">
                    <img src={Img4} className="object-contain" alt="Image"/>
                </div>
                <div className="w-full flex gap-5 sm:gap-14 px-1">
                    <div>
                        <img src={Img5} className="object-contain w-[550px] sm:h-[650px] rounded-xl" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img6} className="object-contain w-[550px] sm:h-[650px]" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img7} className="object-contain w-[550px] sm:h-[650px]" alt="Image"/>
                    </div>

                </div>
                <div className="w-full flex gap-5 sm:gap-14 px-1 ">
                    <div>
                        <img src={Img8} className="object-contain w-[550px] sm:h-[650px]" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img9} className="object-contain w-[550px] sm:h-[650px]" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img10} className="object-contain w-[550px] sm:h-[650px]" alt="Image"/>
                    </div>

                </div>
                <div className="w-full flex gap-5 sm:gap-14 ">
                    <div>
                        <img src={Img11} className="object-contain w-[430px] sm:h-[650px] rounded-lg sm:w-full" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img12} className="object-contain w-[550px] sm:h-[650px] rounded-lg sm:w-full" alt="Image"/>
                    </div>
                </div>
                <div className="w-full flex gap-5 sm:gap-14 ">
                    <div>
                        <img src={Img13} className="object-contain w-[400px] sm:w-full sm:h-[650px] rounded-lg" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img14} className="object-contain w-[320px] sm:w-full sm:h-[650px] rounded-lg " alt="Image"/> 
                    </div>
                </div>
                <div>
                    <div className="sm:w-[90%] w-[95%] mx-auto">
                        <img src={Img15} className="object-contain " alt="Image"/>
                    </div>
                </div>
                <div className="w-full flex gap-5 sm:gap-14 px-1 ">
                    <div>
                        <img src={Img16} className="object-contain w-[550px] sm:h-[650px] rounded-xl" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img17} className="object-contain w-[550px] sm:h-[650px] rounded-xl" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img18} className="object-contain w-[550px] sm:h-[650px] rounded-xl" alt="Image"/>
                    </div>

                </div>
                <div className="sm:w-[90%] w-[95%] mx-auto">
                    <img src={Img19} className="object-contain" alt="Image"/>
                </div>
                <div className="sm:w-[90%] w-[95%] mx-auto">
                    <img src={Img20} className="object-contain" alt="Image"/>
                </div>
                <div className="w-full flex gap-5 sm:gap-14">
                    <div>
                        <img src={Img21} className="object-contain w-[430px] sm:h-[650px] rounded-lg sm:w-full" alt="Image"/>
                    </div>
                    <div>
                        <img src={Img22} className="object-contain w-[650px] sm:w-full sm:h-[650px] rounded-lg" alt="Image"/>
                    </div>
                </div>
                <div className="py-16">
                    <h1 className="font-cM text-center">ALL THE PHOTOS ABOVE ARE TAKEN BY</h1> 
                    <h1 className="text-violet-700 font-cSB text-center">GBPIET’s <Link to="https://www.instagram.com/drishtikon_gbpiet">DRISHTIKON PHOTOGRAPHY CLUB</Link></h1>
                </div>
            </div> 
        </div>
    );
};

export default Gallery;
