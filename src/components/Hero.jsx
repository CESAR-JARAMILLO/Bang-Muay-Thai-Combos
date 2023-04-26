import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import image from '../assets/images/hero.jpg';

const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box position="relative" height="60vh">
      <Image
        src={image}
        alt="Hero"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        objectFit="cover"
        zIndex="-1"
        height={isMobile ? '100%' : 'auto'}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.6)"
        zIndex="-1"
      />
      <Container maxW="container.lg" zIndex="1" position="relative">
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100%"
          color="white"
          alignItems="center"
        >
          <Heading as="h1" fontSize="6xl" textAlign="center" mt="10">
            BANG Muay Thai
          </Heading>
          <Text fontSize="xl" textAlign="center" mt="3">
            <Text fontWeight="bold" fontSize="3xl" mb="3">
              Combos & Drills Reference
            </Text>
          </Text>
          {/* <Box textAlign="center" mt="10">
            <Button colorScheme="blue" size="lg">
              Learn more
            </Button>
          </Box> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
