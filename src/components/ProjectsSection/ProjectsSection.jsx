import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.heading}>Мої Проекти</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
