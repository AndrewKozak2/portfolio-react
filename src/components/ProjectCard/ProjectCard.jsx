import Tilt from "react-parallax-tilt";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={450}
      className={styles.tiltWrapper}
    >
      <article className={styles.card}>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.techStack}>
            {project.tech.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Дивитися код &rarr;
          </a>
        </div>
      </article>
    </Tilt>
  );
}
