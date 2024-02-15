// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Item from './qcomps/recipes.js'
import Scoreboard from './qcomps/updObjectsForm.js'
// import Form from './components/updObjects.js'

export default function List() {
  return (
    <div className={styles.main}>
        <Scoreboard />
    </div>
  )
}
