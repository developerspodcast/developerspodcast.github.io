import React from "react";
import styles from "./section.module.scss";

const Section = ({ color, children }) => {
  const colorMap = {
    blue: "#1f264a",
    pink: "#972b76",
  };

  return (
    <div style={{ background: colorMap[color] }} className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
