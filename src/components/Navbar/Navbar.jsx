"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <div className="n-wrapper">
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left Side of nav bar */}
          <div className="n-logo">
            <span>VEENA AGENCIES</span>
          </div>

          {/* Right Side of nav bar */}
          <div className="n-right">
            <div className="n-menu">
              {" "}
              {/* maybe need to add home in nav bar */}
              <span>Who are we</span>
              <span>Trusted Partners</span>
              <span>Industry Recognition</span>
              <span>Delivery Network</span>
            </div>
            <div className="contactus-button">Contact Us</div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="nm-container">
        {/* Logo */}
        <span>VEENA AGENCIES</span>

        {/* MENU ICON */}
        {!mobileMenuOpened ? (
          <BiMenu size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/*mobile menu*/}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <span>Who are we</span>
          <span>Trusted Partners</span>
          <span>Industry Recognition</span>
          <span>Delivery Network</span>
          <div className="m-contactus-button">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
