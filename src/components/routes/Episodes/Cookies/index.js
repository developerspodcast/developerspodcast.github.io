import React from 'react';
import Layout from '../../../Layout';
import Content from '../../../common/Content';
import * as styles from './cookies.module.css';

const Cookies = () => {
  return (
    <Layout>
      <Content className={styles.container}>
        <h1>Cookiepolicy</h1>
        <h2>Vad är cookies?</h2>
        <p>
          Cookies är små textfiler som lagras i din webbläsare av sidor du
          besöker. De innehåller vanligtvis en hemsida och en identifierare.
          Cookies hjälper till att förbättra din upplevelse medan du navigerar
          på hemsidan, till exempel genom att komma ihåg varor du lagt i din
          varukorg.
        </p>
        <h2>Hur och varför använder vi cookies</h2>
        <p>
          Vi använder cookies från tredje part för att spåra hur du använder vår
          hemsida, för att till exempel kunna se vilka sidor du besöker och hur
          länge du är på varje sida. Det hjälper oss att få en bättre förståelse
          av hur folk använder vår sida och hur de kommer in på den.
        </p>
        <h2>Inaktivera cookies</h2>
        <p>
          Du kan förhindra att cookies placeras i dina webbläsarinställningar.
          Detta kan dock påverka funktionaliteten hos sidorna du besöker.
          Cookies på vår sida är inte nödvändiga, men kan förbättra din
          upplevelse.
        </p>
        <p>Så här raderar du cookies i olika webbläsare:</p>
        <ul>
          <li>
            <a href='https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US'>
              Firefox
            </a>
          </li>
          <li>
            <a href='https://support.google.com/chrome/answer/95647'>Chrome</a>
          </li>
          <li>
            <a href='https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac'>
              Safari
            </a>
          </li>
          <li>
            <a href='https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'>
              Microsoft Edge
            </a>
          </li>
        </ul>
      </Content>
    </Layout>
  );
};

export default Cookies;
