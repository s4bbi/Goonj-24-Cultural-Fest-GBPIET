import aerocraft from "../assets/Images/Registration_Rocket.webp";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";

import { setCookie, getCookie } from "../utils/Cookies";
import LoggedContext from "../main";

const CARegisterPage = () => {
  const {setIsLogin} = useContext(LoggedContext);

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
    role: "CA"
  });


  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };


  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/auth/signup",
        formData
      )

      setCookie('jwt', response.data.token, import.meta.env.VITE_JWT_EXPIRES_IN);

      if (getCookie('jwt')){
        setIsLogin(true);

      }else{
        setIsLogin(false);

      }

      if (response.data.status === "success") {
        navigate("/profile", { state: response.data.userCreated });
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="bg-EventBG h-fit flex justify-center pt-8">
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
  );
};

export default CARegisterPage;
