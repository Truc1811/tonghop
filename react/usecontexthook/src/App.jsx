import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { AppContext } from "./context/AppContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false,
      }
    }
  });
  const [user, setUser] = useState("Predo");
  
  return (
    <>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ user, setUser }}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
