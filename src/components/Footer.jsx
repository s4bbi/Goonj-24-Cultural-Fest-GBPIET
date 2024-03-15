import { Link } from "react-router-dom";
import "../index.css";
import ytIcon from "../assets/Images/youtubeIcon.png"
import igIcon from "../assets/Images/instagramIcon.png"
import liIcon from "../assets/Images/linkedinIcon.png"
import fbIcon from "../assets/Images/facebookIcon.png"

const Footer = () => {
  return (
    <div className="px-4 bg-EventBG font-cM text-lg md:px-6">
      <div className="w-full p-4 md:p-6 bg-moonImg bg-cover object-contain">
        <div className="text-white flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0 text-center">
            <p>
            GOONJ 20<span className="text-violet-700">24</span>
            </p>
          </div>
          <div className="flex md:flex-row gap-4 md:gap-10 font-cM text-wider">
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
        <div className="mt-4">
          <h1 className="text-white w-full md:w-4/12 pb-8 font-cR">
            A dynamic cultural fest uniting traditions and modern expressions.
            Join us for a fusion of dance, music, art, and global flavours.
            Celebrate diversity, forge connections, and make lasting memories at
            Goonj!
          </h1>
        </div>
        <div className="border-b border-white border-[3px]"></div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-white mb-4 md:mb-0">
            @Goonj 2024. All rights reserved
          </h1>
          <div className="flex gap-6 text-white">
            <h1>Connect with us on:</h1>
            <img
              src={ytIcon}
              alt="YouTube"
              className="h-6"
            />
            <img
              src={liIcon}
              alt="LinkedIn"
              className="h-6"
            />
            <img
              src={igIcon}
              alt="Instagram"
              className="h-6"
            />
            <img
              src={fbIcon}
              alt="Facebook"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;