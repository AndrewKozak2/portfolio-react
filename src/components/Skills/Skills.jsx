import { skills } from "../../data/skills";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.heading}>Технічні навички</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.card}>
            <div className={styles.iconWrapper} style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className={styles.name}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
