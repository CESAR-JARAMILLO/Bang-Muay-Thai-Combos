import React from 'react';
import { Box, Container, Heading, Text, Link, SimpleGrid } from '@chakra-ui/react';

const QuickLinks = () => {
  const links = [
    '#Hand-Combos',
    '#Sticks',
    '#Holland',
    '#Hemmers',
    '#Dutch',
    '#230',
    '#Dekkers',
    '#Reem',
    // '#Back-Em-Up',
    // '#KO',
    // '#Bas',
    // '#Sync-Up-Flow',
    // '#1Body-2Body',
    // '#Switch-It',
    // '#Aldo',
    // '#Dekkers2',
    // '#Timing-of-2',
    // '#Check-It',
    // '#Shoulder-Roll',
    // '#Souwer',
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
          {links.map((href, index) => (
            <Link key={index} href={href} display="block" textAlign="center" border="1px solid blue" bg="blue.600" color="white" borderRadius="md" py="3" px="3">
              {href.slice(1)}
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default QuickLinks;
