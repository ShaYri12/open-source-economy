import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sec2icon1 from "src/assets/sec2img.png";
import sec2icon2 from "src/assets/icon/sec2img3.png";
import sec2icon3 from "src/assets/sec2img2.png";
import startimg from "src/assets/star.png";
import { ButtonType, LinkButton } from "src/components";
import { Audience } from "../../../../../Audience";

const Sec2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="mt-5 relative z-[99] md:px-[35px] px-[25px]">
      <div className="flex flex-wrap justify-center gap-4 max-w-[1280px] mx-auto">
        {/* First Box */}
        <div
          className="bg-[#14233A] group rounded-[50px] 2xl:w-[610px] w-[565px] px-5 py-5 lg:px-[48px] lg:py-[48px] flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-1000 ease-in-out hover:shadow-[0_-2px_45px_rgba(255,126,75,0.6)]"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <div>
            <h1 className="text-white text-[36px] font-normal leading-[46.8px]">Get Paid</h1>
            <h2 className="text-white text-left text-[16px] font-normal leading-[25.5px] mt-3">
              Stop begging for donations! <br /> Fund your future. Have a Say
            </h2>
            <div className="mt-3">
              <LinkButton
                linkProps={{ to: "/developer" }}
                buttonProps={{
                  htmlButtonProps: { children: "DEVELOPERS" },
                  type: ButtonType.SECONDARY,
                  audience: Audience.DEVELOPER,
                }}
              />
            </div>
          </div>
          <div className="relative">
            <img className="w-[180px] h-[180px] object-cover" src={sec2icon1} alt="Get Paid Icon" />
            <div className="absolute top-[60px] left-[18px] transition-all duration-500 ease-in group-hover:rotate-[30deg] group-hover:scale-110">
              <img className="w-[45px] h-[45px]" src={startimg} alt="" />
            </div>
          </div>
        </div>

        {/* Second Box */}
        <div
          className="bg-[#14233A] group rounded-[50px] 2xl:w-[630px] w-[565px] px-5 py-5 lg:px-[48px] lg:py-[48px] flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-1000 ease-in-out hover:shadow-[0_-2px_45px_rgba(255,81,140,0.6)]"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div>
            <h1 className="text-white text-[36px] font-normal leading-[46.8px]">Get Support</h1>
            <h2 className="text-white text-left text-[16px] font-normal leading-[25.5px] mt-3">
              Forget the far west! Secure your <br /> platform, secure your business.
            </h2>
            <div className="mt-3">
              <LinkButton
                linkProps={{ to: "/user" }}
                buttonProps={{
                  htmlButtonProps: { children: "OPEN SOURCE USERS" },
                  type: ButtonType.SECONDARY,
                  audience: Audience.USER,
                }}
              />
            </div>
          </div>
          <div className="relative">
            <img src={sec2icon2} className="w-[180px] h-[180px] object-cover" alt="Get Support Icon" />
            <div className="absolute top-[40px] left-[85px] transition-all duration-500 ease-in group-hover:rotate-[60deg] group-hover:scale-110">
              <img className="w-[50px] h-[50px]" src={startimg} alt="" />
            </div>
          </div>
        </div>

        {/* Third Box */}
        <div
          className="bg-[#14233A] group rounded-[50px] 2xl:w-[630px] w-[565px] px-5 py-5 lg:px-[48px] lg:py-[48px] flex flex-col md:flex-row gap-5 items-center justify-between transition-all duration-1000 ease-in-out hover:shadow-[0_-2px_45px_rgba(94,48,156,0.6)] relative"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="text-content transition-opacity duration-100 ease-in-out hover:opacity-0">
            <h1 className="text-white text-[36px] font-normal leading-[46.8px]">Get a Stake</h1>
            <h2 className="text-white text-left text-[16px] font-normal leading-[25.5px] mt-3">
              Support, invest, or donate in <br /> projects to get a part of its <br />
              business, governance, and ecosystem.
            </h2>
          </div>

          <div className="relative image-content">
            {/* Update: Set initial opacity to 100 */}
            <img
              src={sec2icon3}
              className="w-[180px] h-[180px] object-cover opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"
              alt="Get a Stake Icon"
            />
            <div className="absolute bottom-[-5px] left-[32%] transition-all duration-500 ease-in group-hover:rotate-[60deg] group-hover:scale-110">
              <img className="w-[40px] h-[40px]" src={startimg} alt="" />
            </div>
          </div>

          <div className="absolute top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-white text-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
