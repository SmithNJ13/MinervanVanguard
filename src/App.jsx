import './App.css'
import {useEffect} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //eslint-disable-line
import {NavigationBar, MobileNav} from "./components/exports"
import {Home, Palworld, ComingSoon, Eso, Torn, Paradox, StarCitizen, DnD} from "./pages/exports"

function App() {
  const hash = window.location.hash
  useEffect(() => {
    if(window.location.hash === "#about") {
      const element = document.getElementById("about")
      if(element) {
        element.scrollIntoView({behavior: "smooth"})
      }
    }
  }, [])

  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<ComingSoon/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/eso" element={<Eso />}/>
      <Route path="/Palworld/*" element={<Palworld />} />
      <Route path="/torn" element={<Torn />}/>
      <Route path="/paradox" element={<Paradox />}/>
      <Route path="/starcitizen" element={<StarCitizen />}/>
      <Route path="/dnd" element={<DnD />}/>
    </Routes>
    </>
  )
}

export default App
