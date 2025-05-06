import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useState } from "react";

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  .gatsby-image-wrapper {
    height: 100% !important;
    width: 100% !important;
  }

  img {
    object-fit: cover !important;
    height: 100% !important;
    width: 100% !important;
    position: absolute !important;
    top: 0;
    left: 0;
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
`;

const LogoWrapper = styled.div`
  img {
    height: auto;
    max-width: 100%;
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
  return (
    <Layout>
      <HeroWrapper>
        <BackgroundImage>
          <StaticImage
            src="../images/hands.png"
            alt="Sculpture of Hands"
            layout="fullWidth"
            placeholder="blurred"
            objectFit="cover"
            style={{ 
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            onLoad={() => setLoaded(true)}
          />
        </BackgroundImage>

        {loaded && (
          <OverlayContent>
            <LogoWrapper>
              <StaticImage
                src="../images/logo_circle.png"
                alt="Orchard Church Logo"
                placeholder="blurred"
              />
            </LogoWrapper>
  
            <HeroText>Sunday Morning Worship</HeroText>
            <SubText>9:00 AM — 1054 Broadway St, Chico</SubText>
  
            <HeroText>Church On the Street</HeroText>
            <SubText>6:00 PM — 411 Main St, Chico</SubText>
          </OverlayContent>
        )}
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
