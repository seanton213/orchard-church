import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: var(--color-beige);
  position: relative;
  z-index: 1000;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 150px;
  max-height: 240px;
  overflow: visible;
  position: relative;
  z-index: 1;
`;

const SiteTitle = styled.span`
  color: var(--color-brown);
  font-family: var(--font-heading);
  font-weight: bold;
  font-size: 1.25rem;
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  padding-right: 1rem;
  z-index: 999;

  span {
    display: block;
    height: 3px;
    background-color: var(--color-brown);
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const NavWrapper = styled.nav`
  display: block;

  @media (max-width: 1024px) {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--color-beige);
    width: 100%;
    display: ${({ open }) => (open ? "block" : "none")};
    padding: 1rem 2rem;
    z-index: 999;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  gap: var(--space-4);
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  position: relative;

  &:hover ul {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: var(--color-brown);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-red);
  }

  &.active {
    color: var(--color-red);
    font-weight: 700;
    border-bottom: 2px solid var(--color-red);
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-beige);
  padding: var(--space-2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  z-index: 1000;

  @media (max-width: 1024px) {
    position: static;
    box-shadow: none;
    padding: 0;
    margin-left: 1rem;
    display: block;
  }

  a {
    color: var(--color-brown);
    display: block;
    white-space: nowrap;
    padding: 0.5rem 1rem;

    &:hover {
      background-color: var(--color-orange);
      color: var(--color-white);
    }
  }
`;

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <HeaderWrapper>
      <Container>
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <StaticImage
            src="../images/logo_color.png"
            alt="Church"
            placeholder="none"
            layout="fixed"
            width={300}
            style={{ objectFit: "contain", maxHeight: "300px" }}
          />
          <SiteTitle>{siteTitle}</SiteTitle>
        </Link>

        <Hamburger onClick={toggleMenu} aria-label="Toggle Menu">
          <span />
          <span />
          <span />
        </Hamburger>

        <NavWrapper open={menuOpen}>
          <Nav>
            <NavItem>
              <NavLink to="/" activeClassName="active">
                New Here?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" partiallyActive="active">
                About Us
              </NavLink>
              <DropdownMenu>
                <li>
                  <NavLink to="/about/history" partiallyActive="active">
                    Who We Are
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/beliefs" partiallyActive="active">
                    What We Believe
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/leadership" partiallyActive="active">
                    Leadership
                  </NavLink>
                </li>
              </DropdownMenu>
            </NavItem>
            <NavItem>
              <NavLink to="/ministry" activeClassName="active">
                Our Ministries
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/give" activeClassName="active">
                Give
              </NavLink>
            </NavItem>
          </Nav>
        </NavWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
