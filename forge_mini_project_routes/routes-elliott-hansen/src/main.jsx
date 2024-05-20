import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Contact } from './routes/Contact.jsx'
import { About } from './routes/About.jsx'
import { Projects } from './routes/Projects.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
