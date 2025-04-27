import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem 2rem;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
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
  max-width: 1200px;
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
              alt="Youth Ministry"
              placeholder="blurred"
              style={{ borderRadius: "1rem" }}
            />
            <h2>Youth Ministry</h2>
            <p>Helping students grow in their faith and community.</p>
          </MinistryCard>
  
          <MinistryCard>
            <StaticImage
              src="../images/women-ministry.jpg"
              alt="Women's Ministry"
              placeholder="blurred"
              style={{ borderRadius: "1rem" }}
            />
            <h2>Women's Ministry</h2>
            <p>Empowering women to deepen their relationship with Christ.</p>
          </MinistryCard>
  
          <MinistryCard>
            <StaticImage
              src="../images/men-ministry.jpg"
              alt="Men's Ministry"
              placeholder="blurred"
              style={{ borderRadius: "1rem" }}
            />
            <h2>Men's Ministry</h2>
            <p>Equipping men to lead and serve with integrity.</p>
          </MinistryCard>
  
          <MinistryCard>
            <StaticImage
              src="../images/worship-ministry.jpg"
              alt="Worship Ministry"
              placeholder="blurred"
              style={{ borderRadius: "1rem" }}
            />
            <h2>Worship Ministry</h2>
            <p>Leading our church family into authentic worship.</p>
          </MinistryCard>
        </MinistryGrid>
      </Layout>
    );
};

export const Head = () => <Seo title="Ministry" />;

export default Ministry;
