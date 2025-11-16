import styles from './styles.module.css'
import {Navigation} from '../navigation/Navigation'
import { RiSpeakAiLine } from "react-icons/ri";
import Link from 'next/link';

export const HeaderContainer = () => {
  return (
    <header className={styles.header}>
      <article className={styles.box}>
        <Link href={'/'} className={ styles.title}>
          <p>Meyer Comunicação</p>
        </Link>
        <Navigation />
      </article>
    </header>
  )
}
