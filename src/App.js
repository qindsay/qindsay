import './styles.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;