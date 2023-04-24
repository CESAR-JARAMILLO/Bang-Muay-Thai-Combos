import React from 'react';
import { Box, Container, Heading, Text, Button, Image } from '@chakra-ui/react';
import logo from '../assets/images/bmt.jpeg';

const Hero = () => {
  return (
    <Box position="relative">
      <Image src={logo} mx="auto" display="block" mt="5" />
      <Container maxW="container.lg" zIndex="1" position="relative">
        <Heading as="h1" fontSize="6xl" textAlign="center" mt="10">
          BANG Muay Thai
        </Heading>
        <Text fontSize="xl" textAlign="center" mt="3">
          <Text fontWeight="bold" fontSize="3xl" mb="3">
            Combos & Drills Reference
          </Text>{' '}
          All combos and drills are referenced from the BANG Muay Thai YouTube channel. Some variations are from the Systems Training Center classes.{' '}
          For any errors or suggestions, feel free to contact me at: csarjaramillo89@yahoo.com.
        </Text>
        <Box textAlign="center" mt="10">
          <Button colorScheme="blue" size="lg">
            Learn more
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
