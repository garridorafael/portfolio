import { user } from "../data/user"
import styles from "./contact.module.css";
import whatsapp from "../assets/whatsapp-icon.png"
import linkedin from "../assets/linkedin-icon.png"
import github from "../assets/github-icon.png"

export function Contact(){
    return(
        <section className={styles.sectionContainer}>
            <h2 className={styles.title}>Contato</h2>
            <div className={styles.network}>
                <img src={whatsapp} alt="WhatsApp logo" />
                <img src={linkedin} alt="LinkedIn logo" />
                <img src={github} alt="Github logo" />
            </div>
            <p className={styles.pararapgh}>Todos os direitos reservados - {user}</p>
        </section>
    )
}