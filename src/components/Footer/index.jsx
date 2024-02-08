import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import "./style.css"

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="footericons">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon id="icon" icon={faFacebook}/>
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon id="icon" icon={faInstagram} />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon id="icon" icon={faTwitter} />
          </a>
        </div>
        <i>Website maintained by: SmithNJ13</i>
    </footer>
    </>
  )
}

export default Footer
