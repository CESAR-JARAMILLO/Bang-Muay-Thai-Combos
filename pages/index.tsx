import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <main className={styles.main}>
        <h1>Welcome to my Next.js App</h1>
      </main>
    </>
  )
}
