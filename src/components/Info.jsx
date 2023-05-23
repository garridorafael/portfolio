import { Button } from "./Button";
import styles from "./info.module.css"
import { username } from "../data/user";

export function Info(){
    return(
        <div className={styles.infoContainer}>
            <span className={styles.userName}>{username}</span>
            <h1 className={styles.title}>Bem vindo ao meu portfólio</h1>
            <p className={styles.paragraph}>Uma frase interessante sobre mim</p>
            <Button text="Saiba mais" />
        </div>
    )
}