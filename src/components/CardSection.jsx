import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
// import Card from './Card';
import HandCombos from './cards/HandCombos'
import SticksCombos from './cards/SticksCombos'
import HollandCombos from './cards/HollandCombos'
import HemmersCombos from './cards/HemmersCombos'
import DutchDrillCombos from './cards/DutchDrillCombos';
import ThwoThirtyCombos from './cards/ThwoThirtyCombos'

const CardSection = () => {
  return (
    <>
      <HandCombos />
      <SticksCombos />
      <HollandCombos />
      <HemmersCombos />
      <DutchDrillCombos />
      <ThwoThirtyCombos />
    </>
  );
};

export default CardSection;
