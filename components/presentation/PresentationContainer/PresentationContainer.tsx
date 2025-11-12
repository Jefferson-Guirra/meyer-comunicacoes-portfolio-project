import styles from './styles.module.css'
import Image from 'next/image'

export const PresentationContainer = () => {
  return (
    <section className={ styles.container}>
      <article className={styles.box}>
        <article className={ styles.title}>
          <h1>Seu crescimento</h1>
          <h1> exige uma equipe</h1>
          <h1>de qualidade!</h1>
          <div className={styles.subtitle}>
            <h1>WE GROW TOGETHER</h1>
          </div>
          <Image src={'/fundo.png'}
            alt='fundo' 
            width={1920} 
            height={1080} 
          />
        </article>
      </article>

    </section>
  )
}