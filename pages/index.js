import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to our Blog.</h1>
      <p>Start writing your thoughts here.</p>
      <Link href={'/posts'} >
      <button type="button" class="btn btn-info">Explore</button>
      </Link>
    </div>
  )
}
