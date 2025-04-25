import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
} from '@chakra-ui/react';// Import the heatmap image
import MapWithFilters from './MapWithFilters.js';
import StateCards from './StateCards.js'; // Import the state cards

export default function Map() {
  const defaultCardColor = "white.50"; // Use the theme color
  const defaultFontColor = "black";
  const templateColumns = "2fr 1fr"


  return (
    <Card
      backgroundColor={defaultCardColor}
      width="100%"
      height="100%"
      padding="1rem .5em 1rem .5em"
      >
      <CardHeader
        color={defaultFontColor}
        fontSize="2xl"
        textAlign="center"
        padding="1rem .5em 1rem .5em"
      >
        2021 CDC Places Ranking 2024 Release, FL=2019
      </CardHeader>
      <Grid
        templateColumns={templateColumns}
        gap={3}
        color={defaultFontColor}>
        <GridItem>
          <MapWithFilters />
        </GridItem>
        <GridItem>
          <StateCards />
        </GridItem>
      </Grid>
    </Card>
  );
}
