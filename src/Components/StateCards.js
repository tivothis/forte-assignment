import React from 'react';
import {
  Card,
  CardHeader,
  Text,
  Box,
  Button,
  Heading,
} from '@chakra-ui/react';// Import the heatmap image



export default function StateCards ()  {
  return (
    <Card
      padding="1em"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Heading
        size={"sm"}
        margin="1em 0 1em 0"
      >
        Selected States
      </Heading>
      <Card
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="1em"
      >
        <CardHeader padding="0">
          Arkansas
        </CardHeader>
        <Box fontSize="12px" >
          <Text>County: Monroe</Text>
          <Text>Population: 6683</Text>
          <Text>Rank: 5</Text>
          <Text>COPD: 5</Text>
          <Text>fips: 05095</Text>
        </Box>
      </Card>
      <Box flex="1" />
      <Button
        colorScheme="teal"
        alignSelf="flex-end"
        width="50%"
        size="sm"
      >
        Export
      </Button>
    </Card>
  );
}