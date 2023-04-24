import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider } from "@chakra-ui/react";
import combos from '../../combos';

const HandCombos = () => {
  const handCombos = combos.handCombos;

  return (
    <Card borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="gray.100" borderBottomWidth="1px">
        <Heading size='md'>#'s 1-11 Hand Combos</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {handCombos.map((combo, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="semibold">
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

export default HandCombos;
