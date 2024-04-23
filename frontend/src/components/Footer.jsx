import { Link } from "react-router-dom";
import "../index.css";
import ytIcon from "../assets/Images/youtubeIcon.png";
import igIcon from "../assets/Images/instagramIcon.png";
import liIcon from "../assets/Images/linkedinIcon.png";
import xIcon from "../assets/Images/twitterIcon.png";

const Footer = () => {
  return (
    <div className="px-4 bg-EventBG font-cM text-lg md:px-6">
      <div className="w-full p-4 md:p-6 bg-moonImg bg-cover object-contain">
        <div className="text-white flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p>
              GOONJ 20<span className="text-violet-700">24</span>
            </p>
          </div>
          <div className="flex gap-4 sm:gap-10 font-cM justify-between">
            <div>
              <h1>
                <Link to="/events">Events</Link>
              </h1>
              <h1>
                <Link to="/">About</Link>
              </h1>
            </div>
            <div>
              <h1>
                <Link to="/gallery">Gallery</Link>
              </h1>
              <h1>
                <Link to="/sponsors">Sponsors</Link>
              </h1>
            </div>
            <div>
              <h1>
                <Link to="/teams">Teams</Link>
              </h1>
              <h1>
                <Link to="/caportal">CA Portal</Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="border-b border-white border-[3px] my-6"></div>
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:gap-2 md:flex items-center md:items-start">
            <span className="text-white mb-4 md:mb-0">
              @Goonj 2024. All rights reserved
            </span>
            <Link to="https://docs.google.com/document/d/18pMLKk-fZLpVLCXkrFziC8W-dTyusZPkl9AZ5abZVrY/edit?usp=sharing" target="blank">
              <span className="text-white mb-4 md:mb-0">Privacy Policy</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex gap-6 text-white">
            <h1>Connect with us on:</h1>
            <div className="flex justify-between">
              <Link
                to="https://www.youtube.com/@OFFICIALSACGBPIET/"
                target="blank" className="link"
              >
                <img src={ytIcon} alt="YouTube" className="h-6" />
              </Link>
              <Link to="https://twitter.com/gbpietpauri" target="blank">
                <img src={xIcon} alt="X" className="h-6" />
              </Link>
              <Link to="https://www.instagram.com/sacgbpiet/" target="blank">
                <img src={igIcon} alt="Instagram" className="h-6" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/goonj-gbpec-pauri/"
                target="blank"
              >
                <img src={liIcon} alt="LinkedIn" className="h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
