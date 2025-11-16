import styles from './styles.module.css'
import {Navigation} from '../navigation/Navigation'
import { RiSpeakAiLine } from "react-icons/ri";
import Link from 'next/link';

export const HeaderContainer = () => {
  return (
    <Link href={'/'} className={styles.header}>
      <article className={styles.box}>
        <article className={ styles.title}>
          < RiSpeakAiLine color='#DEDEDF' size={25}/>
          <p>Meyer Comunicações</p>
        </article>
        <Navigation />
      </article>
    </Link>
  )
}
