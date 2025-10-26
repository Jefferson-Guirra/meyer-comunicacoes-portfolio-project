import styles from './styles.module.css'
import {Navigation} from '../navigation/Navigation'

export const HeaderContainer = () => {
  return (
    <header className={styles.header}>
      <p>Meyer Comunicações</p>
      <Navigation />
    </header>
  )
}
