import { Link } from "react-router-dom"
import "../index.css"

const Footer = () => {
  return (
    <div className="px-6 bg-EventBG font-cM text-lg">

        <div className="w-full bg-[url('src/assets/Images/Moon_Img.webp')] p-6 bg-cover object-contain">
          <div className="text-white flex justify-between ">
              <div>
                GOONJ 20
                <span className="text-violet-700">24</span>
              </div>
              <div className="flex gap-10 font-cM text-wider">
                <div>
                    <h1><Link to="/events">Events</Link></h1>
                    <h1><Link to="/">About</Link></h1>
                </div>
                <div>
                    <h1><Link to="/gallery">Gallery</Link></h1>
                    <h1><Link to="/sponsors">Sponsors</Link></h1>
                </div>
                <div>
                    <h1><Link to="/teams">Teams</Link></h1>
                    <h1><Link to="/caportal">CA Portal</Link></h1>
                </div>
              </div>
          </div>
          <div>
            <h1 className="text-white w-4/12 pb-8 font-cR">A dynamic cultural fest uniting traditions and modern expressions. Join us for a fusion of dance, music, art, and global flavours. Celebrate diversity, forge connections, and make lasting memories at Goonj!</h1>
          </div>
          <div className="border-b border-white border-[3px] "></div>
          <div className="py-6 flex justify-between">
            <h1 className="text-white">@Goonj 2024. All rights reserved</h1>
            <div className="flex gap-6 text-white">
                <h1>Connect with us on:</h1>
                <img src="src/assets/Images/youtubeIcon.png" className="h-6"></img>
                <img src="src/assets/Images/linkedinIcon.png" className="h-6"></img>
                <img src="src/assets/Images/instagramIcon.png" className="h-6"></img>
                <img src="src/assets/Images/facebookIcon.png" className="h-6"></img>
            </div>
          </div>
      </div>
    </div>
    )
}

export default Footer