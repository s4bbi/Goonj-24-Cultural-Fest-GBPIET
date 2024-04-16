import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import LoginAstro from "../assets/Images/LoginAstronaut.png";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const GoogleAuth = () => {
  const [userData, setUserData] = useState({
    name: undefined,
    email: undefined,
  });

  const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();
  const handleSuccess = async (credentialResponse) => {
    try {
      let decoded = jwtDecode(credentialResponse.credential);
      setUserData({
        name: decoded.name,
        email: decoded.email,
      });
      console.log(userData);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/auth/login",
          {
            email: userData.email,
          }
        );
      
        if (response.data.status === "success") {
          console.log(response.data);
          navigate("/profile", { state: response.data.userCreated });
      }} 
      catch (err) {
        if (err.response.status === 401) {
          navigate("/login", { state: userData });
        } else {
          console.log(err);
          console.error("Error checking email existence");
        }
      }
    };
    fetchData();
  }, [userData]);

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="bg-EventBG h-full flex justify-center pt-8">
      <div className="hidden sm:flex flex-col justify-end w-5/12">
        <img src={LoginAstro} alt="Astronaut" className="w-9/12" />
      </div>
      <div className="sm:w-6/12 my-24 sm:mr-20 mx-2 rounded-3xl bg-cover bg-center bg-no-repeat text-white bg-LoginBG">
        <h1 className="font-cuda text-2xl sm:text-3xl flex justify-center py-8">
          USER SIGNUP
        </h1>
        <h1 className="font-cuda text-xl flex justify-center">
          Google Sign up
        </h1>
        <div className="p-10 w-1/2 flex mx-auto">
          <GoogleOAuthProvider clientId={clientID}>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;


// TODO 1. login button disable 
// 2. payment gateway
// 3. cookie set 
// 4. event routes
