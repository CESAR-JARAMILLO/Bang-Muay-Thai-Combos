import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Card from './Card';
import combos from '../combos';

const CardSection = () => {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" bg="gray.100">
      <Box maxW="md" w="full" p="5">
        {combos.handCombos.map((handCombo, index) => (
          <Card key={index} title={handCombo.title} combo={handCombo.combo} />
        ))}
        {combos.sticksCombos.map((sticksCombo, index) => (
          <Card key={index} title={sticksCombo.title} combo={sticksCombo.combo} referenceLinks={sticksCombo.referenceLinks} />
        ))}
      </Box>
    </Flex>
  );
};

export default CardSection;
