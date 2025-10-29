import styles from './styles.module.css'
import Link from 'next/link'

interface Props {
  isView: boolean
}

export const NavigationMobile = ({ isView }: Props) => {
  return (
    <article className={`${styles['navigation-mobile']} ${isView ? styles.active : styles.disable}`}>
        <Link href="#">seção 1</Link>
        <Link href="#">seção 2</Link>
        <Link href="#">seção 3</Link>
        <Link href="#">seção 4</Link>
    </article>
  )
}

