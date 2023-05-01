import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Button } from "@chakra-ui/react";
import combos from '../../combos';

const HemmersCombos = () => {
  const hemmersCombos = combos.hemmersCombos;

  return (
    <Card id='Hemmers' borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">Hemmers Combinations</Heading>
      </CardHeader>

      <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        {hemmersCombos.slice(0, -1).map((combo, index) => (
          <Box key={index} p="4">
            <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
              {combo.title}
            </Heading>
            {combo.combo.map((combo, index) => (
              <Text key={index} fontSize='md'>
                <span>{combo}</span>
              </Text>
            ))}
          </Box>
        ))}
          {hemmersCombos.slice(-1).map((item, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
                {item.referenceHeading}
              </Heading>
              <Button colorScheme="blue" size="sm" as="a" href={item.referenceLinks} target="_blank" maxWidth="100%" mt="4">
                <Box isTruncated>
                  {item.referenceTitle}
                </Box>
              </Button>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HemmersCombos;
