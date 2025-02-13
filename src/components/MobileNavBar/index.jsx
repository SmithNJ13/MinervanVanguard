import React from 'react'
import {IconButton} from "../exports"


const MobileNav = () => {
  
return (
<div id="NavBar" className="relaitve w-full h-[12rem] bg-neutral-800 border-white border-y-[3px] text-white z-[90]">
    <div className="flex flex-row p-[1rem] text-xl justify-between gap-[2rem]">
        <div className="flex flex-row w-[20rem] gap-8 p-2">
            <div>
                <p className="my-[1rem]">ESO</p>
                <p className="my-[1rem]">Palworld</p>
                <p className="my-[1rem]">Torn</p>
            </div>
            <div>
                <p className="my-[1rem]">Paradox</p>
                <p className="my-[1rem]">Star Citizen</p>
                <p className="my-[1rem]">DnD</p>
            </div>
        </div>
        <IconButton top={"-1.9rem"}/>
    </div>
</div>
);  
}

export default MobileNav
