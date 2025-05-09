import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useState } from "react";

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #000; /* Fallback color while image loads */
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  .gatsby-image-wrapper {
    height: 100% !important;
    width: 100% !important;
  }

  img {
    object-fit: cover !important;
    object-position: center !important;
    height: 100% !important;
    width: 100% !important;
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 1rem;
  z-index: 2;
  width: 90%;
  max-width: 600px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
  
  img {
    height: auto;
    max-width: 100%;
    min-width: 280px;
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
  const [contentVisible, setContentVisible] = useState(false);
  
  useEffect(() => {
    // Delay showing the content to ensure background image has time to properly load and render
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <HeroWrapper>
        <BackgroundImageWrapper>
          <StaticImage
            src="../images/hands.png"
            alt="Sculpture of Hands"
            layout="fullWidth"
            placeholder="blurred"
            loading="eager" /* Force high priority loading */
            objectFit="cover"
            objectPosition="center"
            style={{ 
              position: "absolute",
              height: "100%", 
              width: "100%"
            }}
          />
        </BackgroundImageWrapper>
        
        <OverlayContent visible={contentVisible}>
          <LogoWrapper>
            <StaticImage
              src="../images/logo_circle.png"
              alt="Orchard Church Logo"
              placeholder="blurred"
              width={2000}
              loading="eager" /* Force high priority loading */
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