import {Circle, Triangle} from "react-shapes"
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
            <Triangle width={222} height={178} fill={{color: "#1f456E"}} />
        </div>
        <div className="IconForeground">
            <Circle r={70} fill={{color: "#e3e4e6"}} />
            <div className="IconImage">
                <img src="../src/assets/logo.png" onClick={onClick}></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default IconButton
