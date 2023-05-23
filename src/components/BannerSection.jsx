import styles from "./banner.module.css"

export function Banner(){
    return(
        <section className={styles.sectionContainer}>
            <img src="src\assets\banner-img.png" alt="banner" className={styles.imageContainer} />
        </section>
    )
}