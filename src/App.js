import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useRef } from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import Contact from "./Contact";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const profileRef = useRef(null);
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Navigation
            projectsRef={projectsRef}
            contactRef={contactRef}
            profileRef={profileRef}
          />
          <Routes>
            <Route
              path="/portfolio-app/"
              element={
                <Home
                  projectsRef={projectsRef}
                  contactRef={contactRef}
                  profileRef={profileRef}
                />
              }
            />
            <Route
              path="/portfolio-app/placeholder1"
              element={<ProjectOne />}
            />
            <Route
              path="/portfolio-app/placeholder2"
              element={<ProjectTwo />}
            />
            <Route
              path="/portfolio-app/placeholder3"
              element={<ProjectThree />}
            />
            <Route path="/portfolio-app/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
