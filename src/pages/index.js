import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  background-image: url('../images/hands.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
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
  return (
    <Layout>
      <HeroWrapper>
        <BackgroundImage />

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
      </HeroWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
