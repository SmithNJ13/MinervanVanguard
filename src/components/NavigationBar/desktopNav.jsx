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
                  <NavLink to="/" onClick={handleAbout}>About</NavLink>
                  <NavLink to="/">Team</NavLink>
                  <NavLink to="/">Rules</NavLink>
                  <NavLink to="/">Server</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("ESO")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>ESO</li>
              {menuOpen === "ESO" && (
                <div className="Menu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Players</NavLink>
                  <NavLink to="/">Content</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("Torn")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>Torn</li>
              {menuOpen === "Torn" && (
                <div className="Menu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Join</NavLink>
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
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">The Fleet</NavLink>
                  <NavLink to="/">Medical Team</NavLink>
                  <NavLink to="/">Join</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("ParadoxGames")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>Paradox</li>
              {menuOpen === "ParadoxGames" && (
                <div className="Menu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Games</NavLink>
                </div>
              )}
            </div>
            <div className="NavItem" onMouseEnter={() => handleMouseEnter("DnD")} onMouseLeave={handleMouseLeave}>
              <li className="NavText" style={style}>DnD</li>
              {menuOpen === "DnD" && (
                <div className="Menu">
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/">Campaigns</NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )
}

export default DesktopNav
