import React from "react";
import TwoSection from "../components/common/TwoSection";
import Layout from "../components/Layout";
import sofia from "../images/sofia.svg";
import madde from "../images/madde.svg";

const IndexPage = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="mb-1">Om podden</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          pellentesque purus. Nullam feugiat lorem id fringilla luctus. Donec at
          ex risus. Morbi venenatis massa porta nisi efficitur, id volutpat
          neque laoreet. Aenean malesuada luctus nisi eu imperdiet. Curabitur ut
          congue turpis. Morbi vel urna orci. Aliquam elementum, elit eu sodales
          efficitur, sapien ante pulvinar justo, in interdum magna velit non
          tellus. Nam vel ligula mattis, tempor odio quis, fermentum tellus. In
          non mi sed lorem interdum placerat eu sit amet lorem. Donec eleifend
          justo vel auctor mattis. Donec blandit diam mauris, nec pretium lectus
          condimentum id. Duis sit amet efficitur lacus. Aliquam tincidunt et
          sapien sit amet gravida. Vivamus eleifend ipsum at velit ultrices, sit
          amet scelerisque urna hendrerit. Proin semper posuere eros, nec mollis
          tellus congue non.
        </p>
      </div>
      <TwoSection
        firstSection={<img src={sofia}></img>}
        secondSection={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            pellentesque purus. Nullam feugiat lorem id fringilla luctus. Donec
            at ex risus. Morbi venenatis massa porta nisi efficitur, id volutpat
            neque laoreet. Aenean malesuada luctus nisi eu imperdiet. Curabitur
            ut congue turpis. Morbi vel urna orci. Aliquam elementum, elit eu
            sodales efficitur, sapien ante pulvinar justo, in interdum magna
            velit non tellus. Nam vel ligula mattis, tempor odio quis, fermentum
            tellus. In non mi sed lorem interdum placerat eu sit amet lorem.
            Donec eleifend justo vel auctor mattis.
          </p>
        }
      ></TwoSection>

      <TwoSection
        secondSection={<img src={madde}></img>}
        firstSection={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            pellentesque purus. Nullam feugiat lorem id fringilla luctus. Donec
            at ex risus. Morbi venenatis massa porta nisi efficitur, id volutpat
            neque laoreet. Aenean malesuada luctus nisi eu imperdiet. Curabitur
            ut congue turpis. Morbi vel urna orci. Aliquam elementum, elit eu
            sodales efficitur, sapien ante pulvinar justo, in interdum magna
            velit non tellus. Nam vel ligula mattis, tempor odio quis, fermentum
            tellus. In non mi sed lorem interdum placerat eu sit amet lorem.
            Donec eleifend justo vel auctor mattis.
          </p>
        }
      ></TwoSection>
    </Layout>
  );
};

export default IndexPage;
