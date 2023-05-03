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
  const imageSize = useBreakpointValue({ base: '100%', lg: '50vw' });
  const boxHeight = useBreakpointValue({ base: '60vh', lg: '50vh' });
  const marginTop = useBreakpointValue({ base: '0', lg: '10' });

  return (
    <Box position="relative" height={boxHeight} zIndex="0">
      <Image
        src={image}
        alt="Hero"
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, 0)"
        objectFit="cover"
        zIndex="-1"
        width={imageSize}
        height={isMobile ? imageSize : '100%'}
      />
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, 0)"
        bg="rgba(0, 0, 0, 0.6)"
        zIndex="-1"
        width={imageSize}
        height={isMobile ? imageSize : '100%'}
      />
      <Container
        maxW="container.lg"
        zIndex="1"
        position="relative"
        height={isMobile ? imageSize : '100%'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={marginTop}
      >
        <Flex direction="column" align="center" color="white">
          <Heading as="h1" fontSize="6xl" textAlign="center" mt="0">
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
