import React from 'react';
import {
  Card,
  CardHeader,
  Text,
  Box,
  Button,
  Heading,
} from '@chakra-ui/react';
import { StateList } from './StateList.js';
import theme from '../theme.js';


export default function StateCards ({ selectedStates, allStates }) {

  const styling = {
    parentCardColor: theme.colors.gray[100],
    childCardColor: theme.colors.white[50],
    fontColor: theme.colors.blue[200],
    borderColor: theme.colors.blue[100],
    borderWidth: "1px",
  }

  return (
    <Card
      padding="1em"
      height="100%"
      display="flex"
      flexDirection="column"
      backgroundColor={styling.parentCardColor}
      borderColor={styling.borderColor}
      borderWidth={styling.borderWidth}
    >
      <Heading
        size={"sm"}
        margin="0"
        color={styling.fontColor}
      >
        Selected States
      </Heading>
      <Box
        maxHeight="200px"
        overflowY="auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'gray transparent',
        }}
      >
        {selectedStates?.map((state) => (
          <Card
            key={state.value}
            borderColor={styling.borderColor}
            borderWidth={styling.borderWidth}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            padding="1em"
            marginBottom=".25em"
          >
            <CardHeader
              color={styling.fontColor}
              fontWeight="bold"
              padding="0"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {state.label}
              <Text fontSize="12px" fontWeight="bold" color={styling.fontColor}>County: Monroe</Text>
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
              borderColor={styling.borderColor}
              borderWidth={styling.borderWidth}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              padding="1em"
              marginBottom=".25em"
            >
              <CardHeader
                color={styling.fontColor}
                fontWeight="bold"
                padding="0"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {state}
                <Text fontSize="12px" fontWeight="bold" color={styling.fontColor}>County: Monroe</Text>
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
        marginTop=".5em"
      >
        Export
      </Button>
    </Card>
  );
}