// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Item from './qcomps/recipes.js'
import FeedbackForm from './qcomps/thankYouCrash.js'
// import Gallery from './components/state.js'

export default function List() {
  return (
    <div className={styles.main}>
        <FeedbackForm />
    </div>
  )
}
