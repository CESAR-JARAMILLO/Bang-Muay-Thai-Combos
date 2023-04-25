import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Link } from "@chakra-ui/react";
import combos from '../../combos';

const DutchDrillCombos = () => {
  const dutchDrillCombos = combos.dutchDrillCombos;

  return (
    <Card borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">Dutch Drill #1</Heading>
      </CardHeader>

      <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box p="4">
            <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
              {dutchDrillCombos[0].title}
            </Heading>
            {dutchDrillCombos[0].combo.map((combo, index) => (
              <Text key={index} fontSize='md'>
                <span>{combo}</span>
              </Text>
            ))}
          </Box>
          {dutchDrillCombos.slice(-1).map((item, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
                {item.referenceHeading}
              </Heading>
              {item.links.map((link, index) => (
                <Link key={index} href={link.referenceLinks}>{link.referenceTitle}</Link>
              ))}
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DutchDrillCombos;