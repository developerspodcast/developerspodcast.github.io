import React from "react";
import styles from "./hero.module.css";
import background from "./background.svg";

const Hero = () => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.tagline}>
        <h1>Developers!</h1>
        <h2>En podd om mer än bara kod</h2>
      </div>
    </div>
  );
};

export default Hero;
