import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import Home from "./userPages/pages/HomePage";
import Footer from "./shared/Footer/Footer";
import Racing from "./userPages/pages/Racing";
import MainHeader from "./shared/Navigation/MainHeader";
import MainNavigation from "./shared/Navigation/MainNavigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
      <MainHeader>
          <MainNavigation />
        </MainHeader>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/racing" element={<Racing />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>

  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Router>
//       <main>
//       <Routes>
//         <MainHeader>
//           <MainNavigation />
//         </MainHeader>


//             <Route path="/home" element={<Home />} />
//             {/* <Route path="/" element={<Navigate to="/racing" replace />} />
//             <Route path="/racing" element={<Racing />} /> */}
//             <Route path="/racing" element={<Racing />} />
//           </Routes>
//         </main>
//         <Footer />
//       </Router>
//     </div>
//   );
// }
