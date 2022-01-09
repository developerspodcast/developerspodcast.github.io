import React, { useState, useEffect } from "react";
import styles from "./episodes.module.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const task = async () => {
      let response;
      try {
        response = await fetch(
          "http://developers-podcast-backend.azurewebsites.net/api/episodes"
        );
      } catch (e) {
        console.log(e);
      }
      if (response.ok) {
        var json = await response.json();
        setEpisodes(json);
      }
    };
    task();
  }, []);

  return (
    <div className={styles.episodes}>
      {episodes.map((episode, index) => {
        return (
          <div className={styles.episode} key={index}>
            <h2>{episode.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: episode.embedCode }}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Episodes;
