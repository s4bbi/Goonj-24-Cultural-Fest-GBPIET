import React, { Suspense, createContext, useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "../src/components/Header.jsx";
import EventDetail from "../src/Pages/EventDetail.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "../src/Pages/HomePage.jsx";
import LoginPage from "../src/Pages/LoginPage.jsx";
import Events from "../src/Pages/Events.jsx";
import Gallery from "../src/Pages/Gallery.jsx";
import Sponsors from "../src/Pages/Sponsors.jsx";
import CAPortal from "../src/Pages/CAPortal.jsx";
import Teams from "../src/Pages/Teams.jsx";
import Profile from "../src/Pages/Profile.jsx";
import CARegisterPage from "./Pages/CARegisterPage.jsx";
import AudiencePortal from "./Pages/AudiencePortal.jsx";
import Loader from "./components/Loader.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import GoogleAuth from "./Pages/GoogleAuth.jsx";
import { getCookie } from "./utils/Cookies.js";

const LoggedContext = createContext();
export default LoggedContext;


const AppComponent = () => {

  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    function globalLogger(){
      if (getCookie('jwt')){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    }
    globalLogger()
 }, []);


  return (
    <div className="selection:bg-[#5F43B2]">
      <LoggedContext.Provider value={{isLogin, setIsLogin}}>
        <Header />
        <Outlet />
        <Footer />
      </LoggedContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/sponsors",
        element: <Sponsors />,
      },
      {
        path: "/caportal",
        element: <CAPortal />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/events/:id",
        element: <EventDetail />,
      },
      {
        path: "/caregister",
        element: <CARegisterPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/googleauth",
        element: <GoogleAuth />,
      },
      {
        path: "/audience",
        element: <AudiencePortal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeedInsights />
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
