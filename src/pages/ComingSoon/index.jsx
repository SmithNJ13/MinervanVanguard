import React, { useRef, useEffect } from "react";
import "./style.css";
import logo from "../../assets/biglogo.png";

const ComingSoon = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const flipImage = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = "transform 2s ease-in-out";
        imageRef.current.style.transform += "scaleX(-1)";
        setTimeout(() => {
          imageRef.current.style.transition = "none";
          imageRef.current.style.transform = "scaleX(1)";
          setTimeout(flipImage, 50);
        }, 2000);
      }
    };

    flipImage();

    return () => clearTimeout();
  }, []);

  return (
    <>
      <div id="box">
        <img ref={imageRef} className="wait flip" src={logo} alt="logo" />
        <h2>COMING SOON!</h2>
        <h4>Website under construction</h4>
      </div>
    </>
  );
};

export default ComingSoon;
