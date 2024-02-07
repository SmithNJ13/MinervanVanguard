import {useState, useEffect} from 'react'
import DesktopNav from './desktopNav'
import MobileNav from './mobileNav'
import "./style.css"

const NavigationBar = () => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    function Resize() {
      setMobile(window.innerWidth <= 1024)
    }
    Resize()
    window.addEventListener("Resize", Resize)
    return () => window.removeEventListener("Resize", Resize)
  }, [])

  return (
    <>
    <nav className={mobile ? "mobile": "desktop"}>
      {mobile ? (
        <MobileNav/>
      ) : (
        <DesktopNav/>
      )}
    </nav>
    </>
  )
}

export default NavigationBar
