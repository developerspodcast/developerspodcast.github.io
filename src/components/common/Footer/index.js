import React from "react";
import styles from "./footer.module.css";
import { Instagram, Facebook, Rss } from "./Icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.social}
        href="https://instagram.com/developerspodcast"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram className={styles.icon} />
      </a>
      <a
        className={styles.social}
        href="https://facebook.com/developerspodcast"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook className={styles.icon} />
      </a>
      <a
        className={styles.social}
        href="https://feeds.transistor.fm/developerspodcast"
        target="_blank"
        rel="noreferrer"
      >
        <Rss className={styles.icon} />
      </a>
    </footer>
  );
};

export default Footer;
