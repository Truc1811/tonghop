import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav
      style={{ padding: "20px", background: "#f0f0f0", marginBottom: "20px" }}
    >
      <Link
        to="/"
        style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
      >
        Home
      </Link>
      <Link
        to="/profile"
        style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
      >
        Profile
      </Link>
      <Link
        to="/contact"
        style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
      >
        Contact
      </Link>
    </nav>
  );
}
export default NavBar;
