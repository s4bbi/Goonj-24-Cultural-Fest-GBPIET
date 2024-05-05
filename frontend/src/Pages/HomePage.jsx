import CountdownTimer from "../components/CountdownTimer.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import vidHome from "../assets/Videos/HeroBG.webm";
import orbitHome from "../assets/Images/Orbits.png";
import AboutHome from "../assets/Images/AboutMoon_Img.webp";
import EventsGlobe from "../assets/Images/Events_Globe.webp";
import GalleryGlobe from "../assets/Images/Gallery_Globe.webp";
import SponsorsGlobe from "../assets/Images/Sponsors_Globe.webp";
import TeamsGlobe from "../assets/Images/Teams_Globe.webp";
import CAPortal_Globe from "../assets/Images/CAPortal_Globe.webp";
import audienceGlobe from "../assets/Images/audienceGlobe.webp";
import orbitSun from "../assets/Videos/orbitSun.webm";
import viksit from "../assets/Images/viksit_bharat.svg";
import saturnImage from "../assets/Images/Home_Saturn_Img.webp";
import director from "../assets/Images/peopleImages/director.webp";
import sac_oic from "../assets/Images/peopleImages/sac-oic.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const endTime = "2024-05-27T00:00:00";

  return (
    <div className="w-full">
      <div>
        <div className="flex flex-col justify-center absolute sm:w-full h-screen z-10 w-full mx-auto">
          <img
            src={viksit}
            className="w-32 sm:w-44 mx-auto sm:ml-48 sm:flex sm:justify-start sm:-mb-24"
            alt="Viksit Bharat"
          />
          <div className="xyz">
            <h1 className="font-samarkan text-white text-[90px] md:text-[180px] lg:text-[325px] text-center drop-shadow-2xl select-none">
              GOONJ 24
            </h1>
          </div>

          <div className="flex flex-col gap-1 items-center sm:flex-row justify-between">
            <h1 className="text-lg sm:text-2xl text-white font-cM text-left sm:-mt-10 sm:ml-48">
              27th May - 28th May
            </h1>
            <h2 className="text-sm sm:text-2xl text-white font-cM text-right sm:mr-48 sm:-mt-10">
              VIKSIT BHARAT @2047: VOICE OF YOUTH
            </h2>
          </div>
        </div>
        <div>
          <video
            src={vidHome}
            autoPlay
            muted
            loop
            className="w-full h-screen object-cover"
          ></video>
        </div>
      </div>
      <div className="bg-EventBG pb-12 w-full h-full">
        <CountdownTimer endTime={endTime} className="w-full h-2/6 bg-inherit" />
        <div className="pt-12">
          <div className="absolute w-full font-cSB">
            <div className="flex text-white sm:mx-44 ml-5 pt-1 sm:pt-0">
              <Link to="/events">
                <div className="flex flex-col items-center sm:text-2xl text-sm">
                  <p>EVENTS</p>
                  <img
                    src={EventsGlobe}
                    className="w-20 sm:w-32 xl:w-56 hover:scale-110 ease-in-out duration-200"
                    alt="Events Globe"
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-end text-white mx-72  sm:pl-72 md:mt-10 lg:mt-12 xl:mt-6 ">
              <Link to="/gallery">
                <div className="flex flex-col items-center text-sm sm:text-2xl -mt-4">
                  <p>GALLERY</p>
                  <img
                    src={GalleryGlobe}
                    className="w-12 sm:w-32 xl:w-52 2xl:w-72 hover:scale-110 ease-in-out duration-200 "
                    alt="Gallery Globe"
                  />
                </div>
              </Link>
            </div>
            <div className="flex text-white sm:mx-40 -mt-4 sm:-mt-32 ml-28  sm:ml-80 md:ml-56 md:-mt-0 lg:mt-0 lg:ml-56 xl:ml-72 ">
              <Link to="/sponsors">
                <div className="flex flex-col items-center sm:text-2xl text-sm sm:-mt-0">
                  <p>SPONSORS</p>
                  <img
                    src={SponsorsGlobe}
                    className="sm:w-32 w-12 xl:w-52 hover:scale-110 ease-in-out duration-200"
                    alt="Sponsors GLobe"
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-center text-white mr-2 mt-0 sm:mr-4 sm:-mt-4 xl:-mt-12 ">
              <div className="flex flex-col items-center text-2xl w-1/2">
                <video
                  src={orbitSun}
                  autoPlay
                  muted
                  loop
                  className="sm:w-20 w-6"
                ></video>
              </div>
            </div>
            <div className="flex justify-between w-10/12 mx-auto  lg:mt-16 xl:mt-32 md:mt-12">
              <div className="flex  text-white ">
                <Link to="/caportal">
                  <div className="flex flex-col items-center text-sm sm:text-2xl mt-5 sm:mt-0  ">
                    <p>CA PORTAL</p>
                    <img
                      src={CAPortal_Globe}
                      className="w-16 sm:w-32  xl:w-56 hover:scale-110 ease-in-out duration-200"
                      alt="CAPortal Globe"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex justify-end text-white mt-6 sm:mt-8">
                <Link to="/teams">
                  <div className="flex flex-col items-center text-sm sm:text-2xl">
                    <p>TEAMS</p>
                    <img
                      src={TeamsGlobe}
                      className="sm:w-32 w-16 xl:w-56 hover:scale-110 ease-in-out duration-200"
                      alt="Teams Globe"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center text-white -mt-2  mr-10 md:mt-16 lg:mt-20 xl:mt-4">
              <Link to="/audience">
                <div className="flex flex-col items-center text-sm sm:text-2xl">
                  <p>AUDIENCE PORTAL</p>
                  <img
                    src={audienceGlobe}
                    className="sm:w-28 w-14 xl:w-56 hover:scale-110 ease-in-out duration-200"
                    alt="Teams Globe"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="py-10">
            <img src={orbitHome} className="w-full" alt="Orbit Home" />
          </div>
        </div>
        <div>
          <div className="text-white h-full pt-10 mx-4">
            <div
              className="flex flex-col w-10/12 mx-auto sm:flex-row justify-center gap-5 pb-20"
              data-aos="fade-up"
            >
              <div className="flex flex-col justify-center items-center font-cM">
                <img
                  src={director}
                  className="w-32 sm:w-48 mb-4 rounded-xl border-b-4 border-[#5f43b2]"
                  alt="GBPIET Director"
                />
                <p className="text-white">Dr. V. N. Kala</p>
                <p>
                  <span className="text-[#5f43b2]">Director, </span>
                  <span className="text-white">GBPIET</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 font-cM items-center sm:w-9/12 sm:items-start mx-5">
                <span className="text-[#5f43b2]">Director's Message:</span>
                <p className="text-white text-center sm:text-left">
                  With boundless excitement, I welcome you to Goonj , our
                  vibrant annual cultural fest! Organized by our dedicated
                  students and management, Goonj is a celebration of creativity
                  and unity. Join us for thrilling competitions, captivating
                  performances, and unforgettable memories. Let's make this fest
                  a success together!
                </p>
              </div>
            </div>

            <div
              className="flex flex-col w-10/12 mx-auto sm:flex-row justify-center gap-5 pb-20"
              data-aos="fade-up"
            >
              <div className="flex flex-col justify-center items-center font-cM sm:order-2">
                <img
                  src={sac_oic}
                  className="w-32 sm:w-48 mb-4 rounded-xl border-b-4 border-[#5f43b2]"
                  alt="Student Activity Cell Officer in Charge"
                />
                <p className="text-white">Dr. Priti Dimri</p>
                <p>
                  <span className="text-[#5f43b2]">OiC, SAC</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 font-cM items-center sm:w-9/12 sm:items-start mx-5 sm:order-1">
                <span className="text-[#5f43b2]">SAC OIC Message:</span>
                <p className="text-white text-center sm:text-left">
                  Namaste, we invite you to Goonj – a wonderful showcase of our
                  students' talents and creativity. Crafted with love and
                  dedication by our amazing students, this festival is a
                  celebration of unity, culture, and dreams coming to life. Come
                  join us, embrace the magic, and make unforgettable memories
                  together! Let's make this celebration one to remember, filled
                  with laughter, joy, and the spirit of our vibrant student
                  community!
                </p>
              </div>
            </div>

            <div
              className="text-center font-cuda text-4xl sm:text-7xl p-6"
              data-aos="fade-up"
            >
              <h1 className="">ABOUT</h1>
              <p className="font-cR sm:text-base text-xs font-bold">
                GBPIET's CULTURAL FEST
              </p>
            </div>
            <div className="font-cM text-sm sm:mx-16 sm:text-lg">
              <div className="flex flex-col">
                <div className="">
                  <img
                    src={AboutHome}
                    className="w-20 sm:w-56"
                    alt="About Home"
                  ></img>
                </div>
                <div className="border-l-2  border-[#5f43b2] pl-5 border-solid z-20 md:text-lg">
                  <h1 className="sm:w-[38%]" data-aos="fade-up">
                    Welcome to "<span className="text-[#5f43b2] ">Goonj</span>",
                    where the vibrant tapestry of cultures converges in a
                    celebration of diversity and unity! Goonj, our annual
                    college cultural fest, is a kaleidoscope of creativity,
                    talent, and traditions that come together to create an
                    unforgettable experience.
                  </h1>
                </div>
              </div>
              <div className="flex justify-center items-center pt-10 ">
                <img
                  src={saturnImage}
                  className="sm:w-[450px] w-56 absolute mt-8 hidden sm:block"
                  alt="Saturn Image"
                ></img>
              </div>
              <div className="flex flex-col pt-10 sm:pt-0">
                <div className="flex flex-row-reverse w-full">
                  <img
                    src={AboutHome}
                    className="w-20 sm:w-56"
                    alt="About Home"
                  />
                </div>
                <div className="border-r-2  border-[#5f43b2] pr-5 border-solid flex justify-end md:text-lg">
                  <h1 className="sm:w-[38%] text-end" data-aos="fade-up">
                    <span className="text-[#5f43b2] z-20">Goonj's</span> events
                    are a high-spirited mix of dance, music, discussions, and
                    global flavours. From thrilling competitions to artistic
                    exhibitions, each moment is a burst of creativity and
                    cultural celebration. Join us for a dynamic experience that
                    transcends boundaries!
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center pt-10 sm:pt-0">
                  <img
                    src={AboutHome}
                    className="w-20 sm:w-56"
                    alt="About Home"
                  ></img>
                </div>
                <div
                  className="border-l-2  border-[#5f43b2] pl-5 border-solid pt-2 flex md:text-lg"
                  data-aos="fade-up"
                >
                  <h1 className="sm:w-[38%]">
                    <span className="text-[#5f43b2]">Goonj</span> is not just a
                    fest; it's a symbol of unity amidst diversity. It serves as
                    a powerful platform for cultural exchange, fostering
                    understanding and connections that transcend boundaries.
                    Through vibrant performances and engaging discussions, Goonj
                    promotes inclusivity, friendship, and the celebration of our
                    shared humanity. It's not just an event; it's a vital
                    expression of our collective identity and values.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
