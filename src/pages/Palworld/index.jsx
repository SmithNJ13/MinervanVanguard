import {useEffect} from 'react'
import "./style.css"

const Palworld = (hash) => {
    useEffect(() => {
        if(hash === "#about") {
            const element = document.getElementById("about")
            if(element) {
                element.scrollIntoView({behavior: "smooth"})
            }
        }
    }, [hash])

    return (
    <div className="content">
        <div className="section" id="about">

        </div>
        <div className="section">

        </div>
        <div className="section">

        </div>
    </div>
    )
}

export default Palworld
