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
                  <NavLink to="/DnD#about">About</NavLink>
                  <NavLink to="/DnD#campaigns">Campaigns</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>Star Citizen</h4>
                <div className="submenu">
                  <NavLink to="/StarCitizen#about">About</NavLink>
                  <NavLink to="/StarCitizen#fleet">The Fleet</NavLink>
                  <NavLink to="/StarCitizen#medical">Medical Team</NavLink>
                  <NavLink to="/StarCitizen#join">Join</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>FFXIV</h4>
                <div className="submenu">
                  <NavLink to="/FFXIV#about">About</NavLink>
                  <NavLink to="/FFXIV#players">Players</NavLink>
                  <NavLink to="/FFXIV#content">Content</NavLink>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <h4>Torn</h4>
                <div className="submenu">
                  <NavLink to="/Torn#about">About</NavLink>
                  <NavLink to="/Torn#join">Join</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>Palworld</h4>
                <div className="submenu">
                  <NavLink to="/Palworld#about">About</NavLink>
                  <NavLink to="/Palworld#team">Team</NavLink>
                  <NavLink to="/Palworld#rules">Rules</NavLink>
                  <NavLink to="/Palworld#server">Server</NavLink>
                </div>
              </div>
              <div className="item">
                <h4>Paradox</h4>
                <div className="submenu">
                  <NavLink to="/Paradox#about">About</NavLink>
                  <NavLink to="/Paradox#games">Games</NavLink>
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
