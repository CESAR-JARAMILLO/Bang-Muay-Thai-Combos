import React from 'react';
import { Box, Container, Heading, Text, Link, SimpleGrid } from '@chakra-ui/react';

const QuickLinks = () => {
  const links = [
    { href: 'Hand-Combos', text: 'Hand Combos' },
    { href: 'Sticks', text: 'Sticks' },
    { href: 'Holland', text: 'Holland' },
    { href: 'Hemmers', text: 'Hemmers' },
    { href: 'Dutch', text: 'Dutch' },
    { href: '230', text: '2:30' },
    { href: 'Dekkers', text: 'Dekkers' },
    { href: 'Reem', text: 'Reem' },
  ];

  return (
    <Box py="10" px="5">
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h2" fontSize="4xl" mb="5">
          Combos &amp; Drills
        </Heading>
        <Text as="h4" fontSize="xl" fontWeight="semibold" mb="3">
          Quick Links
        </Text>
        <SimpleGrid columns={[2, 2, 3, 4]} spacing="3" mx="auto">
          {links.map(({ href, text }, index) => (
            <Link
              key={index}
              href={`#${href}`}
              display="block"
              textAlign="center"
              border="1px solid blue"
              bg="blue.600"
              color="white"
              borderRadius="md"
              py="3"
              px="3"
            >
              {text}
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default QuickLinks;
