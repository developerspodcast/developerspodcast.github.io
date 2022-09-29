import React from 'react';
import * as styles from './button.module.css';

const Button = ({ className, children, small, ...props }) => {
  let classes = className ? styles.root + ' ' + className : styles.root;
  if (small) {
    classes += ' ' + styles.small;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
export default Button;
