import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const PASSWORD = 'mypassword'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (password === PASSWORD) {
      document.cookie = 'authenticated=true; path=/'
      router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>Login | My Next.js App</title>
      </Head>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
