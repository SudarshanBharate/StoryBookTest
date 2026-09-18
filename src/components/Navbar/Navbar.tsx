import "./Navbar.css";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  /**
   * Name shown as the website or product brand.
   */
  brand: string;

  /**
   * Links displayed in the navigation menu.
   */
  links: NavItem[];
}

/**
 * A semantic navigation bar for moving between pages or sections.
 */
function Navbar({ brand, links }: NavbarProps) {
  return (
    <header className="navbar-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="navbar__brand" href="/">
          {brand}
        </a>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a className="navbar__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;