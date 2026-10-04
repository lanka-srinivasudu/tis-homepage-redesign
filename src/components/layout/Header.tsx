import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import { navigation, official } from "../../data/site";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ActionLink } from "../ui/ActionLink";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const desktop = useMediaQuery("(min-width: 1100px)");
  useEffect(() => {
    const element = dialog.current;
    const trigger = menuButton.current;
    if (!element || !menuOpen || desktop) return;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [menuOpen, desktop]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>A world of possibilities. Rooted in Dehradun.</span>
          <a href={official.phoneHref}>
            <Phone size={12} aria-hidden="true" /> Admissions: {official.phone}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            aria-label="Tulas International School — home"
          >
            <img
              src="/images/logo.png"
              width="1080"
              height="1080"
              alt="Tulas International School official logo"
            />
            <span className="brand-wordmark">
              Tula’s<span>INTERNATIONAL SCHOOL</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <ActionLink href={official.admissions}>Apply now</ActionLink>
            <button
              className="icon-button menu-toggle"
              ref={menuButton}
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen && !desktop}
              aria-controls="mobile-menu"
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        aria-labelledby="menu-title"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              "a[href], button:not([disabled])",
            ),
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onCancel={closeMenu}
        onClose={closeMenu}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="menu-panel">
          <div className="menu-top">
            <p id="menu-title">Explore Tulas</p>
            <button
              className="icon-button"
              autoFocus
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                <span className="menu-number">0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            ))}
            <a href="#admissions" onClick={closeMenu}>
              <span className="menu-number">05</span>Admissions
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </nav>
          <ActionLink href={official.admissions}>
            Start an application
          </ActionLink>
          <a className="menu-phone" href={official.phoneHref}>
            <Phone size={16} aria-hidden="true" />
            {official.phone}
          </a>
        </div>
      </dialog>
    </>
  );
}
