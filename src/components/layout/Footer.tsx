import { ArrowUp, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { navigation, official } from "../../data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="#home"
              aria-label="Tulas International School — back to top"
            >
              <img
                src="/images/footer-logo.png"
                width="203"
                height="79"
                alt="Tulas International School"
                loading="lazy"
              />
            </a>
            <p>
              A place to learn.
              <br />A world to discover.
            </p>
            <a href={official.home} className="official-link">
              Visit the official website{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div>
            <h2>Explore Tulas</h2>
            <nav aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#admissions">Admissions</a>
            </nav>
          </div>
          <div className="footer-contact">
            <h2>Come say hello</h2>
            <address>
              <a href={official.map}>
                <MapPin size={17} aria-hidden="true" />
                <span>
                  Dhoolkot, P.O – Selaqui, Chakrata Road,
                  <br />
                  Dehradun – 248011, Uttarakhand, India
                </span>
              </a>
              <a href={`mailto:${official.email}`}>
                <Mail size={17} aria-hidden="true" />
                {official.email}
              </a>
              <a href={official.phoneHref}>
                <Phone size={17} aria-hidden="true" />
                {official.phone} <span className="sr-only">Admissions</span>
              </a>
            </address>
            <p className="landlines">
              School office: <a href="tel:+911352699444">0135-2699444</a>
              <span> / </span>
              <a href="tel:+911352699666">0135-2699666</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Tulas International School. Assessment
            redesign.
          </p>
          <div>
            <a href="https://tis.edu.in/privacy-policy/">Privacy policy</a>
            <a href="https://tis.edu.in/terms-conditions/">
              Terms & conditions
            </a>
            <a href="#home" className="back-top">
              Back to top <ArrowUp size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
