import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Button, Badge } from "@chakra-ui/react";
import combos from '../../combos';

const SticksCombos = () => {
  const sticksCombos = combos.sticksCombos;

  return (
    <Card id='Sticks' borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">Sticks Combinations</Heading>
      </CardHeader>

      <CardBody>
      <Badge
        colorScheme="white"
        variant="outline"
        border="1px"
        borderColor="black"
        mb="2"
        p="1"
        borderRadius="10"
        >
          White Belt Requirement
      </Badge>
      <Stack divider={<StackDivider />} spacing='4'>
        {sticksCombos.slice(0, -1).map((combo, index) => (
          <Box key={index} p="4">
            <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
              {combo.title}
            </Heading>
            <Text fontSize='md'>
              <span>{combo.combo}</span>
            </Text>
          </Box>
        ))}
          {sticksCombos.slice(-1).map((item, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
                {item.referenceHeading}
              </Heading>
              <Button size="sm" colorScheme="blue" as="a" href={item.referenceLinks} target="_blank" maxWidth="100%" mt="4">
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

export default SticksCombos;
