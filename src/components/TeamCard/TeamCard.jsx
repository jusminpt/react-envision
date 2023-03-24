import React from "react";
import { motion } from "framer-motion";
import "./TeamCard.scss";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

function TeamCard({ teamData: { img, name, position, description } }) {
  return (
    <div
      className="teamcard-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${img})`,
      }}
    >
      <div className="teamcard-header">
        <h4>{name}</h4>
      </div>
      <div className="teamcard-footer">
        <p>{position}</p>
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
        <p>{description}</p>
      </motion.div>
    </div>
  );
}

export default TeamCard;
