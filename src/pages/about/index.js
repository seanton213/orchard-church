import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";
import { Link } from "gatsby";

const PageWrapper = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

const Links = styled.div`
  margin-top: 2rem;
  a {
    display: block;
    margin: 1rem 0;
    color: #007bff;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
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
