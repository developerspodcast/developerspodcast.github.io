import React from "react";
import styles from "./hero.module.scss";
import logo from "./logo.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.logo} alt="Developers! logo" src={logo}></img>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#1f264a" points="0,100 100,0 100,100" />
      </svg>
    </div>
  );
};

export default Hero;
