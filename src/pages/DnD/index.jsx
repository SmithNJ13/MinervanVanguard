import {useEffect} from 'react'
import placeholder from "../../assets/placeholder.jpg"
import Footer from "../../components/Footer"

const DnD = (hash) => {
    useEffect(() => {
        if(hash === "#about") {
            const element = document.getElementById("about")
            if(element) {
                element.scrollIntoView({behavior: "smooth"})
            }
        }
    }, [hash])

    return (
        <div id="main" className="overflow-hidden bg-neutral-700">
          <main id="content" className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden sm:pt-[12rem]">
            <h1 id="title" className="text-center py-[1rem] flex flex-col sm:mx-0 mx-4 text-4xl text-cyan-300 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]">Dungeons & Dragons
              <div className="sm:w-[66rem] w-[20rem] h-[4px] my-[1rem] bg-cyan-300 self-center"></div>
            </h1>
            <section id="about" className="p-[2rem] flex sm:flex-row flex-col gap-[1rem] bg-neutral-500 w-full">
              <img src={placeholder} className="sm:w-[30rem] sm:h-[30rem] border-cyan-300 border-2 rounded sm:m-[2rem]"></img>
              <h2 className="sm:text-2xl text-xl text-cyan-300 font-bold flex-col sm:my-[4rem]">ABOUT US
                <div className="sm:text-xl text-lg text-white font-normal sm:mr-[2rem]">
                  <p id="smallText" className="bg-cyan-300 bg-opacity-20 p-[1rem] rounded-[1rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, obcaecati!</p>
                </div>
              </h2>
            </section>
            <section id="community" className="p-[2rem] flex sm:flex-row-reverse flex-col gap-[1rem] bg-neutral-600 w-full">
              <img src={placeholder} className="sm:w-[30rem] sm:h-[30rem] border-cyan-300 border-2 rounded sm:m-[2rem]"></img>
              <h2 className="sm:text-2xl text-xl text-cyan-300 font-bold flex-col sm:my-[4rem] text-end">OUR CAMPAIGNS
                <div className="sm:text-xl text-lg text-white font-normal sm:ml-[2rem]">
                  <p id="smallText" className="bg-cyan-300 bg-opacity-20 p-[1rem] rounded-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam.</p>
                </div>
              </h2>
            </section>
            <Footer />
          </main>
        </div>
      )
}

export default DnD
