import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import Section from "../common/Section";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Helmet
        title="Developers! mer än bara kod"
        meta={[
          {
            name: "description",
            content:
              "En podcast om mer än bara kod. Podden drivs av Sofia Larsson och Madeleine Schönemann",
          },
          {
            name: "keywords",
            content: "Podcast, utveckling, mjukvaruutveckling, kod",
          },
        ]}
      >
        <html lang="sv" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#972b76" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
      <Hero></Hero>
      <Section color="blue">{children}</Section>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
