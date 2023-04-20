import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const isAuthenticated = document.cookie.includes('authenticated=true')

  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

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
