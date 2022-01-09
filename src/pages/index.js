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
          firstSection={<img src={sofia}></img>}
          secondSection={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec pellentesque purus. Nullam feugiat lorem id fringilla luctus.
              Donec at ex risus. Morbi venenatis massa porta nisi efficitur, id
              volutpat neque laoreet. Aenean malesuada luctus nisi eu imperdiet.
              Curabitur ut congue turpis. Morbi vel urna orci. Aliquam
              elementum, elit eu sodales efficitur, sapien ante pulvinar justo,
              in interdum magna velit non tellus. Nam vel ligula mattis, tempor
              odio quis, fermentum tellus. In non mi sed lorem interdum placerat
              eu sit amet lorem. Donec eleifend justo vel auctor mattis.
            </p>
          }
        ></TwoSection>

        <TwoSection
          secondSection={<img src={madde}></img>}
          firstSection={
            <p>
              Madde är 30 år, bor i Malmö och jobbar som fullstackutvecklare sen
              2014. Hennes stora passion är att forma team som tillsammans
              jobbar så effektivt som möjligt.
            </p>
          }
        ></TwoSection>
      </Content>
    </Layout>
  );
};

export default IndexPage;
