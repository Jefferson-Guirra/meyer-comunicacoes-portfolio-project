import styles from './styles.module.css'
import {Navigation} from '../navigation/Navigation'
import { RiSpeakAiLine } from "react-icons/ri";

export const HeaderContainer = () => {
  return (
    <header className={styles.header}>
      <article className={styles.box}>
        <article className={ styles.title}>
          < RiSpeakAiLine color='#DEDEDF' size={25}/>
          <p>Meyer Comunicações</p>
        </article>
        <Navigation />
      </article>
    </header>
  )
}
