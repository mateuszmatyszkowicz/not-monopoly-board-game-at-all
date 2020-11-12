import * as React from "react";
import { LandingPageDescription } from "./landing-page-description";
import Tree from "../../assets/images/homeTree3.jpg";

var imageStyle={ 
  backgroundImage: "url(" + Tree + ")",
  backgroundPosition: 'center', 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat'
}

export const LandingPageContent = () => (
  <div className="landing-page-content">
    <div className="bg-green-800 md:overflow-hidden"
    style = {imageStyle}
    >
      <div className="px-4 py-20 md:py-4">
        <div className="md:max-w-6xl md:mx-auto">
          <div className="md:flex md:flex-wrap">
            <LandingPageDescription/>
          </div>
        </div>
      </div>
      <svg
        className="fill-current text-white hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>
</div>
);
