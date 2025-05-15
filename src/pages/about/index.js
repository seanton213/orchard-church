import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";
import { Link } from "gatsby";

const PageWrapper = styled.div`
  padding: 3rem 1.5rem;
  text-align: center;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--color-brown);
    margin-bottom: 1.5rem;
    position: relative;
    border-bottom: 2px solid var(--color-orange);
    text-align: center;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-darkbrown, #3e3e3e);
    margin: 1.5rem 0 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 2rem;

  a {
    color: var(--color-orange, #e67e22);
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-darkbrown, #3e3e3e);
      text-decoration: underline;
    }
  }
`;

const About = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Who We Are</h1>
          <p>
            We are a community dedicated to faith, service, and love. Learn more
            about our history, beliefs, and leadership below.
          </p>
          <Links>
            <Link to="/about/history">Our History</Link>
            <Link to="/about/beliefs">Our Beliefs</Link>
            <Link to="/about/leadership">Our Leadership</Link>
          </Links>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default About;
