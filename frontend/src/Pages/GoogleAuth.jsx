import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import LoginAstro from "../assets/Images/LoginAstronaut.png";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate ,useLocation } from "react-router-dom";

const GoogleAuth = () => {
  const [userData, setUserData] = useState({
    name: undefined,
    email: undefined
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status


  const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  
  const navigate = useNavigate();
  const location = useLocation();
  const handleSuccess = async (credentialResponse) => {
    try {

      let decoded = jwtDecode(credentialResponse.credential);
      setUserData({
        name: decoded.name,
        email: decoded.email
      });
      console.log(userData)
    }

    catch (err) {
       console.log("Error",err)

    }

  };

  useEffect(() => {
    const fetchData =async ()=>{
      try{
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/login", {
          email: userData.email,

        });
        console.log()
        if (response.data.status === 'success') {
          console.log(response.data)
          setIsLoggedIn(true); // Set login status to true
          const referrer = location.state && location.state.referrer;
          console.log(referrer)
          if (referrer === '/caportal') {
            navigate('/profile', { state: response.data.userCreated }); // Redirect to caregister if the referrer is '/caportal'
          } else {
            navigate('/profile', { state: response.data.userCreated }); // Redirect to profile page for other referrers
          }
        }
  
      }
      catch(err){
        if (err.response.status === 401) {
          const referrer = location.state && location.state.referrer;
          if (referrer === '/caportal') {
            navigate('/caregister', { state: userData }); // Redirect to caregister if the referrer is '/caportal'
          } else {
            navigate('/login', { state: userData }); // Redirect to profile page for other referrers
          }
        } else {
          console.log(err);
          console.error("Error checking email existence");
        }
      }
    }
    fetchData()


  }, [isLoggedIn, userData])



  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="bg-EventBG h-fit flex justify-center pt-8">
      <div className="hidden sm:flex flex-col justify-end w-5/12">
        <img src={LoginAstro} alt="Astronaut" className="w-9/12" />
      </div>
      <div className="sm:w-6/12 my-24 sm:mr-20 mx-2 rounded-3xl bg-cover bg-center bg-no-repeat text-white  bg-LoginBG">
        <h1 className="font-cuda text-3xl flex justify-center py-8">USER SIGNUP</h1>
        <h1 className="font-cuda text-xl flex justify-center">Google Sign up</h1>
        <div className="p-10">
          <GoogleOAuthProvider clientId={clientID}>
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
