import React, { useState } from "react";
import Button from "../../common/Button";
import styles from "./episode.module.css";

const Episode = ({ episode, ...props }) => {
    const [showDescription, setShowDescription] = useState(false);
    const toggleDisplay = () => setShowDescription(!showDescription);
    return <div className={styles.episode} {...props}>
        <div className={styles.header}>
            <h2 className={styles.title}>{episode.title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: episode.embedCode }}></div>
        <Button small onClick={toggleDisplay}>{!showDescription ? 'Avsnittsinfo' : 'Stäng'}</Button>
        {showDescription && <div className={styles.description} dangerouslySetInnerHTML={{ __html: episode.description }}></div>}
    </div>
}
export default Episode

