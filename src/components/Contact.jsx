import { user } from "../data/user"
import styles from "./contact.module.css";

export function Contact(){
    return(
        <section className={styles.sectionContainer}>
            <h2 className={styles.title}>Contato</h2>
            <div className={styles.network}>
                <img src="src\assets\whatsapp-icon.png" alt="WhatsApp logo" />
                <img src="src\assets\linkedin-icon.png" alt="LinkedIn logo" />
                <img src="src\assets\github-icon.png" alt="Github logo" />
            </div>
            <p className={styles.pararapgh}>Todos os direitos reservados - {user}</p>
        </section>
    )
}