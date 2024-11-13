import React, { useEffect } from "react"; // Importing React and the useEffect hook for side effects
import AOS from "aos"; // Importing the AOS (Animate On Scroll) library for animations
import "aos/dist/aos.css"; // Importing the AOS CSS file for animation styling
import img from "src/assets/Frame.svg";
import { ButtonType, LinkButton } from "src/components";
import { Audience } from "src/views";

const Sec1 = () => {
  // Defining the Sec1 functional component
  useEffect(() => {
    // Using the useEffect hook to perform a side effect after the component mounts
    AOS.init({
      // Initializing AOS with specific options
      duration: 1000, // Setting the duration of animations to 1000ms (1 second)
      once: false, // Allowing animations to happen more than once during scrolling
      mirror: false, // Disabling animations when scrolling past elements in reverse
    });
  }, []); // Empty dependency array to ensure the effect runs only once after initial render

  return (
    <div className="flex flex-wrap justify-between" data-aos="fade-right">
      <div className="md:w-[45%] w-full flex flex-col items-start justify-center">
        <h1 className="text-white xl:text-[50px] lg:text-[45px] sm:text-[40px] text-[32px] font-[400] xl:leading-[77px] lg:leading-[66px]">
          Building the <br /> foundation of <br /> open source 3.0
        </h1>
        <div className="mt-3">
          <LinkButton
            linkProps={{ to: "/issues" }}
            buttonProps={{
              htmlButtonProps: { children: "GET STARTED" },
              type: ButtonType.PRIMARY,
              audience: Audience.ALL,
            }}
          />
        </div>
      </div>
      <div className="md:w-[55%] w-full mt-4 mt-md-0">
        <img src={img} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default Sec1; // Exporting the Sec1 component as the default export
