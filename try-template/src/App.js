import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/Home";  // Ensure the correct path and case
import About from "./components/About";  // Ensure the correct path and case
import Contact from "./components/Contact";  // Ensure the correct path and case
import tempoRoutes from "./tempo-routes";  // Ensure the correct path for tempo-routes

function App() {
  // Get the tempo flag
  const tempoEnabled = import.meta.env.VITE_TEMPO === "true";

  // Always call useRoutes, and conditionally pass routes
  const dynamicRoutes = useRoutes(tempoEnabled ? tempoRoutes : []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {/* Static routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional dynamic route */}
          {tempoEnabled && <Route path="/tempobook/*" element={<div>Tempobook Component or Placeholder</div>} />}
        </Routes>

        {/* Conditionally render dynamic routes */}
        {dynamicRoutes}
      </>
    </Suspense>
  );
}

export default App;
