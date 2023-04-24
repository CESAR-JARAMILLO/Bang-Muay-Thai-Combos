import Head from 'next/head'
import Header from '../components/Header'
import QuickLinksCard from '../components/QuickLinksCard';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import {
  Box,
  VStack,
  Image,
  Heading,
  Text,
  Link,
  HStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Home() {
  // const router = useRouter()
  // const isAuthenticated = Cookies.get('authenticated') === 'true'

  // if (!isAuthenticated) {
  //   router.push('/login')
  //   return null
  // }

  // set the authenticated cookie
  // Cookies.set('authenticated', 'true', { expires: 1 }) // expires in 1 day

  return (
    <>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <VStack>
        <Header />
      <QuickLinksCard />

      <Box>
        <SimpleGrid columns={[1, 2]} spacing={10} p={5}>
          {/* Add your card components here */}
        </SimpleGrid>
      </Box>
    </VStack>
    </>
  )
}
