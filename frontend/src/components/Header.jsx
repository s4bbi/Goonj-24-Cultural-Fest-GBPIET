import { Link } from "react-router-dom";
import { useState } from "react";
import '../index.css';
import goonjLogo from "../assets/goonjLogo.webp"
import LoginButton from "./LoginButton";
import { RiHome2Line } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex justify-between items-center py-4 px-4 font-cR w-full bg-transparent absolute z-40 md:px-10 md:py-10">
            <div className="flex items-center font-cM text-xl">
                <Link to="/"><img src={goonjLogo} className="flex mx-auto w-16" alt="Goonj Logo" /></Link>
            </div>
            <div className="flex items-center gap-3 md:hidden">
                <div className="">
                <Link to="/googleauth"> 
                    <LoginButton />
                </Link>
                </div>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {showSidebar ? (
                            <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        )}
                    </svg>
                </button>
            </div>
            <div className="hidden md:flex">
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
                    <li>
                        <Link to="/audience">Audience Portal</Link>
                    </li>
                    <Link to="/googleauth"> 
                        <LoginButton />
                    </Link>
                </ul>
            </div>
            {showSidebar && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden">
                    <div className="absolute top-0 right-0 h-screen w-64 bg-EventBG shadow-lg">
                        <div className="flex justify-end p-4">
                            <button onClick={toggleSidebar} className="text-white hover:text-gray-800 focus:outline-none">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <ul className="text-white">
                                <li className="mb-4 flex gap-3">
                                    <RiHome2Line className="mt-1"/>
                                    <Link to="/" onClick={toggleSidebar}> HOME</Link>
                                </li>
                                <li className="mb-4 flex gap-3">
                                    <FaCalendarCheck className="mt-1"/>
                                    <Link to="/events" onClick={toggleSidebar}>EVENTS</Link>
                                </li>
                                <li className="mb-4 flex gap-3">
                                    <FaRegImages className="mt-1"/>
                                    <Link to="/gallery" onClick={toggleSidebar}>GALLERY</Link>
                                </li>
                                <li className="mb-4 flex gap-3">
                                    <FaDollarSign className="mt-1"/>
                                    <Link to="/sponsors" onClick={toggleSidebar}>SPONSORS</Link>
                                </li>
                                <li className="mb-4 flex gap-3">
                                    <FaUsers className="mt-1"/>
                                    <Link to="/teams" onClick={toggleSidebar}>TEAMS</Link>
                                </li>
                                <li className="mb-4 flex gap-3">
                                    <FaUserTie className="mt-1"/>
                                    <Link to="/caportal" onClick={toggleSidebar}>CA PORTAL</Link>
                                </li>
                                <li className="mb-4 flex gap-3">
                                    <FaUserGroup className="mt-1"/>
                                        <Link to="/audience" onClick={toggleSidebar}>Audience Portal</Link>
                                    </li>
                                <li>
                                    <Link to="/googleauth" onClick={toggleSidebar}> 
                                        <LoginButton />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;