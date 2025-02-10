import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Contact, MainProfile, Project, Resume } from './Components/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App wraps all routes (header, footer)
    children: [
      {
        index: true,  // This sets MainProfile as the default (for /)
        element: <MainProfile/>,
      },
      {
        path: "profile",
        element: <MainProfile/>,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
