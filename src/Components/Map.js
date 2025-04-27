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
} from '@chakra-ui/react';
import MapWithFilters from './MapWithFilters.js';
import StateCards from './StateCards.js';
import theme from '../theme.js';

export default function Map() {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [isTablet] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const [selectedStates, setSelectedStates] = useState([]);
  const [isAllStatesChecked, setIsAllStatesChecked] = useState(false);

  const [viewStateModal, setViewStateModal] = useState(false);


  const templateColumns = isMobile? "1fr" : isTablet? "1fr 1fr" : "2fr 1fr"

  const parentCardStyling = {
    backgroundColor: theme.colors.gray[50],
    fontColor: theme.colors.blue[200],
    width: "100%",
    maxHeight: "100vh",
    overflow: "auto",
    marginBottom: isMobile? "7em" : "0",
  }



  return (
      <Card
        backgroundColor={parentCardStyling.backgroundColor}
        width={parentCardStyling.width}
        padding="1rem .5em 1rem .5em"
        marginBottom={parentCardStyling.marginBottom}
        minWidth={parentCardStyling.minWidth}
        >
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
            <CardHeader
              color={parentCardStyling.fontColor}
              fontSize="30px"
              fontWeight="bold"
              textAlign="center"
              padding="0 .5em 1rem .5em"
            >
              2021 CDC Places Ranking 2024 Release, FL=2019
            </CardHeader>
              <Image
                src={"/heatmap2.jpg"}
                alt="Heatmap"
                width={isMobile? "100%" :"70%"}
                height="auto"
                marginBottom="1em"
                borderRadius="10px"
              />
          </Box>
        <Grid
          templateColumns={templateColumns}
          gap={3}
        >
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
          <ModalBody>
          <ModalCloseButton zIndex="1" color="black" margin=".5em 2em 0 0"/>
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
