import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Button, Badge } from "@chakra-ui/react";
import combos from '../../combos';

const ReemDrillCombos = () => {
  const reemDrillCombos = combos.reemDrillCombos;

  return (
    <Card id='Reem' borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">Reem Drill</Heading>
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
      {reemDrillCombos.slice(0, -1).map((combo, index) => (
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
          {reemDrillCombos.slice(-1).map((item, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
                {item.referenceHeading}
              </Heading>
              {item.links.map((link, index) => (
                <Box key={index} display="block" mt="4">
                  <Button size="sm" colorScheme="blue" as="a" href={link.referenceLinks} target="_blank" maxWidth="100%">
                    <Box isTruncated>
                      {link.referenceTitle}
                    </Box>
                  </Button>
                </Box>
              ))}
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ReemDrillCombos;
