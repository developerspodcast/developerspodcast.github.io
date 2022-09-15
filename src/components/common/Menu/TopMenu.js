import React from 'react';
import Content from '../Content';
import * as styles from './topmenu.module.css';
import logo from './logo.svg';
import { Link } from 'gatsby';

const TopMenu = ({ children, visible }) => {
  return (
    <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
      <Content className={styles.inner}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt='Devlopers! logo'></img>
        </Link>
        {children}
      </Content>
    </div>
  );
};

export default TopMenu;
