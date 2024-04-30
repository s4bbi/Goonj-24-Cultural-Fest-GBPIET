import SponsorsVid from "../assets/Videos/SponsorsVid.webm";

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
            <div>
                
            </div>
        </div>
    )
}

export default Sponsors