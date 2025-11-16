import Link from 'next/link';
import styles from "./styles.module.css";
import { IoIosArrowForward } from "react-icons/io";

export const WorkContainer = () => {

  return (
    <section className={styles.section}>

      <article className={styles.container}>

        <div className={styles.content}>
          <h2 className={styles.title}>
            nosso trabalho cria conexões reais com as pessoas e gera resultados expressivos.
          </h2>
        </div>

        <div className={styles.circles}>
          <span className={ styles.rest } >
            <p>branding</p>
          </span>
          <span>
            <p>websites</p>
          </span>
          <span>
            <p> mídia digital </p>
          </span>
          <span>
            <p>design & campanhas</p>
          </span>
          <span>
            <p>planejamento</p>
          </span>
          <span className={styles.line}>
          </span>
        </div>
        <span className={styles.line}>
        </span>

      </article>
      <Link href={'/servicos'}>nossas soluções
        <IoIosArrowForward size={20} />
      </Link>
    </section>
  );
}
