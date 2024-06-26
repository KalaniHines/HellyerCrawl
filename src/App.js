import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./userPages/pages/HomePage";
import Footer from "./shared/Footer/Footer";
import Racing from "./userPages/pages/Racing";
import Training from "./userPages/pages/Training";
import MainNavigation from "./shared/Navigation/MainNavigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/racing" element={<Racing />} />
            <Route path="/training" element={<Training />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
