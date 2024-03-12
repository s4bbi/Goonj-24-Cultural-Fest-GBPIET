import GalleryVid from "../assets/Videos/GalleryVid.webm"
import Img1 from "../assets/Images/Gallery_Images/1.png"
import Img2 from "../assets/Images/Gallery_Images/2.png"


const Gallery = () => {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-col gap-10 items-center justify-center w-full h-screen absolute z-10">
                <h1 className="font-cuda text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl">
                    Gallery
                </h1>            
            </div>

            <div className="w-full h-screen">
                <video className="w-full h-full object-cover brightness-90" autoPlay loop muted>
                    <source src={GalleryVid} type="video/webm" />
                </video>
            </div>
            <div className="bg-cover bg-center bg-no-repeat h-full bg-EventBG px-20 py-20">
                <div className="flex gap-32 flex-wrap">
                        
                </div>
            </div>
        </div>
    )
}

export default Gallery