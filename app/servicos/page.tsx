import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { serviceList } from '@/data/service'

const page = () => {
  return (
    <section className={styles.container}>
      <h2>Nossas soluções</h2>
      <article className={styles.links}>
        {serviceList.map((service, index) => (
          <Link key={index} href={`/servicos/${index}`}>
          {service.title}
          </Link>
        ))}
      </article>

    </section>
  )
}

export default page