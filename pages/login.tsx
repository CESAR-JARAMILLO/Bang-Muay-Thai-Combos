import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, FormControl, FormLabel, Input, Stack, Flex } from '@chakra-ui/react'
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
        <title>Login | STC BMT Combos</title>
      </Head>
      <Flex minHeight="100vh" align="center" justify="center">
        <Card maxWidth="400px" p={4} textAlign="center">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} mt={4}>
              <FormControl id="password">
                <FormLabel>Password:</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="blue">Submit</Button>
            </Stack>
          </form>
        </Card>
      </Flex>
    </>
  )
}
