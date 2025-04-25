import React from 'react';
import {
  Card,
  CardHeader,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';// Import the heatmap image



export default function StateCards ()  {
  return (
    <Card
      padding="1em"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Card
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="1em"
      >
        <CardHeader>
          Arkansas
        </CardHeader>
        <Box fontSize="12px" >
          <Text>County: Monroe</Text>
          <Text>Rank: 1</Text>
          <Text>Value: 0.1</Text>
          <Text>Percentile: 0.1</Text>
          <Text>Percentile Rank: 0.1</Text>
        </Box>
      </Card>
      <Box flex="1" />
      <Button
        colorScheme="teal"
        alignSelf="flex-end"
      >
        Export
      </Button>
    </Card>
  );
}