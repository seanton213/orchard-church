import * as React from "react"

const Footer = () => (
  <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © {new Date().getFullYear()} &middot; Orchard Church
  </footer>
);

export default Footer;