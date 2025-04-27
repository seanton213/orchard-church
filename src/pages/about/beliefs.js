import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

const Beliefs = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Our Beliefs</h1>
          <p>
            Orchard Church is a diverse, loving group of people passionately following Jesus, growing to love God and their community. We are a group that exists to see God impact individual lives with His hope, truth, grace and love.
          </p>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Beliefs" />;

export default Beliefs;
