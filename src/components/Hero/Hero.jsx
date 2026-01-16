import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import heroImage from "../../assets/me.jpg";
import arrowImage from "../../assets/arrow.webp";

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* ЛІВА ЧАСТИНА: ФОТО */}
      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.imageWrapper}>
          <div className={styles.glow}></div>
          <img
            src={heroImage}
            alt="Козак Андрій"
            className={styles.heroImage}
          />
        </div>
      </motion.div>

      {/* ПРАВА ЧАСТИНА: ТЕКСТ */}
      <div className={styles.content}>
        <motion.div
          className={styles.greetingWrapper}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Стрілка */}
          <img src={arrowImage} alt="" className={styles.handArrow} />

          <span className={styles.greetingText}>
            Привіт, я <span className={styles.nameHighlight}>Козак Андрій</span>
          </span>
        </motion.div>

        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={["Frontend\nDeveloper", 5000, "", 500]}
            wrapper="h1"
            speed={40}
            deletionSpeed={50}
            repeat={Infinity}
            className={styles.titleAnimated}
            cursor={true}
          />
        </motion.div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Створюю сучасні, швидкі та адаптивні веб-інтерфейси, використовуючи
          React та екосистему JavaScript.
        </motion.p>
      </div>
    </section>
  );
}
