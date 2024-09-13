import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Home} from "./pages/home";
import {Layout} from './layout';
import {Contact} from './pages/contact';
import {VisualizationPage} from './pages/visualization';
import {Category} from './type';
import {Visualizations} from './pages/visualizations';
import {Animations} from './pages/animations';
import {VirtualTours} from './pages/virtual-tours';
import {AnimationPage} from './pages/animation';

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
        element: <Layout><VisualizationPage /></Layout>,
    },
    {
        path: "/animations/:id",
        element: <Layout><AnimationPage /></Layout>,
    },
    {
        path: "/visualizations/:id",
        element: <Layout><VisualizationPage /></Layout>,
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
