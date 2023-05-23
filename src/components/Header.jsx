import { Button } from "./Button"
import styles from "./header.module.css"

export function Header(){
    return(
         <div className={styles.headerContainer}>
            <img src="src\assets\portfolio.png" alt="logo" className={styles.logo}/>
            <ul className={styles.linksContainer}>
                <li>Sobre</li>
                <li>Stack</li>
                <li>Projetos</li>
            </ul>
           <Button text="Contato" />
         </div>
    )
}