import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 2rem 2rem;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--color-orange);
  }
  p {
    font-size: 1.25rem;
    color: #555;
  }
`;

const MinistryGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 900px;
  margin: 0 auto;
`;

const MinistryCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
  img {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #666;
  }
`;

const Ministry = () => {
  return (
    <Layout>
      <HeroSection>
        <h1>Our Ministries</h1>
        <p>Find a place to connect, grow, and serve.</p>
      </HeroSection>

      <MinistryGrid>
        <MinistryCard>
          <StaticImage
            src="../images/youth-ministry.jpg"
            alt="Orchard Grove"
            placeholder="blurred"
            style={{ borderRadius: "1rem" }}
          />
          <h2>Orchard Grove</h2>
          <p>Helping kids</p>
        </MinistryCard>

        <MinistryCard>
          <StaticImage
            src="../images/women-ministry.jpg"
            alt="Church on the Street"
            placeholder="blurred"
            style={{ borderRadius: "1rem" }}
          />
          <h2>Church on the Street</h2>
          <p>Serving Our Community</p>
        </MinistryCard>

        <MinistryCard>
          <StaticImage
            src="../images/men-ministry.jpg"
            alt="Orchard House"
            placeholder="blurred"
            style={{ borderRadius: "1rem" }}
          />
          <h2>Orchard House</h2>
          <p>Equipping men to lead and serve with integrity.</p>
        </MinistryCard>

        <MinistryCard>
          <StaticImage
            src="../images/worship-ministry.jpg"
            alt="Wednesday Night Bible Study"
            placeholder="blurred"
            style={{ borderRadius: "1rem" }}
          />
          <h2>Wednesday Night Bible Study</h2>
          <p>Leading our church family into authentic worship</p>
        </MinistryCard>

        <MinistryCard>
          <StaticImage
            src="../images/worship-ministry.jpg"
            alt="Christmas Wish"
            placeholder="blurred"
            style={{ borderRadius: "1rem" }}
          />
          <h2>Christmas Wish</h2>
          <p>Christmas</p>
        </MinistryCard>
      </MinistryGrid>
    </Layout>
  );
};

export const Head = () => <Seo title="Ministry" />;

export default Ministry;
