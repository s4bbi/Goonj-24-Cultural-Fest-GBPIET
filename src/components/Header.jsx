import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center py-10 px-10 font-cM w-full bg-transparent absolute z-20">    
                <div className="font-cM text-xl">
                    <Link to="/"><h1 className="text-white">GOONJ<span className='text-[#5f43b2]'>'24</span></h1></Link>
                </div>
                <div className="flex">
                    <ul className="flex justify-between text-center gap-6 text-white text-xl">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/events">EVENTS</Link> 
                        </li>
                        <li>
                            <Link to="/gallery">GALLERY</Link>
                        </li>
                        <li>
                            <Link to="/sponsors">SPONSORS</Link>
                        </li>
                        <li>
                            <Link to="/teams">TEAMS</Link>
                        </li>
                        <li>
                            <Link to="/caportal">CA PORTAL</Link>
                        </li>
                        <div className="">
                            <button type="button" className="bg-[#7a59df] rounded-3xl w-24 px-1 hover:bg-[#5c2ee3] ">
                                <Link to="/login">LOGIN</Link>
                            </button>
                        </div>
                    </ul>
                </div>
        </div>

    );
};

export default Header;
