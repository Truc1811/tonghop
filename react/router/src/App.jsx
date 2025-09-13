import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import NavBar from "./NavBar"
import Profile from "./pages/Profile"
import { useState, createContext } from "react"

// Tạo Context
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Pedro Tech");

  return (
    <AppContext.Provider value={{userName, setUserName }}>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App;
