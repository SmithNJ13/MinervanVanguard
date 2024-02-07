import {useState} from 'react'
import {NavLink} from "react-router-dom"
import {IconButton} from "../exports"
import "./style.css"

const DesktopNav = () => {
    const [menuOpen, setMenuOpen] = useState(null)

    const handleMouseEnter = (item) => {
        setMenuOpen(item)
      }
      const handleMouseLeave= () => {
        setMenuOpen(null)
      }

      const handleAbout = () => {
        const element = document.getElementById("about")
        if(element) {
          element.scrollIntoView({behavior: "smooth"})
        }
      }
    
      const style = {
        textDecoration: "none",
      }
    return (
        <div id="NavigationBar">
          <div className="NavigationLeft">
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("Palworld")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>Palworld</li>
              {menuOpen === "Palworld" && (
                <div className="Menu">
                  <NavLink to="/Palworld#about" onClick={handleAbout}>About</NavLink>
                  <NavLink to="/Palworld#team">Team</NavLink>
                  <NavLink to="/Palworld#rules">Rules</NavLink>
                  <NavLink to="/Palworld#server">Server</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("FFXIV")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>FFXIV</li>
              {menuOpen === "FFXIV" && (
                <div className="Menu">
                  <NavLink to="/FFXIV#about">About</NavLink>
                  <NavLink to="/FFXIV#players">Players</NavLink>
                  <NavLink to="/FFXIV#content">Content</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("Torn")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>Torn</li>
              {menuOpen === "Torn" && (
                <div className="Menu">
                  <NavLink to="/Torn#about">About</NavLink>
                  <NavLink to="/Torn#join">Join</NavLink>
                </div>
              )}
            </div>
          </div>
          <IconButton />
          <div className="NavigationRight">
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("StarCitizen")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>Star Citizen</li>
              {menuOpen === "StarCitizen" && (
                <div className="Menu">
                  <NavLink to="/StarCitizen#about">About</NavLink>
                  <NavLink to="/StarCitizen#fleet">The Fleet</NavLink>
                  <NavLink to="/StarCitizen#medical">Medical Team</NavLink>
                  <NavLink to="/StarCitizen#join">Join</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("ParadoxGames")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>Paradox</li>
              {menuOpen === "ParadoxGames" && (
                <div className="Menu">
                  <NavLink to="/Paradox#about">About</NavLink>
                  <NavLink to="/Paradox#games">Games</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("DnD")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>DnD</li>
              {menuOpen === "DnD" && (
                <div className="Menu">
                  <NavLink to="/DnD#about">About</NavLink>
                  <NavLink to="/DnD#campaigns">Campaigns</NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )
}

export default DesktopNav
