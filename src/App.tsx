import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Layout } from './layout';
import { Contact } from './pages/contact';
import { VisualizationPage } from './pages/visualization';
import { Visualizations } from './pages/visualizations';
import { Animations } from './pages/animations';
import { VirtualTours } from './pages/virtual-tours';
import { AnimationPage } from './pages/animation';
import {VirtualTourPage} from './pages/virtual-tour';

const queryClient = new QueryClient();

// Use the environment variable for basename
const baseUrl = process.env.REACT_APP_BASENAME || '/';
console.log('baseUrl', baseUrl);

function App() {
    return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={baseUrl}>
              <Routes>
                  <Route path="/" element={<Layout homepage><Home /></Layout>} />
                  <Route path="/virtual-tours" element={<Layout><VirtualTours /></Layout>} />
                  <Route path="/animations" element={<Layout><Animations /></Layout>} />
                  <Route path="/visualizations" element={<Layout><Visualizations /></Layout>} />
                  <Route path="/virtual-tours/:id" element={<Layout><VirtualTourPage /></Layout>} />
                  <Route path="/animations/:id" element={<Layout><AnimationPage /></Layout>} />
                  <Route path="/visualizations/:id" element={<Layout><VisualizationPage /></Layout>} />
                  <Route path="/contact" element={<Layout><Contact /></Layout>} />
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
    );
}

export default App;
