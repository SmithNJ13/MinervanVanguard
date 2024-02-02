import './App.css'
import {useEffect} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavigationBar} from "./components/exports"
import {ComingSoon} from "./pages/exports"

function App() {
  // const hash = window.location.hash
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
    <NavigationBar />
    <Routes>
      <Route path="/" element={<ComingSoon />}/>
      {/* <Route path="/Palworld/*" element={<Palworld hash={hash}/>} /> */}
    </Routes>
    </>
  )
}

export default App
