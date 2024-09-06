import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Home} from "./pages/home";
import {Collection} from "./pages/collection";
import {Layout} from './layout';
import {Contact} from './pages/contact';
import {Artpiece} from './pages/artpiece';
import {Category} from './type';
import {Visualizations} from './pages/visualizations';
import {Animations} from './pages/animations';
import {VirtualTours} from './pages/virtual-tours';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout homepage><Home/></Layout>,
    },
    {
        path: "/virtual-tours",
        element: <Layout><VirtualTours /></Layout>,
    },
    {
        path: "/animations",
        element: <Layout><Animations /></Layout>,
    },
    {
        path: "/visualizations",
        element: <Layout><Visualizations /></Layout>,
    },
    {
        path: "/virtual-tours/:id",
        element: <Layout><Artpiece category={Category.VIRTUAL_TOURS} /></Layout>,
    },
    {
        path: "/animations/:id",
        element: <Layout><Artpiece category={Category.ANIMATIONS} /></Layout>,
    },
    {
        path: "/visualizations/:id",
        element: <Layout><Artpiece category={Category.VISUALIZATIONS} /></Layout>,
    },
    {
        path: "/contact",
        element: <Layout><Contact /></Layout>,
    },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
