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
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: auto;
  position: relative;
  overflow: visible;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  z-index: 999;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--color-brown);
    border-radius: 2px;
    transition: all 0.3s ease;
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
    left: 0;
    background-color: var(--color-beige);
    width: 100%;
    display: ${({ $open }) => ($open ? "block" : "none")};
    padding: 1rem 2rem;
    z-index: 998;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    align-items: flex-start;
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: flex-start;
  }

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
  
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0.5rem 0;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-beige);
  padding: var(--space-2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  z-index: 1000;

  @media (max-width: 1024px) {
    position: static;
    transform: none;
    box-shadow: none;
    padding: 0;
    margin: 0.5rem 0 0.5rem 1rem;
    width: 100%;
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
    
    @media (max-width: 1024px) {
      padding: 0.5rem 0;
    }
  }
`;

const LogoWrapper = styled.div`
  max-width: 300px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 160px;
  }
`;

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <HeaderWrapper>
      <Container>
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <LogoWrapper>
            <StaticImage
              src="../images/logo_color.png"
              alt="Church"
              placeholder="none"
              layout="constrained"
              width={300}
              style={{
                objectFit: "contain",
                maxHeight: "300px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </LogoWrapper>
        </Link>

        <Hamburger onClick={toggleMenu} aria-label="Toggle Menu">
          <span />
          <span />
          <span />
        </Hamburger>

        <NavWrapper $open={menuOpen}>
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
              <NavLink to="/visit" activeClassName="active">
                Visit
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" activeClassName="active">
                Contact
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