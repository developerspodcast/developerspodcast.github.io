import React from "react";
import styles from "./loader.module.css";

const Loader = ({ loadingText }) => (
    <div className={styles.root}>
        <svg className={styles.icon} viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 0.00269318C20.1014 0.270775 0 20.5379 0 45.5C0 70.629 20.371 91 45.5 91C70.629 91 91 70.629 91 45.5C91 45.3331 90.9991 45.1665 90.9973 45H75.996C75.9987 45.1664 76 45.333 76 45.5C76 62.3447 62.3447 76 45.5 76C28.6553 76 15 62.3447 15 45.5C15 28.8223 28.3859 15.2711 45 15.004V0.00269318Z" fill="currentColor" />
        </svg>

        <p>{loadingText}</p>
    </div>
)
export default Loader
