import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { Link } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Router>
        {/* <div>
          Navbar
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
        </div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
