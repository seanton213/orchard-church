import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const GiveWrapper = styled.section`
  text-align: center;
  padding: 5rem 2rem;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.25rem;
    color: #555;
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const GiveButton = styled.a`
  background-color: #ff9900;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.3s;
  &:hover {
    background-color: #e68a00;
  }
`;

const Give = () => {
  return (
      <Layout>
        <GiveWrapper>
          <h1>Support Orchard Church</h1>
          <p>Thank you for your generosity. Your gift helps us share hope with our community and beyond.</p>
          <GiveButton href="https://www.paypal.com/donate/?hosted_button_id=PEFXXU3ZNEQD6" target="_blank" rel="noopener noreferrer">
            Give Online
          </GiveButton>
        </GiveWrapper>
      </Layout>
    );
};

export const Head = () => <Seo title="Give" />;

export default Give;
