import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 3rem;
  text-align: left;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    border-bottom: 2px solid var(--color-orange);
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-top: 1.5rem;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Contact Us</h1>
          <p>
            <strong>Phone:</strong> 530-282-5053 (call or text)
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@orchardchurch.com">info@orchardchurch.com</a>
            <br />
            <strong>Mail:</strong> PO BOX 1608 Chico, CA 95927
            <br />
            <strong>Office:</strong> 642 W 4th Ave Chico, CA 95926
            <br />
            <strong>Sunday Worship:</strong> 1054 Broadway Street Chico, CA
            95928
          </p>
          <p>
            <strong>Stay in Touch:</strong>
            <br />
            <a
              href="https://mailchi.mp/9a6d53377f18/orchard-church-email-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up for our email/text updates
            </a>
          </p>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact" />;

export default Contact;
