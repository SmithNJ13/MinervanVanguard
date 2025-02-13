import React, { useRef, useEffect } from "react";
import logo from "../../assets/biglogo.png";
import Footer from "../../components/Footer";

const ComingSoon = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const flipImage = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = "transform 3s ease-in-out";
        imageRef.current.style.transform += "scaleX(-1)";
        setTimeout(() => {
          imageRef.current.style.transition = "none";
          imageRef.current.style.transform = "scaleX(1)";
          setTimeout(flipImage, 50);
        }, 3000);
      }
    };

    flipImage();

    return () => clearTimeout();
  }, []);

  return (
    <div id="main" className="overflow-hidden bg-neutral-700">
      <main id="content" className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden">
        <div className="w-screen h-screen bg-neutral-700 flex flex-col items-center sm:justify-center">
          <img ref={imageRef} className="w-[20rem] h-[20rem] bg-white bg-opacity-70 rounded-[50%] my-[2rem]" src={logo}/>
          <div className="text-center">
            <h2 className="text-cyan-300 text-2xl underline">COMING SOON!</h2>
            <h4 className="text-xl text-white">website under construction</h4>
          </div>
        </div>
      <Footer />
      </main>
    </div>
  );
};

export default ComingSoon;
