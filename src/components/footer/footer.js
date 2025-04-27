import * as React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialLinks = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #333;
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  p {
    margin: 0.5rem 0;
    color: #333;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialLinks>
          <a
            href="https://www.facebook.com/profile.php?id=100064520416898"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
        </SocialLinks>
        <ContactInfo>
          <p>Email: info@orchardchurch.com</p>
          <p>Address: 1054 Broadway St, Chico, CA</p>
        </ContactInfo>
        <p>© {new Date().getFullYear()} &middot; Orchard Church</p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
