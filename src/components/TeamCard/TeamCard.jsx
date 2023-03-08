import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TeamCard.scss";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

function TeamCard() {
  return (
    <div
      className="teamcard-container"
      //   style={{ backgroundImage: `url(${})` }}
    >
      <div className="teamcard-header">
        <h4>Name</h4>
      </div>
      <div className="teamcard-footer">
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="social">
          <AiOutlineTwitter className="social-icon" />
          <AiFillInstagram className="social-icon" />
          <AiFillFacebook className="social-icon" />
          <AiFillLinkedin className="social-icon" />
        </div>
      </div>
      <motion.div
        whileHover={{ opacity: [0, 1] }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          staggerChildren: 0.5,
        }}
        className="teamcard-hover"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu
        quam, iaculis sed nulla eu, tincidunt lobortis nunc. Praesent euismod
        maximus mauris in auctor.
      </motion.div>
    </div>
  );
}

export default TeamCard;
