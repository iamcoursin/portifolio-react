import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReoderIcon from "@material-ui/icons/Reorder";
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);

  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReoderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/projetos"> Projetos</Link>
        <Link to="/experiencia"> Experiência</Link>
      </div>
    </div>
  );
}

export default Navbar;
