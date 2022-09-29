import React from 'react';
import * as styles from './content.module.css';

const Content = ({ className, children }) => (
  <div className={`${styles.content} ${className ? className : ''}`}>
    {children}
  </div>
);

export default Content;
