import React from 'react';
import './EmailBox.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { BiBorderRadius } from 'react-icons/bi'; 
import { motion } from "framer-motion";
import { containerVariants } from '@/src/utils/animation';

const EmailBox = () => {
  return (
    <motion.div 
    intial={{
      width: "0.5rem",
      borderRadius: "100%"
    }}
    whileInView={{
      width: "70%",
      borderRadius: "999px",
      transition: {
        type: "easeOut",
        duration: 1,
      },

    }}
    className="EmailBox">
        {/*Icon*/}
        <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        >
            <MdOutlineMailOutline size={30} color='rgb(150, 150, 150)'/>
        </motion.div>

        {/* input for email */}
        <motion.input 
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        type= "email"
        placeholder="Enter Email"
        />

        {/*Request Info Button*/}
        <motion.div 
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        className="requestInfo">
            Request Info
        </motion.div>
    </motion.div>
  );
};

export default EmailBox; // Ensure this is the only export statement
 