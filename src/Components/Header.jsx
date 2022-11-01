import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ logged }) => {
  console.log(logged);
  return (
    <div className="flex flex-col">
      <header>
        <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
          <div className="container bg-gray-900  flex flex-wrap justify-between items-center mx-auto">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/fork-and-knife-with-plate_1f37d-fe0f.png"
                className="mr-3 h-6 sm:h-9"
                alt="FML Logo"
              />
              <span className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
                Find my Lunch
              </span>
            </NavLink>
            <div className="flex items-center md:order-2">
            {logged && 
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>}{!logged&&
              <NavLink
                to="/register"
                className="group relative inline-flex items-center overflow-hidden rounded-lg bg-blue-500 hover:bg-blue-600 px-7 py-2.5 text-white  mr-3 md:mr-0 focus:outline-none focus:ring active:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:mr-4">
                  Sign up
                </span>
              </NavLink>
              }
            </div>
            <div
              className="hidden justify-between bg-gray-900 items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-900 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/restaurants"
                    className="block py-2 pr-4 pl-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Restaurants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/maps"
                    className="block py-2 pr-4 pl-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Maps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 pr-4 pl-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
