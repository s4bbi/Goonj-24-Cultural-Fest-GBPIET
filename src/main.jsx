import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from '../src/components/HomePage.jsx'
import LoginPage from '../src/components/LoginPage.jsx'
import Events from '../src/components/Events.jsx'
import Gallery from '../src/components/Gallery.jsx'
import Sponsors from '../src/components/Sponsors.jsx'
import CAPortal from '../src/components/CAPortal.jsx'
import Teams from '../src/components/Teams.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const AppComponent = () => {
  return (
    <div>
      <Outlet />
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
