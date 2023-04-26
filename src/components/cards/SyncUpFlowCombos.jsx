import React from 'react';
import { Box, Text, Card, CardBody, CardHeader, Heading, Stack, StackDivider } from "@chakra-ui/react";
import combos from '../../combos';

const SyncUpFlowCombos = () => {
  const syncUpFlowCombos = combos.syncUpFlowCombos;

  return (
    <Card id='Sync-Up-Flow' borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center" maxW="sm" mx="auto">
      <CardHeader bg="blue.600" borderBottomWidth="1px">
        <Heading size='md' color="white">Sync Up Flow</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {syncUpFlowCombos.map((combo, index) => (
            <Box key={index} p="4">
              <Heading size='sm' mb="2" textTransform='uppercase' fontWeight="bold" textDecoration="underline">
                {combo.title}
              </Heading>
              {combo.combo.map((item, index) => (
                <Text key={index} fontSize='md'>
                  <span>{item}</span>
                </Text>
              ))}
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SyncUpFlowCombos;
