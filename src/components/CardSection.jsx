import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
// import Card from './Card';
import HandCombos from './cards/HandCombos'
import SticksCombos from './cards/SticksCombos'
import HollandCombos from './cards/HollandCombos'
import HemmersCombos from './cards/HemmersCombos'

const CardSection = () => {
  return (
    <>
      <HandCombos />
      <SticksCombos />
      <HollandCombos />
      <HemmersCombos />
    </>
  );
};

export default CardSection;
