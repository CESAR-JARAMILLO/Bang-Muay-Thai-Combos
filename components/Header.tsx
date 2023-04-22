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
} from "@chakra-ui/react";
import bmtLogo from '../images/bmt.jpeg';

const Header = () => {
  return (
    <Box id="top" textAlign="center">
      <Image src={bmtLogo.src} alt="BMT Logo" boxSize="100px" mx="auto" />
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
  )
}

export default Header
