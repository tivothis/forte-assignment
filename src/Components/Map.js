import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  Image,
  useMediaQuery,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';// Import the heatmap image
import MapWithFilters from './MapWithFilters.js';
import StateCards from './StateCards.js'; // Import the state cards

// export const MapContext = createContext();

export default function Map() {
  const isMobile = useMediaQuery("(max-width: 480px)")[0]; // Check if the screen size is mobile or smaller
  const isTablet = useMediaQuery("(max-width: 768px)")[0]; // Check if the screen size is tablet or smaller
  // const { isOpen, onClose } = useDisclosure()
  const [viewStateModal, setViewStateModal] = useState(false); // State to control the modal visibility
  const defaultCardColor = "white.50"; // Use the theme color
  const defaultFontColor = "black";
  const templateColumns = isMobile? "1fr" : isTablet? "1fr 1fr" : "2fr 1fr"




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
          <Image
            src={"/heatmap2.jpg"}
            alt="Heatmap"
            width="100%"
            height="auto"
          />
        <Grid
          templateColumns={templateColumns}
          gap={3}
          color={defaultFontColor}>
          <GridItem>
            <MapWithFilters setViewStateModal={setViewStateModal} />
          </GridItem>
          <GridItem>
            {isMobile?
            null:
            <StateCards />
            }
          </GridItem>
        </Grid>
        <Modal isOpen={viewStateModal} onClose={() => setViewStateModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <StateCards />
          </ModalBody>
        </ModalContent>
      </Modal>
      </Card>
  );
}
