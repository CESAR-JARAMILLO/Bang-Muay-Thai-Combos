import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
// import Card from './Card';
import HandCombos from './cards/HandCombos'
import SticksCombos from './cards/SticksCombos'
import combos from '../combos';

const CardSection = () => {
  return (
    <>
      <HandCombos />
      <SticksCombos />
    </>
  );
};

export default CardSection;
