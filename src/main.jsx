import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import Events from './components/Events.jsx'
import Gallery from './components/Gallery.jsx'
import Sponsors from './components/Sponsors.jsx'
import CAPortal from './components/CAPortal.jsx'
import Teams from './components/Teams.jsx'
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
