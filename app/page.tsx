
import styles from "./page.module.css";
import {HeaderContainer, PresentationContainer, WorkContainer} from '../components'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeaderContainer />
        <PresentationContainer />
        <WorkContainer />
      </main>
    </div>
  );
}
