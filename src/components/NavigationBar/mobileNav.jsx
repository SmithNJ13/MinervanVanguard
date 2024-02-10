import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./style.css";

const MobileNav = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`navigation ${expanded ? "expanded" : ""}`} onClick={toggleMenu}>
        <p className="arrow">{expanded ? "↰" : "↳"}</p>
        {expanded && (
          <div className="menu">
            <div className="home">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="row">
              <div className="item">
                <h4>DnD</h4>
                <div className="submenu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Campaigns</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>Star Citizen</h4>
                <div className="submenu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">The Fleet</NavLink>
                  <NavLink to="/">Medical Team</NavLink>
                  <NavLink to="/">Join</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>FFXIV</h4>
                <div className="submenu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Players</NavLink>
                  <NavLink to="/">Content</NavLink>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <h4>Torn</h4>
                <div className="submenu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Join</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>Palworld</h4>
                <div className="submenu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Team</NavLink>
                  <NavLink to="/">Rules</NavLink>
                  <NavLink to="/">Server</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>Paradox</h4>
                <div className="submenu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Games</NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
