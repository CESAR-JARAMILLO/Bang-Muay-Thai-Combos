import React from 'react';
import {
  Box,
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Badge,
} from '@chakra-ui/react';
import combos from '../../combos';

const HandCombos = () => {
  const handCombos = combos.handCombos;

  return (
    <Card
      id="Hand-Combos"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign="center"
      maxW="sm"
      mx="auto"
    >
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size="md" color="white">
          #'s 1-11 Hand Combos
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4" mt="-4">
          {handCombos.map((combo, index) => (
            <Box key={index} p="4">
              {index === 0 ? (
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
              ) : (
                <Badge
                  colorScheme="yellow"
                  border="1px"
                  borderColor="black"
                  mb="2"
                  p="1"
                  borderRadius="10"
                >
                  Yellow Belt Requirement
                </Badge>
              )}

              <Heading
                size="sm"
                mb="2"
                textTransform="uppercase"
                fontWeight="bold"
                textDecoration="underline"
              >
                {combo.title}
              </Heading>
              <Text fontSize="md">
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
