import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useMediaQuery,
} from '@chakra-ui/react'; // Import Box from Chakra UI
import Map from './Components/Map.js'; // Import the Map component
// import theme from './theme'; // Import the theme

function App() {

  const defaultTabColor = 'black';
  const defaultBackgroundColor = 'white.50'; // Use the theme color
  const tabBorder="1px solid black";
  const isTablet = useMediaQuery('(max-width: 768px)')[0]; // Check if the screen size is tablet or smaller
  const isMobile = useMediaQuery('(max-width: 480px)')[0]; // Check if the screen size is mobile or smaller


  return (
    <Box
    backgroundColor={defaultBackgroundColor} // Use the theme color
    display="flex"
    flexDirection="column" // Ensure the layout stacks vertically
    height="100vh"
    width="100vw"
  >
    <Tabs
      orientation={isMobile ? "horizontal" : isTablet ? "horizontal" : "vertical"} // Horizontal for mobile, vertical for desktop
      variant="soft-rounded"
      display="flex"
      flexDirection={isMobile ? "column-reverse" : isTablet ? "column" : "row"} // Tabs at the bottom for mobile
      alignItems={isMobile ? "center" : isTablet ? "flex-start" : "center"} // Center tabs for mobile and desktop
      justifyContent={isMobile ? "flex-end" : isTablet ? "flex-start" : "center"} // Adjust alignment
      width="100%"
      height="100%"
      defaultIndex={3}
    >
      <TabList
        width={isMobile ? "100%" : isTablet ? "100%" : "30%"} // Full width for mobile and tablet
        padding="1rem .5em 1rem .5em"
        gap={isMobile? "0" : isTablet? ".25em" : "1rem"} // Add spacing between tabs
        flexDirection={isMobile ? "row" : isTablet ? "row" : "column"} // Horizontal for mobile
        flexShrink={0} // Prevent shrinking
        position={isMobile ? "absolute" : "static"} // Position tabs at the bottom for mobile
        bottom={isMobile ? 0 : "auto"} // Align tabs to the bottom for mobile
        backgroundColor={isMobile ? "white" : "transparent"} // Add background for mobile tabs
        zIndex={isMobile ? 1 : "auto"} // Ensure tabs are above content for mobile
      >
        <Tab
          color={defaultTabColor}
          border={tabBorder}
          fontSize={isMobile ? "10px" : "inherit"} // Set font size to 8px for mobile, inherit otherwise
        >
          MA Enrollment Bar Chart
        </Tab>
        <Tab
          color={defaultTabColor}
          border={tabBorder}
          fontSize={isMobile ? "10px" : "inherit"} // Set font size to 8px for mobile, inherit otherwise
        >
          MA Enrollment Slope Table
        </Tab>
        <Tab
          color={defaultTabColor}
          border={tabBorder}
          fontSize={isMobile ? "10px" : "inherit"} // Set font size to 8px for mobile, inherit otherwise
        >
          Medicaid Drug Data
        </Tab>
        <Tab
          color={defaultTabColor}
          border={tabBorder}
          fontSize={isMobile ? "10px" : "inherit"} // Set font size to 8px for mobile, inherit otherwise
        >
          2021 CDC Places Ranking
        </Tab>
        <Tab
          color={defaultTabColor}
          border={tabBorder}
          fontSize={isMobile ? "10px" : "inherit"} // Set font size to 8px for mobile, inherit otherwise
        >
          Medicare Part B Drug Spending
        </Tab>
      </TabList>

      <TabPanels
        flex={1} // Allow TabPanels to take the remaining space
        overflow="auto" // Handle overflow if needed
      >
        <TabPanel>
          <p>MA Enrollment Bar Chart</p>
        </TabPanel>
        <TabPanel>
          <p>MA Enrollment Slope Table</p>
        </TabPanel>
        <TabPanel>
          <p>Medicaid Drug Data</p>
        </TabPanel>
        <TabPanel>
          <Map />
        </TabPanel>
        <TabPanel>
          <p>Medicare Part B Drug Spending</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
  );
}

export default App;
