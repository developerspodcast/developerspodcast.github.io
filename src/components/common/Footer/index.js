import React from "react";
import styles from "./footer.module.css";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import rss from "./rss.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.social}
        href="https://instagram.com/developerspodcast"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="Instagram"></img>
      </a>
      <a
        className={styles.social}
        href="https://facebook.com/developerspodcast"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="Facebook"></img>
      </a>
      <a
        className={styles.social}
        href="https://feeds.transistor.fm/developerspodcast"
        target="_blank"
        rel="noreferrer"
      >
        <img src={rss} alt="RSS"></img>
      </a>
    </footer>
  );
};

export default Footer;
