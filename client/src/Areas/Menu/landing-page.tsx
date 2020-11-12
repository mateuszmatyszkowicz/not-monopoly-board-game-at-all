import * as React from "react";
import { Tables } from "./tables";
import { LandingPageFooter } from "./landing-page-footer";
import { LandingPageHeader } from "./landing-page-header";

export const LandingPage = () => (
  <div className="landing-page">
    <div className="bg-white-800 shadow-md">
      <LandingPageHeader />
      <Tables />
      <LandingPageFooter />
    </div>
  </div>
);
