"use client"

import { useState } from 'react'
import { MenuMobile } from '../menu-mobile/MenuMobile'
import styles from './styles.module.css'
import Link from 'next/link'

export const Navigation = () => {
  const [viewMenu, setViewMenu] = useState<boolean>(false)
  console.log(viewMenu)

  const onCLick = () => {
    setViewMenu (state => !state)
  }
  return (
    <>
      <article className={styles.navigationContainer}>
        <Link href="#">seção 1</Link>
        <Link href="#">seção 2</Link>
        <Link href="#">seção 3</Link>
        <Link href="#">seção 4</Link>
      </article>
      <MenuMobile isActive={viewMenu} onCLick={onCLick} />
    </>
  )
}
