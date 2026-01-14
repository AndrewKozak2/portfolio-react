import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.greeting}>Привіт, я Козак Андрій</span>
        <h1 className={styles.title}>
          Frontend <span className={styles.highlight}>Developer</span>
        </h1>
        <p className={styles.description}>
          Створюю сучасні, швидкі та адаптивні веб-інфтерфейси, використовуючи
          React та екосистему JavaScript.
        </p>
        <div className={styles.actions}>
          <button className={styles.primatyBtn}>Мої роботи</button>
          <button className={styles.secondaryBtn}>Зв'язатись</button>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.imagePlaceholder}></div>
      </div>
    </section>
  );
}
