import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Badge } from "@chakra-ui/react";
import combos from '../../combos';

const OneBodyTwoBodyCombos = () => {
  const oneBodyTwoBodyCombos = combos.oneBodyTwoBodyCombos;

  return (
    <Card id='1body-2body' borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">1 Body & 2 Body</Heading>
      </CardHeader>

      <CardBody>
      <Badge
        colorScheme="orange"
        border="1px"
        borderColor="black"
        mb="2"
        p="1"
        borderRadius="10"
      >
        Orange Belt Requirement
      </Badge>
        <Stack divider={<StackDivider />} spacing='4'>
          {oneBodyTwoBodyCombos.map((combo, index) => (
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

export default OneBodyTwoBodyCombos;
