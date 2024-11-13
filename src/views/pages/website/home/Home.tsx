import React from "react";
import Sec2 from "./elements/Sec2/Sec2";
import Sec1 from "./elements/Sec1/Sec1";
import { PageWrapper } from "../../PageWrapper";
import "./Home.css";
import Sec3 from "src/views/pages/website/home/elements/Sec3/Sec3";
import Sec4 from "src/views/pages/website/home/elements/Sec4/Sec4";

interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <PageWrapper>
      <div className="md:pt-8 pt-5 ">
        <div className="md:px-[35px] px-[25px]">
          <div className="max-w-[1280px] mx-auto">
            <Sec1 />
          </div>
        </div>
        <Sec2 />
        <div>
          <div className="sec3bg1">
            <div className="sec3bg2">
              <Sec3 />
            </div>
          </div>
          <Sec4 />
        </div>
      </div>
    </PageWrapper>
  );
}
