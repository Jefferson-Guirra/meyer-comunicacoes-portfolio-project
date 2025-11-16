'use client'
import { serviceList } from '@/data/service';
import { useParams } from 'next/navigation';
import styles from './styles.module.css'
import Link from 'next/link';
import { MdKeyboardArrowLeft } from "react-icons/md";

export const  ServiceComponent = ()=> {
  const params = useParams();
  const content = serviceList[Number(params.index)]

  return (
    <article className={ styles.container }>
      <h2>Soluções.</h2>
      <h1> {content.title}.</h1>
      <div className={ styles.about }>
        <p className={ styles.title }>
          o que fazemos.
        </p>
        <p className={ styles.text } >{ content.content }</p>
      </div>
      <Link href='/servicos'>
        <MdKeyboardArrowLeft size={20} />
        <p>voltar</p>
      </Link>

    </article>
  )
}
