import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const PageWrapper = styled.div`
  padding: 4rem 1.5rem;
  background-color: var(--color-beige);
  text-align: center;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--color-brown);
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--color-orange);
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: var(--color-darkbrown, #3e3e3e);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  .gatsby-image-wrapper {
    border-radius: 50%;
    overflow: hidden;
    width: 200px;
    height: 200px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 500px) {
    .gatsby-image-wrapper {
      width: 150px;
      height: 150px;
    }
  }
`;

const Leadership = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Our Leadership</h1>
          <p>
            Meet our pastor, Casey Moreno — a passionate, dedicated leader who
            shepherds Orchard Church with vision, compassion, and Christ-like love.
          </p>
          <ImageWrapper>
            <StaticImage
              src="../../images/pastor.jpg"
              alt="Pastor Casey Moreno"
              width={200}
              height={200}
              placeholder="blurred"
              layout="fixed"
            />
          </ImageWrapper>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Leadership" />;

export default Leadership;
