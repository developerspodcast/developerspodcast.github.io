import React, { useState, useEffect } from "react";
import SlideIn from "./SlideIn";
import styles from "./menu.module.css";
import TopMenu from "./TopMenu";

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
        <a className={styles.menuItem} href="/">
          Hem
        </a>
      </li>
      <li>
        <a className={styles.menuItem} href="/avsnitt">
          Avsnitt
        </a>
      </li>
      <li>
        <a
          className={styles.menuItem}
          href="https://developerspodcast.myspreadshop.se/"
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
