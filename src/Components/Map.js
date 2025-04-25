import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
} from '@chakra-ui/react';// Import the heatmap image
import MapWithFilters from './MapWithFilters.js'; // Import the MapWithFilters component

export default function Map() {
  const defaultCardColor = 'gray.100';
  const templateColumns = '2fr 1fr'


  return (
    <Card
      backgroundColor={defaultCardColor}
      width="100%"
      height="100%"
      >
      <CardHeader
        color="white"
        fontSize="2xl"
        textAlign="center"
        padding="1rem .5em 1rem .5em"
      >
        2021 CDC Places Ranking 2024 Release, FL=2019
      </CardHeader>
      <Grid templateColumns={templateColumns} gap={2} color="white">
        <GridItem>
          <MapWithFilters />
        </GridItem>
        <GridItem>
          Two
        </GridItem>
      </Grid>
    </Card>
  );
}
