import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./ProjectsSection.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: (index % 3) * 0.15,
    },
  }),
};

const INITIAL_PROJECTS_COUNT = 3;
const PROJECTS_STEP = 3;

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + PROJECTS_STEP);
  };

  return (
    <section className={styles.section} id="projects">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Мої Проекти
      </motion.h2>
      <div className={styles.grid}>
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {hasMoreProjects && (
        <div className={styles.buttonContainer}>
          <button className={styles.showMoreBtn} onClick={handleShowMore}>
            Показати ще
          </button>
        </div>
      )}
    </section>
  );
}
