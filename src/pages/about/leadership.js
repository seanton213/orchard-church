import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const PageWrapper = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;

const Leadership = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Our Leadership</h1>
          <p>
            Meet our pastor, Casey Moreno, a passionate leader dedicated to
            guiding our church community.
          </p>
          <ImageWrapper>
            <StaticImage
              src="../../images/pastor.jpg"
              alt="Pastor"
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
