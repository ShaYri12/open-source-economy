import React, { useEffect, useState } from "react"; // Importing React, useEffect, and useState hooks
import AOS from "aos"; // Importing the AOS (Animate On Scroll) library for animations
import "aos/dist/aos.css"; // Importing AOS CSS for animation styling
import vector from "src/assets/playbtn.svg";
import videoimg from "src/assets/videoframe_16852.png"; // Importing the video thumbnail image asset

// Array of video data, including video source URLs and alt text for thumbnails
const videoData = [
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/2278095/2278095-sd_640_360_30fps.mp4",
    alt: "Video Thumbnail 1",
  },
  {
    id: 2,
    src: "https://videos.pexels.com/video-files/2278095/2278095-sd_640_360_30fps.mp4",
    alt: "Video Thumbnail 2",
  },
  {
    id: 3,
    src: "https://videos.pexels.com/video-files/2278095/2278095-sd_640_360_30fps.mp4",
    alt: "Video Thumbnail 3",
  },
];

const Sec4 = () => {
  // Defining the Sec4 functional component
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null); // State to track the currently playing video ID

  const handlePlayClick = (id: number) => {
    // Function to handle play button click
    setPlayingVideoId(id); // Set the state to the ID of the video to be played
    const video = document.getElementById(`myVideo-${id}`); // Get the video element by its ID
    if (video) {
      // @ts-ignore
      video.play(); // Play the video
    }
  };

  useEffect(() => {
    // Using the useEffect hook to initialize AOS after the component mounts
    AOS.init({
      // Initializing AOS with specific options
      duration: 1000, // Setting the animation duration to 1000ms (1 second)
      once: false, // Allowing animations to occur multiple times while scrolling
      mirror: true, // Allowing elements to animate out while scrolling past them
    });
  }, []); // Empty dependency array to ensure the effect runs only once after initial render

  return (
    <div className="md:px-[35px] px-[25px] md:py-[120px] py-[80px]">
      <div className="bg-[url('/src/assets/Group258.svg')] bg-cover bg-no-repeat xl:bg-custom-y bg-center">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="sm:text-[42px] text-[32px] text-center text-white">Dig into the details</h1>
          <div className="px-0 md:py-[110px] md:px-0 py-[40px]">
            <div className="flex items-center justify-center gap-5 w-full flex-wrap">
              {videoData.map((video, index) => (
                <div
                  key={video.id}
                  className="flex items-center justify-center w-full sm:w-1/2 lg:w-[30.5%]" // Responsive width handling
                  data-aos="fade-right"
                  data-aos-delay={index * 200}
                >
                  <div className="relative bg-[#14233A] group cursor-pointer px-3 py-3 rounded-[30px]">
                    {/* Image */}
                    {playingVideoId !== video.id && (
                      <img
                        className="min-[360px] w-full rounded-[30px] group-hover:opacity-[0.7] transition-opacity duration-300 ease-in-out"
                        src={videoimg}
                        alt={video.alt}
                        onClick={() => handlePlayClick(video.id)}
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute top-[15px] left-[15px] w-[92%] h-[60%] bg-black bg-opacity-50 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>

                    {/* Video (hidden if not playing) */}
                    <video
                      id={`myVideo-${video.id}`}
                      className={`rounded-[30px] min-w-[360px] w-full ${playingVideoId === video.id ? "block" : "hidden"}`}
                      controls
                      playsInline
                    >
                      <source src={video.src} />
                    </video>

                    {/* Play button */}
                    {playingVideoId !== video.id && (
                      <div
                        className="absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-[99]"
                        onClick={() => handlePlayClick(video.id)}
                      >
                        <button className="relative flex items-center justify-center w-[50px] h-[50px] border-0 transition-all duration-[600ms] ease-in-out">
                          <img
                            src={vector}
                            className="absolute w-[50px] h-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-[600ms] ease-in-out hover:brightness-[130%]"
                            alt="Play Button"
                          />
                        </button>
                      </div>
                    )}

                    {/* Heading */}
                    <h1 className="mt-3 text-[21px] text-center text-white">New video youtube</h1>
                    <h2
                      className="my-3 text-[16px] text-white text-center cursor-pointer transition-all duration-[1s] ease-in-out bg-white hover:bg-[linear-gradient(90deg,_#ff7e4b_0%,_#ff518c_50%,_#66319b_100%)]"
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      READ MORE
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec4; // Exporting the Sec4 component as the default export
