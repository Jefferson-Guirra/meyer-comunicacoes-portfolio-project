
import styles from "./page.module.css";
import {HeaderContainer} from '../components'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeaderContainer />
      </main>
    </div>
  );
}
