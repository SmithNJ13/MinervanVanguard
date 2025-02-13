import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
    <footer id="footer" className="flex flex-col items-center mb-[1rem] border-t-[4px]">
        <div className="flex flex-row gap-[4rem] p-[1rem] text-4xl text-white">
          <a href="https://www.facebook.com/" className="hover:text-cyan-300">
            <FontAwesomeIcon id="icon" icon={faFacebook}/>
          </a>
          <a href="https://www.instagram.com/" className="hover:text-cyan-300">
            <FontAwesomeIcon id="icon" icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" className="hover:text-cyan-300">
            <FontAwesomeIcon id="icon" icon={faTwitter} />
          </a>
        </div>
        <i className="text-2xl text-white">Website maintained by: <a href="https://github.com/SmithNJ13" className="underline text-cyan-300 hover:text-cyan-500">@SmithNJ13</a></i>
    </footer>
    </>
  )
}

export default Footer
