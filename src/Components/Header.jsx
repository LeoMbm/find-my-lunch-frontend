import React from "react";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";

const Header = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar fluid={true} >
        <Navbar.Brand href="/">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/fork-and-knife-with-plate_1f37d-fe0f.png"
            className="mr-3 h-6 sm:h-9"
            alt="Find My Lunch"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Find My Lunch
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Sign Up</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/restaurants">Restaurants</Navbar.Link>
          <Navbar.Link href="/maps">Maps</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
