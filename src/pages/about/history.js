import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 4rem 1.5rem;
  text-align: center;
  background-color: var(--color-beige);
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--color-brown);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--color-orange);
    padding-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: var(--color-darkbrown, #3e3e3e);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const History = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Who We Are</h1>
          <p>
            Orchard Church is a diverse, loving group of people passionately
            following Jesus, growing to love God and their community. We are a
            group that exists to see God impact individual lives with His hope,
            truth, grace, and love.
          </p>

          <h1>Our Vision</h1>
          <p>Growing Passionate, Productive Followers of Jesus Christ.</p>

          <h1>Our Mission</h1>
          <p>Loving Jesus, Loving People.</p>

          <h1>About Us</h1>
          <p>
            Orchard Church started meeting publicly at the Jesus Center in 2003,
            with a heart to see God heal the hurting, love the lost, and restore
            the broken through the practical actions of His people. That heart
            has led us to the streets of Chico, where we meet the broken, and
            into the homes of the lost, where we offer love to struggling
            families.
          </p>

          <p>
            Orchard Church is made up of people from all walks of life and
            backgrounds with a common desire to follow Jesus—college students,
            youth, young families, businesspeople, and homeless friends—all
            united in the pursuit of Jesus. We would love to welcome you on this
            journey to grow as men and women who love God and the community
            where He has placed us.
          </p>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="History" />;

export default History;
