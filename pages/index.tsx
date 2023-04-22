import Head from 'next/head'
import { useRouter } from 'next/router'
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
      <VStack>
      <Box id="top" textAlign="center">
        <Image src="/images/bmt.jpeg" alt="BMT Logo" boxSize="100px" />
        <Heading>BANG Muay Thai</Heading>
        <Text fontSize="xl">Combos & Drills Reference</Text>
        <Text>
          All combos and drills are referenced from the BANG Muay Thai{" "}
          <Link href="https://www.youtube.com/channel/UCYr42ia_GEP97beaCUXgbvw">
            YouTube
          </Link>{" "}
          channel.
        </Text>
        <Text>
          Some Variations are from the{" "}
          <Link href="https://www.systemstrainingcenter.com/">
            Systems Training Center
          </Link>{" "}
          classes
        </Text>
        <Text>
          For any errors or suggestions feel free to contact me:{" "}
          <Link href="mailto:csarjaramillo89@yahoo.com">
            csarjaramillo89@yahoo.com
          </Link>
        </Text>
        {/* <Button colorScheme="blue" href="belts.html">
          Belt Requirements
        </Button> */}
      </Box>

      <Box>
        <VStack textAlign="center">
          <Heading>Combos & Drills</Heading>
          <Heading as="h4" size="md">
            Quick Links
          </Heading>
          <HStack wrap="wrap" justifyContent="center" spacing={4}>
            <Link href="#hand-combos">1-11</Link>
            <Link href="#sticks">Sticks Combination</Link>
            <Link href="#holland">Holland Combination</Link>
            <Link href="#hemmers">Hemmers Combination</Link>
            <Link href="#dutch">Dutch Drill #1</Link>
            <Link href="#230">2:30</Link>
            <Link href="#dekkers">Dekkers Combination</Link>
            <Link href="#reem">Reem Drill</Link>
            <Link href="#back-em-up">Back Em Up Drill</Link>
            <Link href="#ko">K.O. Drill</Link>
            <Link href="#bas">Bas Combo</Link>
            <Link href="#sync-up-flow">Sync Up Flow</Link>
            <Link href="#1body-2body">1 Body & 2 Body</Link>
            <Link href="#switch-it">Switch It</Link>
            <Link href="#aldo">Aldo Combination</Link>
            <Link href="#dekkers2">Dekkers Combination #2</Link>
            <Link href="#timing-of-2">Timing of 2</Link>
            <Link href="#check-it">Check It</Link>
            <Link href="#shoulder-roll">Shoulder Roll</Link>
            <Link href="#souwer">Souwer Combination</Link>
          </HStack>
        </VStack>
      </Box>

      <Box>
        <SimpleGrid columns={[1, 2]} spacing={10} p={5}>
          {/* Add your card components here */}
        </SimpleGrid>
      </Box>
    </VStack>
    </>
  )
}
