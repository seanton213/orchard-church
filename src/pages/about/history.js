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

const History = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Our History</h1>
          <p>
            Orchard Church started meeting publicly at the Jesus Center in 2003, with a heart to see God heal the hurting, love the lost, and restore the broken through the practical actions of His people.That heart has led us to the streets of Chico, where we meet the broken and into the homes of the lost, where we offer love to struggling families.
          </p>
          
          <p>
            Orchard Church is made up of people from all walks of life and backgrounds with a common desire to follow Jesus. College students, youth, young families, businessmen, homeless friends, all welcome each other into the unified pursuit of Jesus. We would love to welcome you on this journey with Jesus to grow as men and women who love God and love this community where God has placed us.
          </p>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="History" />;

export default History;
