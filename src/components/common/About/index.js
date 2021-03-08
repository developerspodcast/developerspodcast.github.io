import React from "react";
import styles from "./about.module.scss";
import madde from "./madde.svg";
import sofia from "./sofia.svg";

const About = () => (
  <div className={styles.wrapper}>
    <div className={styles.about}>
      <div className={styles.bio}>
        <img src={sofia}></img>
        <div className={styles.text}>
          <h1>Sofia</h1>
          <p>
            Soufflé sweet roll dragée topping gummi bears pudding lollipop chupa
            chups gingerbread. Pudding cotton candy cheesecake fruitcake candy
            canes dragée gummies. Dragée macaroon bonbon pie bonbon pie candy
            dragée tootsie roll.
          </p>
          <p>
            Icing soufflé oat cake carrot cake candy canes jelly-o sugar plum
            wafer. Chocolate bar cheesecake jelly beans brownie croissant
            gummies. Cotton candy sweet sesame snaps chocolate cake croissant
            candy gingerbread.
          </p>
          <p>
            Tootsie roll cake fruitcake toffee chocolate cake halvah. Pastry
            lollipop muffin chupa chups powder lemon drops apple pie caramels.
            Halvah bonbon croissant. Gummies lollipop marshmallow gummies
            topping carrot cake danish.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.about}>
      <div className={styles.bio}>
        <img src={madde}></img>
        <div className={styles.text}>
          <h1>Madde</h1>
          <p>
            Soufflé sweet roll dragée topping gummi bears pudding lollipop chupa
            chups gingerbread. Pudding cotton candy cheesecake fruitcake candy
            canes dragée gummies. Dragée macaroon bonbon pie bonbon pie candy
            dragée tootsie roll.
          </p>
          <p>
            Icing soufflé oat cake carrot cake candy canes jelly-o sugar plum
            wafer. Chocolate bar cheesecake jelly beans brownie croissant
            gummies. Cotton candy sweet sesame snaps chocolate cake croissant
            candy gingerbread.
          </p>
          <p>
            Tootsie roll cake fruitcake toffee chocolate cake halvah. Pastry
            lollipop muffin chupa chups powder lemon drops apple pie caramels.
            Halvah bonbon croissant. Gummies lollipop marshmallow gummies
            topping carrot cake danish.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
