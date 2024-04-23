import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import LoginAstro from "../assets/Images/LoginAstronaut.png";
import { jwtDecode } from "jwt-decode";
import { useEffect, useContext } from "react";
import { VKYRequest } from "../utils/requests";
import { useNavigate, useLocation } from "react-router-dom";
import { setCookie, deleteCookie } from "../utils/Cookies";
import LoggedContext from "../main";
import { UserContext } from "../main";

const GoogleAuth = () => {
  const { setIsLogin } = useContext(LoggedContext);

  const { userData, setUserData } = useContext(UserContext);

  const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const navigate = useNavigate();
  const location = useLocation();
  const handleSuccess = (credentialResponse) => {
    try {
      let decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);
      setUserData({
        name: decoded.name,
        email: decoded.email,
        img: decoded.picture,
        googleSubjectId: decoded.sub,
      });
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("sent login request");
      try {
        const response = await VKYRequest("post", "/auth/login", userData);

        console.log(response);
        setCookie(
          "jwt",
          response.data.token,
          import.meta.env.VITE_JWT_EXPIRES_IN
        ); // storing cookies from response in cookies

        setIsLogin(true);

        navigate("/profile");
      } catch (err) {
        if (err.response.status === 401) {
          const referrer = location.state && location.state.referrer;
          if (referrer === "/caportal") {
            navigate("/caregister"); // Redirect to caregister if the referrer is '/caportal'
          } else {
            navigate("/login"); // Redirect to profile page for other referrers
          }
        } else if (err.response.status!==400) {
          deleteCookie("jwt");
          setIsLogin(false);
          setUserData({
            name: undefined,
            email: undefined,
            googleSubjectId: undefined,
            img: undefined,
            pNum: undefined,
            state: undefined,
            city: undefined,
            college: undefined,
          });
        }
      }
    };

    fetchData();
  }, [userData.email]);

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="bg-EventBG h-fit flex justify-center pt-8">
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
        <div className="p-10 w-1/3 md:w-1/2 flex mx-auto justify-center items-center">
          <GoogleOAuthProvider clientId={clientID}>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
