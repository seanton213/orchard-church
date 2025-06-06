import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 4rem 1.5rem;
  background-color: var(--color-beige);
  text-align: center;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--color-brown);
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--color-orange);
    padding-bottom: 0.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.25rem;
    color: var(--color-darkbrown, #3e3e3e);
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: var(--color-darkbrown, #3e3e3e);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const beliefs = [
  {
    title: "1. The Word of God",
    text: "We believe the Scriptures of the Old and New Testaments are the inspired Word of God, inerrant in the original writings, complete as the revelation of God’s will for salvation, and the supreme and final authority in all matters to which they speak.",
  },
  {
    title: "2. The Trinity",
    text: "We believe in one God, Creator and Sustainer of all things, eternally existing in three persons: Father, Son and Holy Spirit; we believe that these are equal in every distinct perfection and they execute distinct but harmonious offices in the work of creation, providence, and redemption.",
  },
  {
    title: "3. God the Father",
    text: "We believe in God the Father: an infinite, personal Spirit, perfect in holiness, wisdom, power, and love. We believe that He concerns Himself mercifully in the affairs of humanity, that He hears and answers prayer, and that He saves from sin and death all who come to Him through Jesus Christ.",
  },
  {
    title: "4. Jesus Christ",
    text: "We believe that Jesus Christ is God’s eternal Son, who has precisely the same nature, attributes, and perfections as God the Father and God the Holy Spirit. He is true God and true man, conceived by the Holy Spirit and born of the virgin Mary. We believe in His sinless life, His substitutionary atonement, His bodily resurrection, His ascension, His priestly intercession, and His visible return.",
  },
  {
    title: "5. The Holy Spirit",
    text: "We believe in the Holy Spirit, His personality and His work in regeneration, sanctification, and preservation. His ministry is to glorify the Lord Jesus Christ, redeem the lost, and empower the believer for godly living and service.",
  },
  {
    title: "6. Man",
    text: "We believe God originally created persons, male and female, in His image and free from sin. All people are now sinners by nature and choice and are spiritually dead. Those who repent and trust Jesus Christ as Savior are regenerated by the Holy Spirit.",
  },
  {
    title: "7. Salvation",
    text: "We believe in salvation by grace through faith in the Lord Jesus Christ. This salvation, based on God’s sovereign grace, was purchased by Jesus Christ and is received by faith, apart from merit, works, or ritual. It leads to righteous living, good works, and social concern.",
  },
  {
    title: "8. The Church",
    text: "We believe the Church is the spiritual body of which Christ is the head. The true Church includes all born-again believers. Local churches gather for worship, instruction, evangelism, and service. We practice believer’s baptism and the Lord’s Supper. We believe in the interdependence of churches and mutual submission in love.",
  },
];

const Beliefs = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>What We Believe</h1>
          {beliefs.map(({ title, text }) => (
            <div key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Beliefs" />;

export default Beliefs;
