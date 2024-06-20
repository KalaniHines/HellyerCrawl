import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import logoImage from "./shared/Images/hellyerLogo.png";

import Footer from "./shared/Footer/Footer";
import Racing from "./userPages/pages/Racing";
import MainNavigation from "./shared/Navigation/MainNavigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logoImage}
          className="App-logo"
          alt="Hellyer Velodrome Logo"
        />
      </header>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/racing" replace />} />
            <Route path="/racing" element={<Racing />} /> */}
            <Route path="/racing" element={<Racing />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
