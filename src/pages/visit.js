import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import { Link } from "gatsby";

const PageWrapper = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    position: relative;
    border-bottom: 2px solid var(--color-orange);
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
    color: #333;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #555;
    margin-top: 1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Visit = () => {
  return (
    <Layout>
      <PageWrapper>
        <Section>
          <h1>Visit Us</h1>

          <h2>Sunday Mornings</h2>
          <p>
            <strong>Location:</strong> 1054 Broadway St, Chico
            <br />
            <strong>Time:</strong> 9:00 AM
          </p>
          <p>
            We use the middle school’s common area as our worship center. Expect
            live music, a sermon, communion once a month, and the opportunity to
            connect with others.
          </p>
          <p>
            <strong>Orchard Grove:</strong> Our Children’s Ministry offers
            Sunday School for ages 0–5th grade during the service. Children stay
            with parents for opening worship songs, then are dismissed.
          </p>
          <p>
            <Link to="/ministry">Learn more about Orchard Grove →</Link>
          </p>
          
          <hr></hr>

          <h2>Sunday Evenings: Church On The Street (COTS)</h2>
          <p>
            <strong>Location:</strong> 411 Main Street (City Hall Building &
            “Our Hands” Statue)
            <br />
            <strong>Time:</strong> 5:00 PM (Nov–Feb), 6:00 PM (Mar–Oct)
          </p>
          <p>
            For over 15 years, Orchard Church has served those experiencing
            homelessness or economic hardship by sharing a meal and connection
            in downtown Chico. Expect tables set up in front of City Hall, a
            meal, and time spent in service and fellowship.
          </p>
          <p>
            <Link to="/ministry">Learn more about COTS →</Link>
          </p>
          
          <hr></hr>
          
          <h2>Watch on YouTube</h2>
          <p>
            You can find sermons, worship, and updates on our official YouTube channel.
          </p>
          <p>
            <a
              href="https://www.youtube.com/@orchardchurchofchicoca8076/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Orchard Church on YouTube →
            </a>
          </p>
          
          <hr></hr>
          
          <h2>Men’s Bible Study</h2>
          <p>
            <strong>When:</strong> Every Monday (unless posted) at 6:00 PM
            <br />
            <strong>Location:</strong> 642 W 4th Ave
          </p>
          <p>
            We read through a book of the Bible and discuss how to live
            faithfully as men who follow Jesus with humility and strength.
          </p>
          
          <hr></hr>

          <h2>Wednesday Bible Study</h2>
          <p>
            <strong>When:</strong> Every Wednesday (unless posted) <br />
            <strong>Dinner:</strong> 6:00 PM
            <br />
            <strong>Study:</strong> 6:30 PM
            <br />
            <strong>Location:</strong> 642 W 4th Ave
          </p>
          <p>
            Join us for a free meal and a time of worship, prayer, and in-depth
            Bible study. Come as you are.
          </p>
          <p>
            <Link to="/ministry">Learn more about Wednesday Nights →</Link>
          </p>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Visit" />;

export default Visit;
