import aerocraft from "../assets/Images/Registration_Rocket.webp";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie} from "../utils/Cookies";
import LoggedContext from "../main";
import { VKYRequest } from "../utils/requests";
import {indianStates} from "../data/collegeData.js";
import { UserContext } from "../main";

import desktop_bg_image from "../assets/Images/RegSuccess_Astro.webp";



const CARegisterPage = () => {
  const {userData, setUserData} = useContext(UserContext);
  const { setIsLogin } = useContext(LoggedContext);
  const [isregister, setIsregister] = useState(false);
  const [selectedState, setSelectedState] = useState(" ");
const [selectedCity, setSelectedCity] = useState(" ");
const [selectedCollege, setSelectedCollege] = useState('');
const handleChange = (e, type) => {
  if (type === 'state') {
    setSelectedState(e.target.value);
    // Reset city and college when state changes
    setSelectedCity('');
    setSelectedCollege('');
  } else if (type === 'city') {
    setSelectedCity(e.target.value);
    // Reset college when city changes
    setSelectedCollege('');
  } else if (type === 'college') {
    setSelectedCollege(e.target.value);
  }
  setUserData({ ...userData, [type]: e.target.value });
};
  const [caDetail, setCaDetails] = useState({});

  const submitForm = async (e) => {
    e.preventDefault();
    try {


      const response = await VKYRequest('post', '/auth/signup',{...userData, role: 'CA'});

      setCookie('jwt', response.data.token, import.meta.env.VITE_JWT_EXPIRES_IN);
      setIsLogin(true);
      setIsregister(true);

      setCaDetails(response.data.userCreated);

    } catch (error) {
      console.log(error);
    }
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
                      defaultValue={userData?.name}
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
                      defaultValue={userData?.email}
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
                    <select 
                 className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                 onChange={(e) => handleChange(e, "state")}
                 value={selectedState}
                 >
                       <option value="">Select State</option>
                  {indianStates.map((state, index) => (
                    <option key={index} value={state.state}>
                      {state.state}
                    </option>
                  ))}
                      </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                  <div className="flex flex-col sm:w-5/12">
                    <label className="font-cR mb-2 font-light text-sm">
                      College City{" "}
                    </label>
                    <select
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                  onChange={(e) => handleChange(e, "city")}
                  value={selectedCity}
                >
                 <option value="">Select City</option>
          {selectedState &&
            indianStates
              .find((state) => state.state === selectedState)
              ?.district.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
                </select>
                  </div>
                  <div className="flex flex-col sm:w-5/12">
                    <label className="font-cR mb-2 font-light text-sm">
                      College Name
                    </label>
                    <select
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                  onChange={(e) => handleChange(e, "college")}
                  value={selectedCollege}
                >
                  <option value="">Select College</option>
  {selectedState &&
    indianStates
      .find((state) => state.state === selectedState)
      ?.college.map((college, index) => (
        <option key={index} value={college}>
          {college}
        </option>
      ))}
</select>
                  </div>
                </div>
                <div className="flex justify-center my-4 pb-2">
                  <button className="btn" type="submit" onClick={ submitForm}>
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
                <span className=""> {caDetail?.name} </span>
              </p>
            </div>
            <div className="sm:flex text-center justify-center">
              <p className="">GOONJ CA ID</p>
              <p className=""> {caDetail?.generated_id} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CARegisterPage;
