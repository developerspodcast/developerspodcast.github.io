import React, { useState, useEffect } from "react";
import SlideIn from "./SlideIn";
import styles from "./menu.module.css";
import TopMenu from "./TopMenu";
import { Link } from "gatsby";

const Menu = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        if (!visible) {
          setVisible(true);
        }
      } else {
        if (visible) {
          setVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  const renderItems = () => (
    <ul className={styles.inner}>
      <li>
        <Link to="/" className={styles.menuItem}>
          Hem
        </Link>
      </li>
      <li>
        <Link to="/avsnitt" className={styles.menuItem}>
          Avsnitt
        </Link>
      </li>
      <li>
        <a
          className={styles.menuItem}
          href="https://developerspodcast.myspreadshop.se/"
          target="_blank"
          rel="noreferrer"
        >
          Merch
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <SlideIn visible={visible}>{renderItems()}</SlideIn>
      <TopMenu visible={visible}>{renderItems()}</TopMenu>
    </>
  );
};

export default Menu;
