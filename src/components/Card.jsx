import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Card = ({ title, combo, referenceLinks }) => {
  return (
    <Box mb="4">
      <Heading as="h3" size="md" mb="2" textAlign="center">
        {title}
      </Heading>
      {combo && (
        <Box>
          {combo.map((item, index) => (
            <Text key={index} mb="2" textAlign="center">
              {item}
            </Text>
          ))}
        </Box>
      )}
      {referenceLinks && (
        <Box mt="2" textAlign="center">
          <a href={referenceLinks} target="_blank" rel="noopener noreferrer">
            Reference Link
          </a>
        </Box>
      )}
    </Box>
  );
};

export default Card;
