import React from "react";
import styles from "./section.module.scss";

const Section = ({ color, children }) => {
  const colorMap = {
    blue: "#1f264a",
    pink: "#c62786",
    yellow: "#ffd405",
    gradient:
      "linear-gradient(0deg,rgba(198, 39, 134, 1) 0%,rgba(31, 38, 74, 1) 100%);",
  };

  return (
    <div style={{ background: colorMap[color] }} className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
