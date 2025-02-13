import {useNavigate} from "react-router-dom"
import logo from "../../assets/logo.png"
import iconBackground from "../../assets/iconBackground.svg"

const IconButton = ({top}) => {
  const nav = useNavigate()
  const onClick = () => {
    nav("/home")
  }

  return (
    <div id="imgHolder" className="relative sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] flex sm:items-start items-center justify-center" style={{top: top}}>
      <img src={iconBackground} className="absolute w-full h-full" />
      
      <div id="imgIcon" className="absolute sm:w-[133.3px] sm:h-[133.3px] w-[5rem] h-[6rem] z-[95] rounded-[50%] sm:p-[6px] p-[1px] sm:hover:bg-cyan-300 sm:hover:bg-opacity-70 hover:cursor-pointer" onClick={onClick}>
        <img src={logo} alt="icon"/>
      </div>
    </div>
  )
  
}

export default IconButton
