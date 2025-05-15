import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const GiveWrapper = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background-color: var(--color-beige);
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--color-brown);
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--color-orange);
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    color: #444;
    max-width: 650px;
    margin: 0 auto 3rem;
    line-height: 1.7;
  }
`;

const PaypalButton = styled.a`
  display: inline-block;
  background-color: #ffc439;
  color: #111;
  padding: 0.75rem 2rem;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffb347;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #e6a133;
  }
`;

const Give = () => {
  return (
    <Layout>
      <GiveWrapper>
        <Section>
          <h1>Support Orchard Church</h1>
          <p>
            Your generosity helps Orchard Church continue to serve and share the
            love of Jesus with our community and the world. Thank you for
            partnering with us in ministry.
          </p>
          <PaypalButton
            href="https://www.paypal.com/donate/?hosted_button_id=PEFXXU3ZNEQD6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate with PayPal
          </PaypalButton>
        </Section>
      </GiveWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Give" />;

export default Give;
