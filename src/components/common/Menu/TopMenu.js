import React from "react";
import Content from "../Content";
import styles from "./topmenu.module.css";
import logo from "./logo.svg";

const TopMenu = ({ children, visible }) => {
  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <Content className={styles.inner}>
        <img className={styles.logo} src={logo} alt="Devlopers! logo"></img>
        {children}
      </Content>
    </div>
  );
};

export default TopMenu;
