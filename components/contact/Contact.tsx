import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link';
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export const Contact = () => {
  return (
    <section className={ styles.container}>

      <article className={styles.content}>
        <h2>Contato.</h2>

        <div className={ styles.links}>
          <Image src='/meyer.png' alt='meyer' width={500} height={500} />
          <div className={ styles.contacts}>
            <h2>Faça já o seu orçamento</h2>
            <div className={ styles.icons }>

              <Link href={'#'}>
                <CiInstagram color='#C91E93' size={45}/>
              </Link>

              <Link href={'#'}>
                <FaWhatsapp color='#37BC69' size={45}/>
              </Link>

              <Link href={'#'}>
                <MdOutlineEmail color='#DB123B' size={45}/>
              </Link>

            </div>

          </div>
        </div>

      </article>

    </section>
  )
}