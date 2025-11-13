import styles from './styles.module.css'
import { IoIosArrowForward } from "react-icons/io";

export const PresentationContainer = () => {
  return (
    <section className={ styles.container}>
      <article className={styles.content}>
        <article className={styles.title}>
          <h1>
            conectamos criatividade à performance para solucionar problemas.
          </h1>
        </article>
        <article className={styles.about}>
          <p>SOBRE A MEYER COMUNICAÇÃO</p>
          <IoIosArrowForward size={20} />
        </article>
        <article className={styles.explore}>
          <span></span>
          <p>EXPLORE</p>
        </article>
      </article>
    </section>
  )
}