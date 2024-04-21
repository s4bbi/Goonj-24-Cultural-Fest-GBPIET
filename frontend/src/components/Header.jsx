import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "../index.css";
import goonjLogo from "../assets/goonjLogo.webp";
import LoginButton from "./LoginButton";
import { RiHome2Line } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import profile from "../assets/Images/profile.png";
import { useContext, useEffect } from "react";
import LoggedContext from '../main'
import { deleteCookie, getCookie } from "../utils/Cookies";

const Header = () => {

  const {isLogin, setIsLogin} = useContext(LoggedContext);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(()=>{
    function globalLogger(){
      if (getCookie('jwt')){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    }
    globalLogger()
 }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const buttonRefs = useRef([]);

  const handleLogOut = ()=>{
    setIsLogin(false);
    deleteCookie('jwt');

  }

  const data = [
    {
      id: 1,
      name: "EVENTS",
      link: "/events",
      type: "A",
    },
    { id: 2, name: "GALLERY", link: "/gallery", type: "B" },
    { id: 3, name: "SPONSORS", link: "/sponsors", type: "C" },
    { id: 4, name: "TEAMS", link: "/teams", type: "D" },
    { id: 5, name: "CA PORTAL", link: "/caportal", type: "E" },
    { id: 6, name: "AUDIENCE PORTAL", link: "/audience", type: "F" },
  ];

  const deskdata = [
    {
      id: 11,
      name: "EVENTS",
      link: "/events",
    },
    { id: 12, name: "GALLERY", link: "/gallery" },
    { id: 13, name: "SPONSORS", link: "/sponsors" },
    { id: 14, name: "TEAMS", link: "/teams" },
    { id: 15, name: "CA PORTAL", link: "/caportal" },
    { id: 16, name: "AUDIENCE PORTAL ", link: "/audience" },
  ];

  const componentMap = {
    A: FaCalendarCheck,
    B: FaRegImages,
    C: FaDollarSign,
    D: FaUsers,
    E: FaUserTie,
    F: FaUserGroup,
  };
  
  return (
    <div className="flex justify-between items-center py-4 px-4 font-cR w-full bg-transparent absolute z-40 md:px-10 md:py-10">
      <div className="flex items-center font-cM text-xl">
        <Link to="/">
          <img src={goonjLogo} className="flex mx-auto w-16" alt="Goonj Logo" />
        </Link>
      </div>
      <div className="flex items-center  md:hidden">
        <div className="">
          {isLogin ? (
            <div className="flex items-center">
              <Link to="/" onClick={()=>{
                toggleSidebar();
                handleLogOut();
              }}>
                <LoginButton text="LOGOUT" />
              </Link>
              <Link to="/profile">
                <div className="w-12 h-12">
                  <img src={profile} />
                </div>
              </Link>
            </div>
          ) : (
            <Link to="/googleauth" onClick={toggleSidebar}>
              <LoginButton text="LOGIN" />
            </Link>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showSidebar ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="hidden md:flex">
        <ul className="flex justify-between text-center gap-6 text-white text-xl items-center">
          <li>
            <Link to="/">HOME</Link>
          </li>
          {deskdata.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                <button
                  key={item.id}
                  ref={(ref) => (buttonRefs.current[item.id] = ref)}
                >
                  {item.name}
                </button>
              </Link>
            </li>
          ))}
          {isLogin ? (
            <div className="flex items-center">
              <li>
                {/* <Link to="/" onClick={toggleSidebar}> */}
                <Link to="/" onClick={()=>{
                  toggleSidebar();
                  handleLogOut();
                }}>
                  <LoginButton text="LOGOUT" />
                </Link>
              </li>
              <Link to="/profile">
                <div className="w-12 h-12">
                  <img src={profile} />
                </div>
              </Link>
            </div>
          ) : (
            <li>
              <Link to="/googleauth" onClick={toggleSidebar}>
                <LoginButton text="LOGIN" />
              </Link>
            </li>
          )}
        </ul>
      </div>
      {showSidebar && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden">
          <div className="absolute top-0 right-0 h-screen w-64 bg-EventBG shadow-lg">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleSidebar}
                className="text-white hover:text-gray-800 focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <ul className="text-white">
                <li className="mb-4 flex gap-3">
                  <RiHome2Line className="mt-1" />
                  <Link to="/" onClick={toggleSidebar}>
                    {" "}
                    HOME
                  </Link>
                </li>
                {data.map((item) => {
                  const Component = componentMap[item.type];
                  return (
                    <li className="mb-4 flex gap-3" key={item.id}>
                      <Component className="mt-1" />
                      <Link to={item.link} onClick={toggleSidebar}>
                        <button
                          key={item.id}
                          ref={(ref) => (buttonRefs.current[item.id] = ref)}
                        >
                          {item.name}
                        </button>
                      </Link>
                    </li>
                  );
                })}
                {isLogin ? (
                  <li>
                    {/* <Link to="/" onClick={toggleSidebar}> */}
                    <Link to="/" onClick={()=>{
                      toggleSidebar();
                      handleLogOut();
                    }}>
                      <LoginButton text="LOGOUT" />
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/googleauth" onClick={toggleSidebar}>
                      <LoginButton text="LOGIN" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
