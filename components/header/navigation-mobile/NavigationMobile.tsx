import styles from './styles.module.css'
import Link from 'next/link'

interface Props {
  isView: boolean,
  onCLick: () => void
}



export const NavigationMobile = ({ isView, onCLick: Click }: Props) => {
  return (
    <article className={`${styles['navigation-mobile']} ${isView ? styles.active : styles.disable}`}>
        <Link href="#" onClick={()=> Click()}>Home</Link>
        <Link href="#" onClick={()=> Click()}>Serviços</Link>
        <Link href="#" onClick={()=> Click()}>Orçamento</Link>
    </article>
  )
}

