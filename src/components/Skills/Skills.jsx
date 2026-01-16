import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import styles from "./Skills.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export function Skills() {
  return (
    <section className={styles.section} id="skills">
      {/* Анімація заголовка */}
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Технічні навички
      </motion.h2>

      {/* Анімована сітка */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className={styles.card}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              borderColor: skill.color,
              boxShadow: `0 0 20px ${skill.color}40`,
            }}
          >
            <div className={styles.iconWrapper} style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className={styles.name}>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
