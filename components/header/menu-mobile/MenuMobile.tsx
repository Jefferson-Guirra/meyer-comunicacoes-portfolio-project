import styles from './styles.module.css'

interface Props {
  onCLick: ()=> void
  isActive: boolean

}

export const MenuMobile = ({onCLick, isActive}: Props) => {
  return (
    <article onClick={onCLick} className={`${styles['menu-mobile']}  ${isActive ? styles.active : styles.disable}`}>
      <span className={styles['line-1']}></span>
      <span className={styles['line-2']}></span>
    </article>
  )
}