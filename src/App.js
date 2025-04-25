import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'; // Import Box from Chakra UI
import Map from './Components/Map.js'; // Import the Map component
// import theme from './theme'; // Import the theme

function App() {

  const defaultTabColor = 'black';
  const defaultBackgroundColor = 'white.50'; // Use the theme color
  const tabBorder="1px solid black";

  return (
    <Box
      backgroundColor={defaultBackgroundColor} // Use the theme color
      display="flex"
      // flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
      height="100vh"
      width="100vw"
    >
      <Tabs
        orientation="vertical"
        variant='soft-rounded'
        display="flex"
        alignItems="center" // Center tabs vertically
        justifyContent="center" // Center tabs horizontally
        width="100%"
        height="100%"
        defaultIndex={3}
      >
        <TabList
          width="30%"
          padding="1rem .5em 1rem .5em"
          gap="1rem" // Add spacing between tabs
        >
          <Tab
            color={defaultTabColor}
            border={tabBorder}
          >
            MA Enrollment Bar Chart
          </Tab>
          <Tab
            color={defaultTabColor}
            border={tabBorder}
          >
            MA Enrollment Slope Table
          </Tab>
          <Tab
            color={defaultTabColor}
            border={tabBorder}
          >
            Medicaid Drug Data
          </Tab>
          <Tab
            color={defaultTabColor}
            border={tabBorder}
          >
            2021 CDC Places Ranking
          </Tab>
          <Tab
            color={defaultTabColor}
            border={tabBorder}
          >
            Medicare Part B Drug Spending
          </Tab>
        </TabList>

        <TabPanels color="black">
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
