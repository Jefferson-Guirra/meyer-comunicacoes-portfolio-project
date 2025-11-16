import styles from './styles.module.css'
import { IoIosArrowForward } from "react-icons/io";

export const PresentationContainer = () => {
  return (
    <section className={ styles.container}>
      <article className={styles.content}>
        <article className={styles.title}>
          <span>conectamos</span>
          <span>criatividade</span>
          <span>à</span>
          <span>performance</span>
          <span>para</span>
          <span>solucionar</span>
          <span>problemas.</span>
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