"use client";
import React from "react";
import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox"; // Default import without braces
import { HeroData } from "@/src/utils/data";
import { motion } from "framer-motion";
const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      trnasition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div className="h-wrapper">
      <div className="container">

      <img src="/hero/med.png" alt="arrow" className="h-arrow" />


        <div className="h-container">
          {/* Left Side of Hero */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variaants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variaants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side of Hero */}
          <div className="h-right">
            <div className="h-title">
              <span>
                Empowering your Pharmacy{" "}
                <span className="highlight-gray">
                  Business with Trusted Supplies
                </span>
              </span>
            </div>

            <div className="h-des">
              Delhi-NCR based distributors committed to providing a broad
              spectrum of essentials for healthcare providers
            </div>

            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
