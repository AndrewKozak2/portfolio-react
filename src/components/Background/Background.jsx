import styles from "./Background.module.css";

export const Background = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
    </div>
  );
};
