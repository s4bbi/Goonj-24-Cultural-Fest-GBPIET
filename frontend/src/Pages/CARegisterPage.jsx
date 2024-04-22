import aerocraft from "../assets/Images/Registration_Rocket.webp";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../utils/Cookies";
import LoggedContext from "../main";
import { VKYRequest } from "../utils/requests";
import desktop_bg_image from "../assets/Images/RegSuccess_Astro.webp";
const CARegisterPage = () => {
  const { setIsLogin } = useContext(LoggedContext);
  const [isregister, setIsregister] = useState(false);
  const location = useLocation();
  const receivedUserData = location.state;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: receivedUserData?.name,
    email: receivedUserData?.email,
    pNum: "",
    state: "",
    city: "",
    college: "",
    role: "CA",
  });

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await VKYRequest("post", "/auth/signup", formData);

      setCookie(
        "jwt",
        response.data.token,
        import.meta.env.VITE_JWT_EXPIRES_IN
      );

      if (getCookie("jwt")) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }

      if (response.data.status === "success") {
        navigate("/profile", { state: response.data.userCreated });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cadetail = {
    name: "Yashpreet Singh",
    caID: "123654789",
  };
  return (
    <div className="bg-EventBG ">
      {!isregister && (
        <div className="h-fit flex justify-center pt-8">
          {" "}
          <div className="sm:w-6/12 my-24 sm:mr-20 mx-2 rounded-3xl bg-cover bg-center bg-no-repeat text-white bg-LoginBG">
            <h1 className="font-cuda text-2xl sm:text-4xl flex justify-center py-8">
              Registration
            </h1>
            <div className="sm:px-16 px-10">
              <form action="">
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                  <div className="flex flex-col w-full sm:w-5/12">
                    <label className="font-cR mb-2 font-light text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="YourName"
                      defaultValue={receivedUserData?.name}
                      disabled
                      className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full sm:w-5/12">
                    <label className="font-cR mb-2 font-light text-sm">
                      Your Email
                    </label>
                    <input
                      type="text"
                      placeholder="E-Mail ID"
                      defaultValue={receivedUserData?.email}
                      disabled
                      className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                  <div className="flex flex-col sm:w-5/12">
                    <label className="font-cR mb-2 text-sm">
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+91"
                      onChange={(e) => handleChange(e, "pNum")}
                      className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                    />
                  </div>
                  <div className="flex flex-col sm:w-5/12">
                    <label className="font-cR mb-2 font-light text-sm">
                      College State
                    </label>
                    <input
                      type="text"
                      placeholder="State"
                      onChange={(e) => handleChange(e, "state")}
                      className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                  <div className="flex flex-col sm:w-5/12">
                    <label className="font-cR mb-2 font-light text-sm">
                      College City{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="College City"
                      onChange={(e) => handleChange(e, "city")}
                      className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                    />
                  </div>
                  <div className="flex flex-col sm:w-5/12">
                    <label className="font-cR mb-2 font-light text-sm">
                      College Name
                    </label>
                    <input
                      type="text"
                      placeholder="College Name"
                      onChange={(e) => handleChange(e, "college")}
                      className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-center my-4 pb-2">
                  <button className="btn" type="submit" onClick={submitForm}>
                    <span className="px-16">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden sm:flex flex-col justify-end w-5/12">
            <img src={aerocraft} alt="Astronaut" className="w-9/12" />
          </div>
        </div>
      )}
      {isregister && (
        <div className="h-screen flex justify-center items-center bg-bg_planet sm:bg-none">
          <div className="hidden sm:flex sm:my-10 w-1/3justify-end items-end ">
            <img src={desktop_bg_image} className="mt-64" />
          </div>
          <div className="h-96 w-96 sm:w-2/3 mx-5 border-1 border-[#5F43B2] my-10  sm:my-5 bg-purple-900 rounded-[42px] bg-clip-padding backdrop-filter bg-opacity-[0.4] touch-none md:px-16 md:py-20 px-12 py-14 text-center text-white flex justify-between flex-col">
            <h1 className="text-2xl font-cuda ">Registration Successful</h1>
            <div className="sm:flex text-center justify-center">
              <p className=" text-2xl ">WELCOME ONBOARD</p>
              <p>
                <span className=""> {cadetail.name} </span>
              </p>
            </div>
            <div className="sm:flex text-center justify-center">
              <p className="">GOONJ CA ID</p>
              <p className=""> {cadetail.caID} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CARegisterPage;
