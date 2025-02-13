import {useState} from 'react'
import {NavLink} from "react-router-dom"
import {IconButton} from "../exports"

const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(null)
  
  const mouseEnter = (menuItem) => {
    setOpenMenu(menuItem)
  }
  const mouseLeave = () => {
    setOpenMenu(null)
  }

    return (
      <div id="NavBar" className="absolute w-full h-[5rem] flex items-center bg-neutral-800 border-white border-y-[4px] gap-x-10 justify-center text-white z-[90]">
        <div id="leftSide" className="flex flex-row gap-8 flex-grow justify-center items-center">
          <div id="tab"
          className="relative flex-1 text-center hover:cursor-pointer hover:bg-bluelotus h-[5rem] flex items-center justify-center border-y-[4px] border-transparent hover:border-bluelotus hover:border-t-white"
          onMouseEnter={() => mouseEnter("eso")}
          onMouseLeave={mouseLeave}>
            <p className="text-4xl">ESO</p>
            {openMenu === "eso" && (
              <div 
              className="absolute left-0 w-full text-2xl flex flex-col items-start justify-start text-start h-max bg-bluelotus bg-opacity-70 p-[1rem] mt-[14rem] gap-[1rem] hover:cursor-default rounded-b-[1rem]">
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white hover:cursor-pointer w-full hover:cursor-pointer">About</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Players</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Content</p>
              </div>
            )}
          </div>
          <div id="tab"
          className="relative flex-1 text-center hover:cursor-pointer hover:bg-bluelotus h-[5rem] flex items-center justify-center border-y-[4px] border-transparent hover:border-bluelotus hover:border-t-white"
          onMouseEnter={() => mouseEnter("palworld")}
          onMouseLeave={mouseLeave}>
            <p className="text-4xl">Palworld</p>
            {openMenu === "palworld" && (
              <div 
              className="absolute left-0 w-full text-2xl flex flex-col items-start justify-start text-start h-max bg-bluelotus bg-opacity-70 p-[1rem] mt-[17rem] gap-[1rem] hover:cursor-default rounded-b-[1rem]">
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">About</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Team</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Rules</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Server</p>
              </div>
            )}
          </div>
          <div id="tab"
          className="relative flex-1 text-center hover:cursor-pointer hover:bg-bluelotus h-[5rem] flex items-center justify-center border-y-[4px] border-transparent hover:border-bluelotus hover:border-t-white"
          onMouseEnter={() => mouseEnter("torn")}
          onMouseLeave={mouseLeave}>
            <p className="text-4xl">Torn</p>
            {openMenu === "torn" && (
              <div 
              className="absolute left-0 w-full text-2xl flex flex-col items-start justify-start text-start h-max bg-bluelotus bg-opacity-70 p-[1rem] mt-[11rem] gap-[1rem] hover:cursor-default rounded-b-[1rem]">
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white hover:cursor-pointer w-full hover:cursor-pointer">About</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Join Us</p>
              </div>
            )}
          </div>
        </div>
        <div id="centerPiece">
          <IconButton top={"2.75rem"}/>
        </div>
        <div id="rightSide" className="flex flex-row gap-8 flex-grow justify-end">
        <div id="tab"
          className="relative flex-1 text-center hover:cursor-pointer hover:bg-bluelotus h-[5rem] flex items-center justify-center border-y-[4px] border-transparent hover:border-bluelotus hover:border-t-white"
          onMouseEnter={() => mouseEnter("paradox")}
          onMouseLeave={mouseLeave}>
            <p className="text-4xl">Paradox</p>
            {openMenu === "paradox" && (
              <div 
              className="absolute left-0 w-full text-2xl flex flex-col items-start justify-start text-start h-max bg-bluelotus bg-opacity-70 p-[1rem] mt-[11rem] gap-[1rem] hover:cursor-default rounded-b-[1rem]">
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white hover:cursor-pointer w-full hover:cursor-pointer">About</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Games</p>
              </div>
            )}
          </div>
          <div id="tab"
          className="relative flex-1 text-center hover:cursor-pointer hover:bg-bluelotus h-[5rem] flex items-center justify-center border-y-[4px] border-transparent hover:border-bluelotus hover:border-t-white"
          onMouseEnter={() => mouseEnter("starcitizen")}
          onMouseLeave={mouseLeave}>
            <p className="text-4xl">Star Citizen</p>
            {openMenu === "starcitizen" && (
              <div 
              className="absolute left-0 w-full text-2xl flex flex-col items-start justify-start text-start h-max bg-bluelotus bg-opacity-70 p-[1rem] mt-[17rem] gap-[1rem] hover:cursor-default rounded-b-[1rem]">
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white hover:cursor-pointer w-full hover:cursor-pointer">About</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">The Fleet</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Medical Team</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Join Us</p>
              </div>
            )}
          </div>
          <div id="tab"
          className="relative flex-1 text-center hover:cursor-pointer hover:bg-bluelotus h-[5rem] flex items-center justify-center border-y-[4px] border-transparent hover:border-bluelotus hover:border-t-white"
          onMouseEnter={() => mouseEnter("dnd")}
          onMouseLeave={mouseLeave}>
            <p className="text-4xl">DnD</p>
            {openMenu === "dnd" && (
              <div 
              className="absolute left-0 w-full text-2xl flex flex-col items-start justify-start text-start h-max bg-bluelotus bg-opacity-70 p-[1rem] mt-[11rem] gap-[1rem] hover:cursor-default rounded-b-[1rem]">
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white hover:cursor-pointer w-full hover:cursor-pointer">About</p>
                <p className="pl-[1rem] border-[2px] border-transparent hover:bg-cyan-300 hover:bg-opacity-30 hover:border-white w-full hover:cursor-pointer">Campaigns</p>
              </div>
            )}
          </div>
        </div>
      </div>
  );  
}

export default NavigationBar
