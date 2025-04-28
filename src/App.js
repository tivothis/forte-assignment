import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useMediaQuery,
} from '@chakra-ui/react';
import Map from './Components/Map.js';
import theme from './theme.js';

function App() {


  const tabStyling = {
    border: `2px solid ${theme.colors.blue[200]}`,
    borderRadius: "10px",
    backgroundColor: theme.colors.blue[50],
    tabColor: theme.colors.blue[200],
    fontColor: theme.colors.black[50],
    activeTabFontColor: theme.colors.white[50],
    fontSize: '10px',
    gap: {
      base: "0",
      sm: "0.25em",
      md: "1rem",
    }
  }

  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [isTablet] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);


  return (
    <Box
      // backgroundColor={tabStyling.backgroundColor} // Use the theme color
      backgroundImage="url('/bluebackground.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
      height="100vh"
      width="100vw"
      maxWidth="2000px"
      overflow="hidden"
    >
      <Tabs
        orientation={isMobile || isTablet ? "horizontal" : "vertical"}
        variant="soft-rounded"
        display="flex"
        flexDirection={isMobile ? "column-reverse" : isTablet ? "column" : "row"}
        alignItems={isMobile ? "center" : isTablet ? "flex-start" : "center"}
        justifyContent={isMobile ? "flex-end" : isTablet ? "center" : "flex-start"}
        width="100%"
        height="100%"
        defaultIndex={3}
      >
        <TabList
          width={isMobile || isTablet ? "100%" : "22%"}
          padding="1rem .5em 1rem .5em"
          gap={isMobile ? tabStyling.gap.base : isTablet ? tabStyling.gap.sm : tabStyling.gap.md}
          flexDirection={isMobile || isTablet ? "row" : "column"}
          flexShrink={0}
          position={isMobile ? "absolute" : "static"}
          bottom={isMobile ? 0 : "auto"}
          backgroundColor={isMobile || isTablet? tabStyling.tabColor : "transparent"}
          zIndex={isMobile ? 1 : "auto"}
        >
          <Tab
            color={tabStyling.tabColor}
            background={tabStyling.activeTabFontColor}
            border={tabStyling.border}
            borderRadius={tabStyling.borderRadius}
            fontSize={isMobile ? tabStyling.fontSize : "inherit"}
            _selected={{
              background: theme.colors.blue[200],
              color: tabStyling.activeTabFontColor,
            }}
          >
            MA Enrollment Bar Chart
          </Tab>
          <Tab
            color={tabStyling.tabColor}
            background={tabStyling.activeTabFontColor}
            border={tabStyling.border}
            borderRadius={tabStyling.borderRadius}
            fontSize={isMobile ? tabStyling.fontSize : "inherit"}
            _selected={{
              background: theme.colors.blue[200],
              color: tabStyling.activeTabFontColor,
            }}
          >
            MA Enrollment Slope Table
          </Tab>
          <Tab
            color={tabStyling.tabColor}
            background={tabStyling.activeTabFontColor}
            border={tabStyling.border}
            borderRadius={tabStyling.borderRadius}
            fontSize={isMobile ? tabStyling.fontSize : "inherit"}
            _selected={{
              background: theme.colors.blue[200],
              color: tabStyling.activeTabFontColor,
            }}
          >
            Medicaid Drug Data
          </Tab>
          <Tab
            color={tabStyling.tabColor}
            background={tabStyling.activeTabFontColor}
            border={tabStyling.border}
            borderRadius={tabStyling.borderRadius}
            fontSize={isMobile ? tabStyling.fontSize : "inherit"}
            _selected={{
              background: theme.colors.blue[200],
              color: tabStyling.activeTabFontColor,
            }}
          >
            2021 CDC Places Ranking
          </Tab>
          <Tab
            color={tabStyling.tabColor}
            background={tabStyling.activeTabFontColor}
            border={tabStyling.border}
            borderRadius={tabStyling.borderRadius}
            fontSize={isMobile ? tabStyling.fontSize : "inherit"}
            _selected={{
              background: theme.colors.blue[200],
              color: tabStyling.activeTabFontColor,
            }}
          >
            Medicare Part B Drug Spending
          </Tab>
        </TabList>

        <TabPanels
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          overflow="auto"
          height="100%"
        >
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel overflowY="auto">
            <Map />
          </TabPanel>
          <TabPanel>

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
