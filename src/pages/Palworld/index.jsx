// import {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import "./style.css"

const Palworld = () => {
    // useEffect(() => {
    //     if(hash === "#about") {
    //         const element = document.getElementById("about")
    //         if(element) {
    //             element.scrollIntoView({behavior: "smooth"})
    //         }
    //     }
    // }, [])

  return (
    <>
    <div id="Palworld">
        <div className="title" id="about">
            <h1>Palworld!</h1>
        </div>
        <div id="textbox">
            <div className="subheading">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus corrupti maxime, ipsum a fuga nostrum amet eligendi, dolorem temporibus ea similique laborum eveniet modi quaerat sunt assumenda facere placeat nesciunt, iure omnis facilis aperiam. Sed, assumenda ipsam? Quasi error magni consequatur quibusdam? In quibusdam architecto, eum fugiat alias sint dolore assumenda quae et reprehenderit tempore magni optio nisi itaque ducimus omnis debitis, animi illo! Nihil voluptate commodi error tenetur quibusdam hic mollitia fuga recusandae non! Excepturi vero dicta doloremque maiores nulla ullam quisquam dolorem! Itaque ducimus quod ad deleniti voluptatum nobis nisi quos laborum magni, dolore accusamus, dolores illum.</h2>
            </div>
        </div>
        <div id="team">
            <h2>this is the team!</h2>
            <li>John</li>
        </div>
        <div id="rules">
            <h2>These are the rules!</h2>
            <li>Do not be naughty!</li>
        </div>
    </div>
    <footer className="footer">
        <div className="footericons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
        </div>
        <i>Website maintained by: XXXX</i>
    </footer>
    </>
  )
}

export default Palworld
