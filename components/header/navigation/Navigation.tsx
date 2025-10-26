import styles from './styles.module.css'
import Link from 'next/link'

export const Navigation = () => {
  return (
    <article className={styles.navigationContainer}>
      <Link href="#">seção 1</Link>
      <Link href="#">seção 2</Link>
      <Link href="#">seção 3</Link>
      <Link href="#">seção 4</Link>
    </article>
  )
}
