import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./header.css";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={{ backgroundColor: "var(--color-beige)" }}>
      <div
        style={{
          margin: `0 auto`,
          padding: `var(--space-4) var(--size-gutter)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          maxWidth: "1200px",
          width: "100%",
          height: "150px",
          maxHeight: "240px",
          overflow: "visible",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <StaticImage
            src="../../images/logo_color.png"
            alt="Church"
            placeholder="none"
            layout="fixed"
            width={300}
            style={{
              objectFit: "contain",
              maxHeight: "300px",
            }}
          />
          <span
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-heading)",
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}
          >
            {siteTitle}
          </span>
        </Link>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
          <ul className="nav">
            <li>
              <Link to="/" activeClassName="active">
                New Here?
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/about" partiallyActive="active">
                About Us
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about/history" partiallyActive="active">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link to="/about/beliefs" partiallyActive="active">
                    What We Believe
                  </Link>
                </li>
                <li>
                  <Link to="/about/leadership" partiallyActive="active">
                    Leadership
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/ministry" activeClassName="active">
                Our Ministries
              </Link>
            </li>
            <li>
              <Link to="/give" activeClassName="active">
                Give
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
