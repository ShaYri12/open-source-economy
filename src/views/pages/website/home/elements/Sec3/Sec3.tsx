import React, { useEffect, useState } from "react"; // Importing React, useEffect, and useState hooks
import AOS from "aos"; // Importing the AOS (Animate On Scroll) library for animations
import "aos/dist/aos.css"; // Importing AOS CSS for animation styling
import vector from "src/assets/playbtn.svg";
import hover from "src/assets/playbtnhover.png";
import videoimg from "src/assets/videoframe_16852.png";

const Sec3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="lg:px-[50px] md:px-[35px] px-[25px]" data-aos="zoom-in">
      <div className="max-w-[1280px] mx-auto">
        <div id="video_play" className={`video_play ${isPlaying ? "videoshow" : ""}`}>
          <div className="d-flex align-items-center mx-auto max-w-[1000px] md:max-h-[550px] max-h-[50vw] md:h-[700px] h-[50vw] w-full h-full  rounded-[30px] overflow-hidden">
            <div className="relative w-full h-full">
              {!isPlaying && <img className="w-full h-full object-cover rounded-[30px]" src={videoimg} onClick={handlePlayClick} alt="Video Thumbnail" />}
              {isPlaying && (
                <iframe
                  id="myVideo"
                  className="show rounded-[30px] w-full h-full object-cover"
                  src="https://www.youtube.com/embed/PbtRZ-ML9DI?autoplay=1&si=DqkUXy0pYtmmgEnf"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
              {!isPlaying && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={handlePlayClick}>
                  <button className="relative flex items-center justify-center border-none transition-all duration-300 ease-in-out w-[100px] h-[100px]">
                    <img
                      src={vector}
                      className="absolute md:w-[100px] w-[50px] md:h-[100px] h-[50px] transition-opacity duration-600 ease-in-out"
                      alt="Play Button"
                    />
                    <img
                      src={hover}
                      className="absolute md:w-[100px] w-[50px] md:h-[100px] h-[50px] opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100"
                      alt="Play Button"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3; // Exporting the Sec3 component as the default export
