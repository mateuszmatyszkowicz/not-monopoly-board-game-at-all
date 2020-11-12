import * as React from "react";

export const LandingPageFooter = () => (
  <div className='footer'>
    <p className="text-center p-4 text-gray-600 pt-10">
      Created by &nbsp;
      <span>
        <a
          className="border-b text-blue-500"
          href="facebook.com/azslomian"
          target="_blank"
        >@aslomian</a>. 
      </span>
      <div>
        Inspired by tailwind components: 
        <a
          href="https://tailwindcomponents.com"
          target="_blank"
          className="border-b text-blue-500"
        > https://tailwindcomponents.com</a>
      </div>
    </p>
  </div>
);
