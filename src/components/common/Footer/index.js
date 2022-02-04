import React from "react";
import styles from "./footer.module.css";
import { Instagram, Facebook, Rss, Github } from "./Icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.social}
        href="https://instagram.com/developerspodcast"
        target="_blank"
        rel="noreferrer"
        title="Följ Developer Podcast på Instagram"
      >
        <Instagram className={styles.icon} />
      </a>
      <a
        className={styles.social}
        href="https://facebook.com/developerspodcast"
        target="_blank"
        rel="noreferrer"
        title="Diskutera avsnitten på Facebook"
      >
        <Facebook className={styles.icon} />
      </a>
      <a
        className={styles.social}
        href="https://github.com/developerspodcast/developerspodcast.github.io/tree/source"
        target="_blank"
        rel="noreferrer"
        title="Gör en PR till sajten på Github"
      >
        <Github className={styles.icon} />
      </a>
      <a
        className={styles.social}
        href="https://feeds.transistor.fm/developerspodcast"
        target="_blank"
        rel="noreferrer"
        title="Prenumerera på Developer Podcast via RSS"
      >
        <Rss className={styles.icon} />
      </a>
    </footer>
  );
};

export default Footer;
