import styles from "./Header.module.css";

const navLinks = [
  { label: "Головна", href: "#" },
  { label: "Навички", href: "#skills" },
  { label: "Проекти", href: "#projects" },
  { label: "Контакти", href: "#contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <div className={styles.logo}>
          Kozak<span className={styles.highlight}>.Dev</span>
        </div>

        {/* Навігація */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
