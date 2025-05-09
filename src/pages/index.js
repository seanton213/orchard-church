import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useState } from "react";

// Fix the height to be more specific - not full viewport height
const HeroWrapper = styled.div`
  position: relative;
  height: 80vh; /* Reduced from 100vh to avoid taking the entire page */
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: #000; /* Fallback color while image loads */
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Pre-position overlay content to center immediately
const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%; /* Always centered */
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 1rem;
  z-index: 2;
  width: 90%;
  max-width: 600px;
  /* Hide content until loaded but keep it positioned correctly */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  /* Position container before content is shown */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 600px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const HeroText = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  color: white; /* Force white text regardless of theme */
`;

const SubText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  color: white; /* Force white text regardless of theme */
`;

const IndexPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  // Wait for component to mount completely
  useEffect(() => {
    // Set a timer to ensure everything is loaded and positioned
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 300); // Slightly longer delay to ensure proper positioning

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <HeroWrapper>
        <BackgroundContainer>
          <StaticImage
            src="../images/hands.png"
            alt="Sculpture of Hands"
            layout="fullWidth"
            placeholder="blurred"
            loading="eager"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
            }}
            imgStyle={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </BackgroundContainer>

        {/* Content is always positioned correctly, just hidden until loaded */}
        <OverlayContent isVisible={pageLoaded}>
          <LogoWrapper>
            <StaticImage
              src="../images/logo_circle.png"
              alt="Orchard Church Logo"
              placeholder="blurred"
              loading="eager"
              width={600}
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
