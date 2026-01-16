import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Головна", href: "#" },
  { label: "Навички", href: "#skills" },
  { label: "Проекти", href: "#projects" },
  { label: "Контакти", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
  }, [isMenuOpen, lenis]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (!lenis) return;
    lenis.start();
    document.body.style.overflow = "";
    if (href === "#") {
      lenis.scrollTo(0, {
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      lenis.scrollTo(href, {
        offset: -50,
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={(e) => handleNavClick(e, "#")}>
          Kozak<span className={styles.highlight}>.Dev</span>
        </div>

        {/* Десктопна навігація */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.link}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Бургер кнопка */}
        <button
          className={`${styles.burgerBtn} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Мобільне меню */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
