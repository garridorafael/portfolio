import styles from "./banner.module.css"
import banner from "../assets/banner-img.png"


export function Banner(){
    return(
        <section className={styles.sectionContainer}>
            <img src={banner} alt="banner" className={styles.imageContainer} />
        </section>
    )
}