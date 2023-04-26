import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Button } from "@chakra-ui/react";
import combos from '../../combos';

const DekkersCombos = () => {
  const dekkersCombos = combos.dekkersCombos;

  return (
    <Card id='Dekkers' borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">Dekkers Combinations</Heading>
      </CardHeader>

      <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        {dekkersCombos.slice(0, -1).map((combo, index) => (
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
          {dekkersCombos.slice(-1).map((item, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
                {item.referenceHeading}
              </Heading>
              <Button colorScheme="blue" size="sm" as="a" href={item.referenceLinks} target="_blank" mt="4">
                {item.referenceTitle}
              </Button>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DekkersCombos;
