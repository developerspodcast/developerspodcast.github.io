import React, { useState } from "react";
import styles from "./slidein.module.css";
import logo from "./logo.svg";

const SlideIn = ({ children, visible }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${styles.top} ${visible ? styles.visible : ""}`}>
        <img className={styles.logo} src={logo}></img>
        <button onClick={() => setOpen(true)} className={styles.button}>
          =
        </button>
      </div>
      <nav className={`${styles.container} ${!open ? "" : styles.open}`}>
        <button
          onClick={() => setOpen(false)}
          className={`${styles.button} ${styles.closeButton}`}
        >
          x
        </button>
        {children}
      </nav>
    </>
  );
};

export default SlideIn;
