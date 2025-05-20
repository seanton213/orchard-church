import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useState } from "react";

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* allow it to grow naturally if needed */
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const OverlayContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  padding: 2rem;
  text-align: center;
  color: white;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  width: 100%;

  @media (max-height: 700px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  .gatsby-image-wrapper {
    max-width: 800px;
    width: 100%;
    height: auto;
  }
`;

const HeroText = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;

const SubText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);

  // Add effect to ensure overlay displays correctly after everything loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <HeroWrapper>
        <BackgroundImage>
          <StaticImage
            src="../images/hands.png"
            alt="Sculpture of Hands"
            layout="fullWidth"
            placeholder="blurred"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            onLoad={() => setLoaded(true)}
          />
        </BackgroundImage>

        <OverlayContent loaded={loaded}>
          <LogoWrapper>
            <StaticImage
              src="../images/logo_circle.png"
              alt="Orchard Church Logo"
              placeholder="blurred"
              width={800}
            />
          </LogoWrapper>

          <HeroText>Sunday Morning Worship</HeroText>
          <SubText>9:00 AM — 1054 Broadway St, Chico</SubText>

          <HeroText>Church On the Street</HeroText>
          <SubText>6:00 PM — 411 Main St, Chico</SubText>
        </OverlayContent>
      </HeroWrapper>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
