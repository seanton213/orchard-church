import * as React from "react";
import { FaFacebook } from "react-icons/fa";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--color-beige);
  padding: var(--space-5) var(--size-gutter);
  border-top: 1px solid var(--color-gray);
  margin-top: var(--space-5);
`;

const FooterContent = styled.div`
  max-width: var(--size-content);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  text-align: center;
  padding: 10px;
`;

const SocialLinks = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: var(--color-brown);
    transition: color 0.2s;

    &:hover {
      color: var(--color-red);
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: var(--space-3);

  p {
    margin: 0.5rem 0;
    color: var(--color-brown);
    font-size: var(--font-sm);
  }
`;

const Copyright = styled.p`
  color: var(--color-brown);
  margin-top: var(--space-3);
  font-size: var(--font-sm);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialLinks>
          <a
            href="https://www.facebook.com/groups/101547590674"
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
        <Copyright>
          © {new Date().getFullYear()} &middot; Orchard Church
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
