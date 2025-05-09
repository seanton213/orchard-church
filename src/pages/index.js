import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useEffect, useState } from "react";

// Global style to enforce consistent image rendering
const GlobalWrapper = styled.div`
  .hero-background {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;

    & > div {
      width: 100% !important;
      height: 100% !important;
    }

    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: center !important;
    }
  }
`;

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #000; /* Fallback color while image loads */
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 1rem;
  z-index: 10;
  width: 90%;
  max-width: 600px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 2000px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  .logo-image {
    width: 100% !important;
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
  const [imagesLoaded, setImagesLoaded] = useState({
    background: false,
    logo: false,
  });

  // Track loaded state of both images
  const handleBackgroundLoaded = () => {
    setImagesLoaded((prev) => ({ ...prev, background: true }));
  };

  const handleLogoLoaded = () => {
    setImagesLoaded((prev) => ({ ...prev, logo: true }));
  };

  // Only show content when both images are loaded and properly rendered
  useEffect(() => {
    let timer;

    if (imagesLoaded.background && imagesLoaded.logo) {
      // Additional delay to ensure proper rendering
      timer = setTimeout(() => {
        setContentVisible(true);
      }, 300);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [imagesLoaded]);

  // Backup timer in case image load events don't fire properly
  useEffect(() => {
    const backupTimer = setTimeout(() => {
      setContentVisible(true);
    }, 1500);

    return () => clearTimeout(backupTimer);
  }, []);

  return (
    <Layout>
      <GlobalWrapper>
        <HeroWrapper>
          {/* Background Image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <StaticImage
              src="../images/hands.png"
              alt="Sculpture of Hands"
              layout="fullWidth"
              placeholder="blurred"
              loading="eager"
              className="hero-background"
              imgClassName="hero-background-img"
              onLoad={handleBackgroundLoaded}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              imgStyle={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Overlay Content */}
          <OverlayContent visible={contentVisible}>
            <LogoWrapper>
              <StaticImage
                src="../images/logo_circle.png"
                alt="Orchard Church Logo"
                placeholder="blurred"
                loading="eager"
                className="logo-image"
                onLoad={handleLogoLoaded}
              />
            </LogoWrapper>

            <HeroText>Sunday Morning Worship</HeroText>
            <SubText>9:00 AM — 1054 Broadway St, Chico</SubText>

            <HeroText>Church On the Street</HeroText>
            <SubText>6:00 PM — 411 Main St, Chico</SubText>
          </OverlayContent>
        </HeroWrapper>
      </GlobalWrapper>
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
