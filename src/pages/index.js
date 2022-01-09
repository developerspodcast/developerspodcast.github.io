import React from "react";
import TwoSection from "../components/common/TwoSection";
import Layout from "../components/Layout";
import sofia from "../images/sofia.svg";
import madde from "../images/madde.svg";
import Content from "../components/common/Content";

const IndexPage = () => {
  return (
    <Layout>
      <Content>
        <div className="container">
          <h2 className="mb-1">Om podden</h2>
          <p>
            I podden Developers! får ni följa med oss, Sofia och Madde, på allt
            inom mjukvaruutveckling. Vi arbetar som utvecklare men podden
            handlar om mer än bara kod!
          </p>
          <p>
            Vi träffar spännade gäster, testar nya teknologier, söker
            inspiration och tar upp aktuella ämnen.
          </p>
        </div>
        <TwoSection
          firstSection={
            <img
              src={sofia}
              alt="Bild på Sofia. Sofia har långt blont hår, en grön tröja och en kopp med ett git-träd på."
            ></img>
          }
          secondSection={
            <div>
              <p>
                Sofia är en utvecklare som drivs av glädjen av att få skapa
                bättre produkter, starkare relationer och utvecklas för varje
                dag som går. Hon har erfarenhet att bygga produkter för både små
                och stora företag och är som vassast när hon får vara med tidigt
                i product-discovery fasen.
              </p>
              <p>Pratar helst om: hållbarhet inom IT, husdjur och elbilar</p>
              <p>Favoritmat: italienskt och asiatiskt</p>
            </div>
          }
        ></TwoSection>

        <TwoSection
          firstSection={
            <div>
              <p>
                Madde är 30 år, bor i Malmö och jobbar som utvecklare sen 2014.
                Programmering ligger henne varmt om hjärtat eftersom det är en
                möjlighet att få skapa <em>någonting</em> från{" "}
                <em>ingenting</em> och den stora glädjen är att som team få
                leverera produkter som skapar ett värde för användarna.
              </p>
              <p>
                Pratar helst om: personlig utveckling, inkludering och träning
              </p>
              <p>Favoritmat: hamburgare</p>
            </div>
          }
          secondSection={
            <img
              src={madde}
              alt="Bild på Madde. Madde har långt brunt hår, gul tröja och håller i en laptop med en ananas som logga."
            ></img>
          }
        ></TwoSection>
      </Content>
    </Layout>
  );
};

export default IndexPage;
