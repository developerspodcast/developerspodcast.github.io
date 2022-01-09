import React from "react";
import Content from "../components/common/Content";
import Layout from "../components/Layout";
import Episodes from "../components/routes/Episodes";

const EpisodesPage = () => {
  return (
    <Layout>
      <Content>
        <Episodes></Episodes>
      </Content>
    </Layout>
  );
};

export default EpisodesPage;
