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
  max-width: 1000px;
  margin: 0 auto;
`;

const MinistryCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  p {
    color: #666;
  }
`;

const ImageContainer = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  margin: -0.5rem -0.5rem 0.5rem;

  .gatsby-image-wrapper {
    display: block;
    width: 100%;
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
          <ImageContainer>
            <StaticImage
              src="../images/cots.jpg"
              alt="Church on the Street"
              placeholder="blurred"
              aspectRatio={16 / 9}
            />
          </ImageContainer>
          <h2>Church on the Street</h2>
          <p>More info coming soon</p>
        </MinistryCard>

        <MinistryCard>
          <ImageContainer>
            <StaticImage
              src="../images/house.png"
              alt="Orchard House"
              placeholder="blurred"
              aspectRatio={16 / 9}
            />
          </ImageContainer>
          <h2>Orchard House</h2>
          <p>More info coming soon</p>
        </MinistryCard>

        <MinistryCard>
          <ImageContainer>
            <StaticImage
              src="../images/grove.png"
              alt="Orchard Grove"
              placeholder="blurred"
              aspectRatio={16 / 9}
            />
          </ImageContainer>
          <h2>Orchard Grove</h2>
          <p>More info coming soon</p>
        </MinistryCard>

        <MinistryCard>
          <ImageContainer>
            <StaticImage
              src="../images/wednesday.png"
              alt="Wednesday Night Bible Study"
              placeholder="blurred"
              aspectRatio={16 / 9}
            />
          </ImageContainer>
          <h2>Wednesday Night Bible Study</h2>
          <p>More info coming soon</p>
        </MinistryCard>

        <MinistryCard>
          <ImageContainer>
            <StaticImage
              src="../images/mens-bible-study.png"
              alt="Men's Bible Study"
              placeholder="blurred"
              objectFit="contain"
              height={200}
            />
          </ImageContainer>
          <h2>Men's Bible Study</h2>
          <p>More info coming soon</p>
        </MinistryCard>

        <MinistryCard>
          <ImageContainer>
            <StaticImage
              src="../images/christmas.png"
              alt="Christmas Wish"
              placeholder="blurred"
              aspectRatio={16 / 9}
            />
          </ImageContainer>
          <h2>Christmas Wish</h2>
          <p>More info coming soon</p>
        </MinistryCard>
      </MinistryGrid>
    </Layout>
  );
};

export const Head = () => <Seo title="Ministry" />;

export default Ministry;
