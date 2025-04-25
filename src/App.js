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

  const defaultTabColor = 'white';

  return (
    <Box
      backgroundColor={'gray.50'} // Use the theme color
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
        >
          <Tab
            color={defaultTabColor}
          >
            MA Enrollment Bar Chart
          </Tab>
          <Tab
            color={defaultTabColor}
          >
            MA Enrollment Slope Table
          </Tab>
          <Tab
            color={defaultTabColor}
          >
            Medicaid Drug Data
          </Tab>
          <Tab
            color={defaultTabColor}
          >
            2021 CDC Places Ranking
          </Tab>
          <Tab
            color={defaultTabColor}
          >
            Medicare Part B Drug Spending
          </Tab>
        </TabList>

        <TabPanels>
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
