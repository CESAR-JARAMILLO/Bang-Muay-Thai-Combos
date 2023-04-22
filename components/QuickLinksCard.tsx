import React from 'react'
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
  Divider,
} from "@chakra-ui/react";

const QuickLinksCard = () => {
  return (
    <Box p={4}>
      <VStack textAlign="center">
        <Heading>Combos & Drills</Heading>
        <Heading as="h4" size="md">Quick Links</Heading>
        <VStack alignItems="stretch" spacing={2}>
          <Link href="#hand-combos">1-11</Link>
          <Divider />
          <Link href="#sticks">Sticks Combination</Link>
          <Divider />
          <Link href="#holland">Holland Combination</Link>
          <Divider />
          <Link href="#hemmers">Hemmers Combination</Link>
          <Divider />
          <Link href="#dutch">Dutch Drill #1</Link>
          <Divider />
          <Link href="#230">2:30</Link>
          <Divider />
          <Link href="#dekkers">Dekkers Combination</Link>
          <Divider />
          <Link href="#reem">Reem Drill</Link>
          <Divider />
          <Link href="#back-em-up">Back Em Up Drill</Link>
          <Divider />
          <Link href="#ko">K.O. Drill</Link>
          <Divider />
          <Link href="#bas">Bas Combo</Link>
          <Divider />
          <Link href="#sync-up-flow">Sync Up Flow</Link>
          <Divider />
          <Link href="#1body-2body">1 Body & 2 Body</Link>
          <Divider />
          <Link href="#switch-it">Switch It</Link>
          <Divider />
          <Link href="#aldo">Aldo Combination</Link>
          <Divider />
          <Link href="#dekkers2">Dekkers Combination #2</Link>
          <Divider />
          <Link href="#timing-of-2">Timing of 2</Link>
          <Divider />
          <Link href="#check-it">Check It</Link>
          <Divider />
          <Link href="#shoulder-roll">Shoulder Roll</Link>
          <Divider />
          <Link href="#souwer">Souwer Combination</Link>
        </VStack>
      </VStack>
    </Box>
  )
}

export default QuickLinksCard
