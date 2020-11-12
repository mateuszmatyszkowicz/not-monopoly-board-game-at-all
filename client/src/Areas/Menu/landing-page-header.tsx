import * as React from "react";
import MrMonopoly from "../../Assets/images/guy.jpg";

var imageStyle= { 
  backgroundImage: "url(" + MrMonopoly + ")",
  backgroundRepeat: 'no-repeat',
  maxHeight: '100%',
  maxWidth: '100%',
  backgroundColor: 'transparent'
}

export const LandingPageHeader = () => (
<div>
<header>
    <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold text-gray-700">
                        <a href="#" className="text-gray-800 text-xxl font-bold hover:text-gray-700 md:items-center">Not a Monopoly at ALL</a>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className="hidden -mx-4 md:flex md:items-center">
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Sign In</a>
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Sign Up</a>
                    <a href="#" className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <div className="w-full bg-cover bg-center py-40" 
    style = {imageStyle}>
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 py-40">
            <div className="text-center">
                <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Explore World of Properties</h1>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start Game</button>
            </div>
        </div>
    </div>
</header>

    {/* <div className="bg-indigo-800 px-4 py-4">
      <div className="md:items-center">
         Not-Monopoly
      </div>
    </div> */}
    
</div>
);
