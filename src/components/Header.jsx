import homePageVid from "../assets/Videos/HeroBG.webm";


const Header = () => {
    return (
        <div className="flex justify-between items-center py-10 px-10 font-cM w-[100%] bg-transparent absolute">    
            
                <div className="font-cM text-xl">
                    <h1 className="text-white font-bold">GOONJ '<span className='text-[#5f43b2] font-bold'>24</span></h1>
                </div>
                <div className="flex">
                    <ul className="flex justify-between text-center gap-6 text-white text-xl">
                        <li>
                            <a href="#home" className="nav-link ease-in duration-200 tracking-wider transition-colors hover:underline">HOME</a>
                        </li>
                        <li>
                            <a href="#about Us" className="nav-link text ease-in duration-200  tracking-wider hover:underline">EVENTS</a>
                        </li>
                        <li>
                            <a href="#Menu" className="nav-link ease-in duration-200  tracking-wider  hover:underline">GALLERY</a>
                        </li>
                        <li>
                            <a href="#Review" className="nav-link hover:text-decoration-underline ease-in duration-200  tracking-wider hover:underline">SPONSORS</a>
                        </li>
                        <li>
                            <a href="#Contact" className="nav-link hover:text-decoration ease-in duration-200  tracking-wider hover:underline">TEAMS</a>
                        </li>
                        <li>
                            <a href="#Contact" className="nav-link hover:text-decoration ease-in duration-200  tracking-wider hover:underline">CA PORTAL</a>
                        </li>
                        <div className="top-1">
                        <button type="button" className="bg-[#7a59df] rounded-3xl w-24 px-1 hover:bg-[#5c2ee3] ">
                            LOGIN

                        </button>

                        </div>

                    </ul>
                </div>

        </div>

    );
};

export default Header;
