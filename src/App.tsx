import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Home} from "./pages/home";
import Collection from "./pages/collection";
import {Layout} from './layout';
import {Contact} from './pages/contact';
import {Artpiece} from './pages/artpiece';
import {Category} from './type';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout homepage><Home/></Layout>,
    },
    {
        path: "/virtual-tours",
        element: <Layout><Collection category={Category.VIRTUAL_TOURS} /></Layout>,
    },
    {
        path: "/animations",
        element: <Layout><Collection category={Category.ANIMATIONS} /></Layout>,
    },
    {
        path: "/visualizations",
        element: <Layout><Collection category={Category.VISUALIZATIONS} /></Layout>,
    },
    // {
    //     path: "/virtual-tours/:id",
    //     element: <Layout><Artpiece category={Category.VIRTUAL_TOURS} /></Layout>,
    // },
    // {
    //     path: "/animations/:id",
    //     element: <Layout><Artpiece category={Category.ANIMATIONS} /></Layout>,
    // },
    // {
    //     path: "/visualizations/:id",
    //     element: <Layout><Artpiece category={Category.VISUALIZATIONS} /></Layout>,
    // },
    {
        path: "/contact",
        element: <Layout><Contact /></Layout>,
    },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
