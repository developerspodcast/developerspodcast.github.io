import React, { useState, useEffect } from "react";
import Button from "../../common/Button";
import Loader from "../../common/Loader";
import Episode from "./Episode";
import styles from "./episodes.module.css";

const LOAD_INCREMENT = 5;

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [displayedEpisodes, setDisplayedEpisodes] = useState(LOAD_INCREMENT);
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

  const loadMore = () => {
    setDisplayedEpisodes(currentAmount => currentAmount + LOAD_INCREMENT)
  }

  const hasMoreEpisodes = displayedEpisodes < episodes.length;

  return (
    <div className={styles.episodes}>
      {loading && <Loader loadingText="Laddar in nya spännande avsnitt" />}
      {episodes.slice(0, displayedEpisodes).map((episode, index) => {
        return (
          <Episode episode={episode} key={index} />
        );
      })}
      {hasMoreEpisodes &&
        <Button onClick={loadMore} className={styles.loadMore}>Ladda in fler avsnitt</Button>
      }
    </div>
  );
};

export default Episodes;
