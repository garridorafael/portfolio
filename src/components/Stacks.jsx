import styles from "./stacks.module.css";
import { technologies } from "../data/technologies";

export function Stacks() {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>Tecnologias</h2>
      <ul className={styles.stackList}>
          {technologies.map((technologie) => (
           <li className={styles.stackCard}>
           <img src={technologie.img} alt={technologie.name} />
           <span className={styles.stackName}>{technologie.name}</span>
         </li>
        ))}
      </ul>
    </section>
  )
}
