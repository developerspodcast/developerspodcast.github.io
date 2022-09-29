import React, { useState } from 'react';
import * as styles from './slidein.module.css';
import logo from './logo.svg';
import { Link } from 'gatsby';

const SlideIn = ({ children, visible }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${styles.top} ${visible ? styles.visible : ''}`}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt='Devlopers! logo' />
        </Link>
        <button onClick={() => setOpen(true)} className={styles.button}>
          =
        </button>
      </div>
      <nav className={`${styles.container} ${!open ? '' : styles.open}`}>
        <button
          onClick={() => setOpen(false)}
          className={`${styles.button} ${styles.closeButton}`}
        >
          x
        </button>
        {children}
      </nav>
    </>
  );
};

export default SlideIn;
