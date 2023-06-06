import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App.tsx'
import Dashboard from './students/dashboard.tsx'
import CourseDashboard from './students/coursedashboard.tsx'
import CourseDetailsDashboard from './students/coursedetailsdashboard.tsx'
import CreateAccount from './auth/createaccount.tsx'
import Login from './auth/login.tsx'
import Schools from './schools/schools.tsx'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/dashboard/courses",
    element: <CourseDashboard />
  },
  {
    path: "/dashboard/courses/details",
    element: <CourseDetailsDashboard />
  },
  {
    path: "/createaccount",
    element: <CreateAccount />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/schools",
    element: <Schools />
  }
  
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
