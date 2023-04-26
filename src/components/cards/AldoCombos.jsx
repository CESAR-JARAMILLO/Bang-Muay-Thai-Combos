import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider } from "@chakra-ui/react";
import combos from '../../combos';

const AldoCombos = () => {
  const aldoCombos = combos.aldoCombos;

  return (
    <Card id='Aldo' borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">Aldo Combination</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {aldoCombos.map((combo, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
                {combo.title}
              </Heading>
              <Text fontSize='md'>
                {combo.combo.map((item, index) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ))}
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default AldoCombos;
