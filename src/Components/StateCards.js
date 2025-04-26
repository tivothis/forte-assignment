import React from 'react';
import {
  Card,
  CardHeader,
  Text,
  Box,
  Button,
  Heading,
} from '@chakra-ui/react';// Import the heatmap image
import { StateList } from './StateList.js'; // Import the state list



export default function StateCards ({ selectedStates, allStates }) {


  return (
    <Card
      padding="1em"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Heading
        size={"sm"}
        margin="1em 0 0 0"
      >
        Selected States
      </Heading>
      <Box
        maxHeight="250px"
        overflowY="auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'gray transparent',
        }}
      >
        {selectedStates?.map((state) => (
          <Card
            key={state.value}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            padding="1em"
            marginBottom=".25em"
          >
            <CardHeader fontWeight="bold" padding="0" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
              {state.label}
              <Text fontSize="12px" fontWeight="bold">County: Monroe</Text>
            </CardHeader>
            <Box fontSize="12px" display="flex" flexDirection="row" justifyContent="space-between">
              <Box>
                <Text>Population: 6683</Text>
                <Text>Rank: 5</Text>
              </Box>
              <Box>
                <Text>COPD: 5</Text>
                <Text>fips: 05095</Text>

              </Box>
            </Box>
          </Card>
        ))}
        {allStates?
          <>
          {Object.values(StateList).map((state) => (
            <Card
              key={state}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              padding="1em"
              marginBottom=".25em"
            >
              <CardHeader fontWeight="bold" padding="0" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                {state}
                <Text fontSize="12px" fontWeight="bold">County: Monroe</Text>
              </CardHeader>
              <Box fontSize="12px" display="flex" flexDirection="row" justifyContent="space-between">
                <Box>
                  <Text>Population: 6683</Text>
                  <Text>Rank: 5</Text>
                </Box>
                <Box>
                  <Text>COPD: 5</Text>
                  <Text>fips: 05095</Text>

                </Box>
              </Box>
            </Card>
          ))}
          </>
          :
          null
      }
      </Box>
      <Box flex="1" />
      <Button
        colorScheme="teal"
        alignSelf="flex-end"
        width="140px"
        size="sm"
      >
        Export
      </Button>
    </Card>
  );
}