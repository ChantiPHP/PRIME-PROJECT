// src/tempo-routes.js
import React from 'react';
// Import components
import Home from './components/Home';  // Ensure the correct case for the file
import About from './components/About';
import Contact from './components/Contact';
import LeaderCard from './components/LeaderCard';
import LeaderDetailModal from './components/LeaderDetailModal';
import LeadershipGrid from './components/LeadershipGrid';

// Define the routes
const routes = [
  {
    path: "/",
    element: <Home />,  // Home component for root path
  },
  {
    path: "/about",
    element: <About />,  // About component for /about path
  },
  {
    path: "/contact",
    element: <Contact />,  // Contact component for /contact path
  },
  {
    path: "/leaders",
    element: <LeadershipGrid />,  // LeadershipGrid component for the /leaders path
  },
  {
    path: "/leader/:id",  // Dynamic route for individual leader details
    element: <LeaderDetailModal />,  // LeaderDetailModal component for dynamic leader details
  },
  {
    path: "/leadercard",  // LeaderCard component route (you can modify if you need it)
    element: <LeaderCard />,  // LeaderCard component route
  },
  // Add more routes here as needed
];

export default routes;
