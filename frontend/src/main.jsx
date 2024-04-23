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
import ProtectedComponent from "./components/ProtectedRoutes.jsx";

const LoggedContext = createContext();
export default LoggedContext;

export const UserContext = createContext();

const loggedInRoutes = [
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
    element:<ProtectedComponent>
      <Events/>
    </ProtectedComponent>,
  },
  {
    path: "/gallery",
    element: <ProtectedComponent>

      <Gallery />
    </ProtectedComponent>
  },
  {
    path: "/sponsors",
    element: <ProtectedComponent>
      <Sponsors />
    </ProtectedComponent> ,
  },
  {
    path: "/caportal",
    element: <CAPortal />,
  },
  {
    path: "/teams",
    element: <ProtectedComponent>

      <Teams />
    </ProtectedComponent>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/events/:id",
    element: 
    <ProtectedComponent>

      <EventDetail />
    </ProtectedComponent>,
  },
  {
    path: "/caregister",
    element: <CARegisterPage />,
  },
  {
    path: "/profile",
    element: <ProtectedComponent>

      <Profile />
    </ProtectedComponent>,
  },
  {
    path: "/googleauth",
    element: <GoogleAuth />,
  },
  {
    path: "/audience",
    element: <AudiencePortal />,
  }
]


const AppComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    name: undefined,
    email: undefined,
    googleSubjectId: undefined,
    img: undefined,
    pNum: undefined,
    state: undefined,
    city: undefined,
    college: undefined
  });


  useEffect(() => {
    function globalLogger() {
      if (getCookie('jwt')) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
    globalLogger();
  }, []);

  // const routes = isLogin ? loggedInRoutes : loggedOutRoutes;

  return (
    <div className="selection:bg-[#5F43B2] app">
      <LoggedContext.Provider value={{ isLogin, setIsLogin }}>
      <UserContext.Provider value={{userData, setUserData}}>
        <Header />
        <Outlet/>
        <Footer />
      </UserContext.Provider>
      </LoggedContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: loggedInRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeedInsights />
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
