import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const About = () => {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default About;
