import styles from "./projects.module.css";
import { projects } from "../data/projects";
import gitlogo from "../assets/git-icon.png"

export function Projects() {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>Projetos</h2>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li className={styles.projectCard}>
            <div className={styles.box}>
            <span className={styles.projectName}>{project.name}</span>
            <img src={gitlogo} alt="github logo" />
            </div>
            <span>{project.descricao}</span>
            <a href="#" className={styles.projectLink}>Saiba mais</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
