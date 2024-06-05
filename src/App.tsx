import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Home} from "./pages/home";
import Collection from "./pages/collection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/virtual-tours",
        element: <Collection category='virtualTours' />,
    },
    {
        path: "/animations",
        element: <Collection category='animations' />,
    },
    {
        path: "/visualizations",
        element: <Collection category='visualizations'/>,
    },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
