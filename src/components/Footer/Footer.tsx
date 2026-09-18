import "./Footer.css";

interface FooterLink {
  /**
   * Text shown to the user.
   */
  label: string;

  /**
   * URL or page path the link points to.
   */
  href: string;
}

interface FooterProps {
  /**
   * Text shown as the copyright message.
   */
  copyright: string;

  /**
   * Links displayed in the footer navigation.
   */
  links: FooterLink[];
}

/**
 * A semantic website footer containing copyright text and navigation links.
 */
function Footer({ copyright, links }: FooterProps) {
  return (
    <footer className="footer">
      <p className="footer__copyright">{copyright}</p>

      <nav aria-label="Footer navigation">
        <ul className="footer__links">
          {links.map((link) => (
            <li key={link.href}>
              <a className="footer__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;