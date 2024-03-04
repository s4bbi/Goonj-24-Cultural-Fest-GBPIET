import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from '../src/components/Header.jsx'
import EventDetail from "../src/Pages/EventDetail.jsx"
import Footer from "../src/components/Footer.jsx"
import HomePage from '../src/Pages/HomePage.jsx'
import LoginPage from '../src/Pages/LoginPage.jsx'
import Events from '../src/Pages/Events.jsx'
import Gallery from '../src/Pages/Gallery.jsx'
import Sponsors from '../src/Pages/Sponsors.jsx'
import CAPortal from '../src/Pages/CAPortal.jsx'
import Teams from '../src/Pages/Teams.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const AppComponent = () => {
  return (
    <div className='selection:bg-[#5F43B2]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/events',
        element: <Events />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/sponsors',
        element: <Sponsors />
      },
      {
        path: '/caportal',
        element: <CAPortal />
      },
      {
        path: '/teams',
        element: <Teams />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/eventsDetail',
        element: <EventDetail />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
