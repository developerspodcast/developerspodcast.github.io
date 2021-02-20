import React from "react";
import Section from "../../common/Section";
import styles from "./episodes.module.scss";

const Episodes = () => {
  const episodes = [
    {
      id: "b032e11f",
    },
    {
      id: "726e048b",
    },
    {
      id: "91c99a44",
    },
    {
      id: "2a867e9c",
    },

    {
      id: "92ca9be1",
    },
    {
      id: "b5d93ff5",
    },
    {
      id: "0698b342",
    },
    {
      id: "c7bd8c4a",
    },
  ];

  return (
    <Section color="blue">
      <div className={styles.episodes}>
        {episodes.map((episode, index) => {
          return (
            <div className={styles.episode} key={index}>
              <h2>{episode.name}</h2>

              <iframe
                width="100%"
                height="180"
                frameborder="no"
                scrolling="no"
                seamless
                src={`https://share.transistor.fm/e/${episode.id}/dark`}
              ></iframe>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Episodes;
