import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useRef } from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const profileRef = useRef(null);
  return (
    <Router basename="/portfolio-app">
      <div className="app">
        <div className="app-container">
          <Navigation
            projectsRef={projectsRef}
            contactRef={contactRef}
            profileRef={profileRef}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  projectsRef={projectsRef}
                  contactRef={contactRef}
                  profileRef={profileRef}
                />
              }
            />
            <Route path="/placeholder1" element={<ProjectOne />} />
            <Route path="/placeholder2" element={<ProjectTwo />} />
            <Route path="/placeholder3" element={<ProjectThree />} />
            <Route path="/placeholder4" element={<ProjectFour />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
