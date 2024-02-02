import {useNavigate} from "react-router-dom"
import "./style.css"

const IconButton = () => {
  const nav = useNavigate()

  const onClick = () => {
    nav("/")
  }
  return (
    <>
    <div id="IconContainer">
        <div className="IconBackground">
        </div>
        <div className="IconForeground">
            <div className="IconImage">
                <img src="../src/assets/logo.png" onClick={onClick}></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default IconButton
