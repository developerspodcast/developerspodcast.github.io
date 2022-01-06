import React from "react";
import styles from "./hero.module.css";
import background from "./background.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src={background}
        alt="Illustration av Sofia och Madde framför en rosa cirkel. Sofia är blond, har en grön tröja och håller i en kopp med ett git-träd. Madeleine är brunhårig, har en gul tröja och håller i sin dator med en ananaslogga."
      ></img>
      <div className={styles.tagline}>
        <h1>Developers!</h1>
        <h2>En podd om mer än bara kod</h2>
      </div>
    </div>
  );
};

export default Hero;
