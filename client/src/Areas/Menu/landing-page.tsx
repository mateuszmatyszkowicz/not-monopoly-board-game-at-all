import * as React from "react";
import { SideMenu } from "./side-menu";
import { LandingPageFooter } from "./landing-page-footer";

export const LandingPage = () => (
  <div className="landing-page">
    <div className="bg-gray-800 shadow-md">
      <SideMenu />
      <LandingPageFooter />
    </div>
  </div>
);
