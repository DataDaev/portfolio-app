import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Navigation />
          <Routes>
            <Route path="/portfolio-app/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
