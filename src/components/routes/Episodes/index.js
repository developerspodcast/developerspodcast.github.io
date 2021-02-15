import React from "react";
import Section from "../../common/Section";
import styles from "./episodes.module.scss";
import ReactAudioPlayer from "react-audio-player";

const Episodes = () => {
  const episodes = [
    {
      url: "https://media.transistor.fm/726e048b/ba70f6b0.mp3",
      name: "7. Kan du SOLID?",
    },
    {
      url: "https://media.transistor.fm/91c99a44/3fe33391.mp3",
      name: "6. Ta dig i mål!",
    },
    {
      url: "https://media.transistor.fm/2a867e9c/020f204a.mp3",
      name: "5. 2020 i backspegeln",
    },

    {
      url: "https://media.transistor.fm/92ca9be1/eb5d91de.mp3",
      name: "4. Vilse i tangentbordsträsket",
    },
    {
      url: "https://media.transistor.fm/b5d93ff5/c867cf2d.mp3",
      name: "3. Julkalendern",
    },
    {
      url: "https://media.transistor.fm/0698b342/dbf9daaa.mp3",
      name: "2. Fruktade programmeringsspråk?!",
    },
    {
      url: "https://media.transistor.fm/c7bd8c4a/df40d647.mp3",
      name: "1. $podd init",
    },
  ];

  return (
    <Section color="blue">
      <div className={styles.episodes}>
        {episodes.map((episode, index) => {
          return (
            <div className={styles.episode} key={index}>
              <h2>{episode.name}</h2>
              <ReactAudioPlayer src={episode.url} controls></ReactAudioPlayer>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Episodes;
