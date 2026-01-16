import { FaTelegram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Зв'язатися зі мною</h2>
      <p className={styles.subtext}>
        Я завжди відкритий до обговорення нових проектів, ідей або можливості
        стати частиною вашої команди.
      </p>

      <div className={styles.grid}>
        <a
          href="mailto:chiron1600@gmail.com"
          className={`${styles.card} ${styles.email}`}
        >
          <FaEnvelope className={styles.icon} />
          <span>Email</span>
          <small>chiron1600@gmail.com</small>
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className={`${styles.card} ${styles.linkedin}`}
        >
          <FaLinkedin className={styles.icon} />
          <span>LinkedIn</span>
          <small>Мій профіль</small>
        </a>

        <a
          href="https://t.me/your-telegram"
          target="_blank"
          className={`${styles.card} ${styles.telegram}`}
        >
          <FaTelegram className={styles.icon} />
          <span>Telegram</span>
          <small>Швидкий зв'язок</small>
        </a>

        <a
          href="https://github.com/AndrewKozak2"
          target="_blank"
          className={`${styles.card} ${styles.github}`}
        >
          <FaGithub className={styles.icon} />
          <span>GitHub</span>
          <small>Мій код</small>
        </a>
      </div>
    </section>
  );
}
