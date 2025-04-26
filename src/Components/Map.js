import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  Image,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react';// Import the heatmap image
import MapWithFilters from './MapWithFilters.js';
import StateCards from './StateCards.js'; // Import the state cards
import theme from '../theme.js'; // Import the theme

// export const MapContext = createContext();

export default function Map() {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`); // Use the 'sm' breakpoint
  const [isTablet] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`); // Use 'md' and 'lg' breakpoints
  const [selectedStates, setSelectedStates] = useState([]);
  const [isAllStatesChecked, setIsAllStatesChecked] = useState(false); // State for "All States" checkbox

  const [viewStateModal, setViewStateModal] = useState(false); // State to control the modal visibility
  const defaultCardColor = "white.50"; // Use the theme color
  const defaultFontColor = "black";
  const templateColumns = isMobile? "1fr" : isTablet? "1fr 1fr" : "2fr 1fr"




  return (
      <Card
        backgroundColor={defaultCardColor}
        width="100%"
        height="100%"
        maxHeight="100vh" // Ensure the Card does not exceed the viewport height
        overflow="auto" // Handle any overflowing content
        padding="1rem .5em 1rem .5em"
        >
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
            <CardHeader
              color={defaultFontColor}
              fontSize="2xl"
              textAlign="center"
              padding="0 .5em 1rem .5em"
            >
              2021 CDC Places Ranking 2024 Release, FL=2019
            </CardHeader>
              <Image
                src={"/heatmap2.jpg"}
                alt="Heatmap"
                width="75%"
                height="auto"
              />
          </Box>
        <Grid
          templateColumns={templateColumns}
          gap={3}
          color={defaultFontColor}>
          <GridItem>
            <MapWithFilters
              setViewStateModal={setViewStateModal}
              selectedStates={selectedStates}
              setSelectedStates={setSelectedStates}
              isAllStatesChecked={isAllStatesChecked}
              setIsAllStatesChecked={setIsAllStatesChecked}
            />
          </GridItem>
          <GridItem>
            {isMobile?
            null:
            <StateCards selectedStates={selectedStates} allStates={isAllStatesChecked}/>
            }
          </GridItem>
        </Grid>
        <Modal isOpen={viewStateModal} onClose={() => setViewStateModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <StateCards
              selectedStates={selectedStates}
              allStates={isAllStatesChecked}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      </Card>
  );
}
