"use client"

import { useState } from 'react'
import { MenuMobile } from '../menu-mobile/MenuMobile'
import styles from './styles.module.css'
import Link from 'next/link'
import { NavigationMobile } from '../navigation-mobile/NavigationMobile'

export const Navigation = () => {
  const [viewMenu, setViewMenu] = useState<boolean>(false)

  const onCLick = () => {
    console.log('clicou')
    setViewMenu (state => !state)
  }
  return (
    <>
      <MenuMobile isActive={viewMenu} onCLick={onCLick} />
      <NavigationMobile onCLick={onCLick} isView={viewMenu} />
    </>
  )
}
