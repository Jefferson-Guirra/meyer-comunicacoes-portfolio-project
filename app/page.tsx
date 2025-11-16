
import styles from "./page.module.css";
import { PresentationContainer, WorkContainer, Contact} from '../components'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PresentationContainer />
        <WorkContainer />
        <Contact />
      </main>
    </div>
  );
}
