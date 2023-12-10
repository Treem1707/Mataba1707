import React, { useState } from "react";

type Props = {};

function Navbar({}: Props) {
  const [navbar, setNavbar] = useState<boolean>(false);
  return (
    <nav className="w-full bg-slate-50 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-2xl font-semibold text-slate-500"><span className="text-slate-900 font-extrabold">Enroll</span>Mate</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-slate-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center text-sm font-medium justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-text-slate-700 hover:text-slate-900">
                <a href="/">Home</a>
              </li>
              <li className="text-text-slate-700 hover:text-slate-900">
                <a href="/about">About Us</a>
              </li>
              <li className="text-text-slate-700 hover:text-slate-900">
                <a href="/programs">Programs</a>
              </li>
              {/* <li className="text-text-slate-700 hover:text-slate-900">
                <a href="javascript:void(0)">Pages</a>
              </li> */}
              {/* <li className="text-text-slate-700 hover:text-slate-900">
                <a href="javascript:void(0)">Blog</a>
              </li> */}
              <li className="text-text-slate-700 hover:text-slate-900">
                <a href="javascript:void(0)">Contact Us</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
            <a
            href="/register"
            className="px-4 py-2 text-white text-sm font-medium bg-pink-600 rounded-full hover:bg-pink-700 uppercase"
          >
            Join us now
          </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          
          <a
            href="/register"
            className="px-4 py-2 text-white text-sm font-medium bg-pink-600 rounded-full hover:bg-pink-700 uppercase"
          >
            Join us now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
