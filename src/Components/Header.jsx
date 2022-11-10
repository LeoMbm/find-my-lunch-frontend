import { Avatar, Dropdown } from "flowbite-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "universal-cookie";

// TODO: Get User info but at this moment when i tried i'm getting 401 unauthorized access - put this in app.js as props
axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.withCredentials = true;
const Header = ({ Logged, setLogged }) => {
  const [isActive, setIsActive] = useState(false);
  const [User, setUser] = useState({});
  const [Name, setName] = useState(null);
  const navigate = useNavigate();
  const changeStyle = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleSubmit = async (values) => {
    const response = await axios.post("/auth/logout").catch((err) => {
      console.log(err);
    });

    if (response) {
      sessionStorage.removeItem("JWT");
      setLogged(false);
      navigate("/");
    }
  };

  useEffect(() => {
    if (Logged) {
      axios
        .get("/user", {
          headers: { Authorization: `Bearer ${sessionStorage.getItem("JWT")}` },
        })
        .then((response) => {
          setUser(response.data.message);
        })
        .catch((error) => console.log(error));
    }
  }, [Logged]);
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
              {Logged ? (
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={<Avatar alt="User settings" rounded={true} />}
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                      {" "}
                      {User.first_name} {User.last_name}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {" "}
                      {User.email}{" "}
                    </span>
                  </Dropdown.Header>
                    <NavLink to="/orders">
                  <Dropdown.Item>
                      Orders History
                  </Dropdown.Item>
                    </NavLink>
                    <NavLink to="/settings">
                  <Dropdown.Item>
                      Settings
                  </Dropdown.Item>
                    </NavLink>
                  <Dropdown.Divider />
                  <button className="w-full h-full" onClick={handleSubmit}>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                  </button>
                </Dropdown>
              ) : (
                <>
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
                </>
              )}
              <button
                onClick={changeStyle}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={
                isActive
                  ? "w-full md:block md:w-auto"
                  : "hidden justify-between bg-gray-900 items-center w-full md:flex md:w-auto md:order-1"
              }
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-900 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    onClick={changeStyle}
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={changeStyle}
                    to="/restaurants"
                    className="block py-2 pr-4 pl-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Restaurants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={changeStyle}
                    to="/maps"
                    className="block py-2 pr-4 pl-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Maps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={changeStyle}
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
