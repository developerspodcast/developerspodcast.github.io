import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Button from '../Button';
import * as styles from './cookieBanner.module.css';

const CookieBanner = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['acceptCookies']);

  const [acceptedCookie, setAcceptedCookie] = useState(
    cookies.acceptCookies === undefined ? false : true
  );

  const handleAcceptCookies = () => {
    setCookie('acceptCookies', true, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    setAcceptedCookie(true);
  };

  if (acceptedCookie) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p>
          Vi använder cookies på hemsidan!{' '}
          <span role='img' aria-label='cookie'>
            🍪
          </span>
        </p>
        <p>
          Genom att använda denna sida eller stänga detta meddelande accepterar
          du vår{' '}
          <Link to='/cookies' title='Cookie Policy'>
            cookiepolicy
          </Link>
          .
        </p>
      </div>

      <Button onClick={handleAcceptCookies} className={styles.button}>
        Ok
      </Button>
    </div>
  );
};

export default CookieBanner;
