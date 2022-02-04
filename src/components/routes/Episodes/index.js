import React, { useState, useEffect } from "react";
import Loader from "../../common/Loader";
import styles from "./episodes.module.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const task = async () => {
      let response;
      setLoading(true);
      try {
        response = await fetch(
          "https://developers-podcast-backend.azurewebsites.net/api/episodes"
        );
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
      if (response.ok) {
        var json = await response.json();
        setEpisodes(json);
        setLoading(false);
      }
    };
    task();
  }, []);

  return (
    <div className={styles.episodes}>
      {loading && <Loader loadingText="Laddar in nya spännande avsnitt" />}
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
