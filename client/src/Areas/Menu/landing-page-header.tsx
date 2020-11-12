import * as React from "react";
import { NavButton } from "../../components/nav-button";
import { Button } from "../../components/button";

export const LandingPageHeader = () => (
<div>
    <div className="bg-indigo-800 px-4 py-4">
      <div
        className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
      >
        <div className="flex justify-between items-center">
          <a href="#" className="inline-block py-2 text-white text-xl font-bold"
            >Welcome Matix</a
          >
          <div
            className="inline-block cursor-pointer md:hidden">
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8"></div>
          </div>
        </div>
        
        <div>
          <div className="hidden md:block">
            <NavButton title='Home' href='#' color='text-gray-100' bald={true} hoverColor='text-gray-100'  marginRight={6} />
            <NavButton title='Shop' href='#' color='text-gray-500' bald={false} hoverColor='text-gray-100' marginRight={6} />
            <NavButton title='Help' href='#' color='text-gray-500' bald={false} hoverColor='text-gray-100' marginRight={0} />
          </div>
        </div>
        <div className="hidden md:block">
          <Button title='Login' color='text-gray-500' />
          <Button title='Sign Up' color='text-gray-700' type='primary'/>
        </div>
      </div>
    </div>
</div>
);
