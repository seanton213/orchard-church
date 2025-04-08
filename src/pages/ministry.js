import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Ministry = () => {
  return (
    <Layout>
      <h1>Ministry Page</h1>
      <p>This is the Ministry page.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Ministry" />;

export default Ministry;
