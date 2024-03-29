import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import HandCombos from './cards/HandCombos'
import SticksCombos from './cards/SticksCombos'
import HollandCombos from './cards/HollandCombos'
import HemmersCombos from './cards/HemmersCombos'
import DutchDrillCombos from './cards/DutchDrillCombos';
import ThwoThirtyCombos from './cards/ThwoThirtyCombos'
import DekkersCombos from './cards/DekkersCombos';
import ReemDrillCombos from './cards/ReemDrillCombos';
import KODrillCombos from './cards/KODrillCombos';
import BasCombos from './cards/BasCombos';
import SyncUpFlowCombos from './cards/SyncUpFlowCombos';
import OneBodyTwoBodyCombos from './cards/OneBodyTwoBodyCombos';
import SwitchItCombos from './cards/SwitchItCombos';
import AldoCombos from './cards/AldoCombos';
import DekkersTwoCombos from './cards/DekkersTwoCombos';
import TimingOfTwoCombos from './cards/TimingOfTwoCombos';
import CheckItCombos from './cards/CheckIt';
import ShoulderRollCombos from './cards/ShoulderRoll';
import SouwerCombos from './cards/SouwerCombos';
import BackThemUpCombos from './cards/BackThemUpCombos';

const CardSection = () => {
  return (
    <>
      <Box mb={8}><HandCombos /></Box>
      <Box mb={8}><SticksCombos /></Box>
      <Box mb={8}><HollandCombos /></Box>
      <Box mb={8}><HemmersCombos /></Box>
      <Box mb={8}><DutchDrillCombos /></Box>
      <Box mb={8}><ThwoThirtyCombos /></Box>
      <Box mb={8}><DekkersCombos /></Box>
      <Box mb={8}><ReemDrillCombos /></Box>
      <Box mb={8}><BackThemUpCombos /></Box>
      <Box mb={8}><OneBodyTwoBodyCombos /></Box>
      <Box mb={8}><SwitchItCombos /></Box>
      <Box mb={8}><AldoCombos /></Box>
      <Box mb={8}><KODrillCombos /></Box>
      <Box mb={8}><DekkersTwoCombos /></Box>
      <Box mb={8}><TimingOfTwoCombos /></Box>
      <Box mb={8}><CheckItCombos /></Box>
      <Box mb={8}><ShoulderRollCombos /></Box>
      <Box mb={8}><BasCombos /></Box>
      <Box mb={8}><SouwerCombos /></Box>
      <Box mb={8}><SyncUpFlowCombos /></Box>
    </>
  );
};

export default CardSection;
