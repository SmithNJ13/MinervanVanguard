import {useNavigate} from "react-router-dom"
import "./style.css"
import logo from "../../assets/logo.png"
import iconBackground from "../../assets/iconBackground.svg"

const IconButton = () => {
  const nav = useNavigate()

  const onClick = () => {
    nav("/")
  }
  return (
    <>
    <div id="IconContainer">
        <div className="IconBackground">
          <img src={iconBackground}></img>
        </div>
        <div className="IconForeground">
            <div className="IconImage">
                <img src={logo} onClick={onClick}></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default IconButton
