import {useState} from "react";
import {
  Image,
  Box,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  // Select,
  useMediaQuery,
} from "@chakra-ui/react";
import { StateList } from "./StateList.js"; // Import the state list

// import { MultiSelect } from 'chakra-multiselect'
import Select from 'react-select';
import theme from "../theme.js"; // Import the theme

export default function MapWithFilters({
  setViewStateModal,
  selectedStates,
  setSelectedStates,
  isAllStatesChecked,
  setIsAllStatesChecked,
}) {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`); // Use the 'sm' breakpoint
  const [isTablet] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`); // Use 'md' and 'lg' breakpoints
  // const [value, setValue] = useState([])
  // const [isAllStatesChecked, setIsAllStatesChecked] = useState(false); // State for "All States" checkbox
  const templateColumns = isMobile? "1fr" : "repeat(2, 1fr)";
  const templateRows = "40% 55%";
  const defaultCardColor = "white.50"; // Use the theme color
  const defaultFontColor = "black";
  const labelMarginBottom = "0.5em";

  // const isMobile = useMediaQuery("(max-width: 768px)")[0]; // Check if the screen size is mobile or smaller


  const stateOptions = Object.values(StateList).map((state) => ({
    value: state,
    label: state,
  }));

  // Handle selection logic
  const handleChange = (selectedOptions) => {
    setSelectedStates(selectedOptions || []);
  };

  // Handle "All States" checkbox logic
  const handleAllStatesChange = (e) => {
    const isChecked = e.target.checked;
    setIsAllStatesChecked(isChecked);

    if (isChecked) {
      // If "All States" is checked, clear the selected options
      setSelectedStates([]);
    }
  };

  return (
    <Card
      width="100%"
      height="100%"
      backgroundColor={defaultCardColor}
      padding={isTablet? "0" :"1em"}
    >
      <Grid
        templateColumns={templateColumns}
        templateRows={templateRows}
        height={isMobile? "50%" : "100%"}
        gap={2}
        color={defaultFontColor}
        padding="1rem .5em 1rem .5em"
      >
        <GridItem>
          <Heading
            size={"sm"}
            marginBottom={labelMarginBottom}
          >
            Quantile
          </Heading>
          <Card
            backgroundColor={defaultCardColor}
            padding=".5em"
            borderRadius="md"
            color={defaultFontColor}
          >
            <CardBody padding=".5em">
              <RadioGroup >
                <Stack spacing={35} direction='row'>
                  <Radio value='Quantile'>
                    Quantile
                  </Radio>
                  <Radio value='Quintile'>
                    Quintile
                  </Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Heading
            size={"sm"}
            marginBottom={labelMarginBottom}
          >
            Data Display Type
          </Heading>
          <Card
            backgroundColor={defaultCardColor}
            padding=".5em"
            borderRadius="md"
            color={defaultFontColor}
          >
            <CardBody padding=".5em">
              <RadioGroup >
                <Stack spacing={35} direction='row'>
                  <Radio value='Rank'>
                    Rank
                  </Radio>
                  <Radio value='Fraction'>
                    Fraction
                  </Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
        <Heading
          size={"sm"}
          marginBottom={labelMarginBottom}
        >
          {`Condition(s)`}
        </Heading>
          <Card
            backgroundColor={defaultCardColor}
            padding="0 .5em .5em .5em"
            borderRadius="md"
            color={defaultFontColor}
            height="80%"
          >
            <CardBody display="flex" flexDirection="row" padding=".5em">
              <Stack direction="column"  marginRight="3rem" spacing={0}>
                <Checkbox value="Arthritis">
                  Arthistis
                </Checkbox>
                <Checkbox value="Depression">
                  Depression
                </Checkbox>
                <Checkbox value="Diabetes">
                  Diabetes
                </Checkbox>
                <Checkbox value="Disability">
                  Disability
                </Checkbox>
              </Stack>
              <Stack direction="column" spacing={0}>
                <Checkbox value="Obesity">
                  Obesity
                </Checkbox>
                <Checkbox value="Stoke">
                  Stroke
                </Checkbox>
                <Checkbox value="CHD">
                  CHD
                </Checkbox>
                <Checkbox value="Mobility">
                  Mobility
                </Checkbox>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Heading
            size={"sm"}
            marginBottom={labelMarginBottom}
          >
            States
          </Heading>
          <Box
            // paddingTop="1rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height={isTablet? "" : "100%"}
          >
                        <Select
              options={stateOptions}
              value={selectedStates}
              onChange={handleChange}
              isMulti
              placeholder="Choose states"
              closeMenuOnSelect={false}
              isDisabled={isAllStatesChecked} // Disable the Select component if "All States" is checked
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "gray.300",
                  boxShadow: "none",
                  "&:hover": { borderColor: "gray.400" },
                  minHeight: "40px",
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 9999,
                }),
                valueContainer: (base) => ({
                  ...base,
                  flexWrap: "wrap",
                  overflowY: "auto",
                  maxHeight: "70px",
                  padding: "4px",
                  scrollbarWidth: "thin",
                  "&::-webkit-scrollbar": {
                    width: "6px",
                    height: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#c4c4c4",
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#f0f0f0",
                  },
                }),
                multiValue: (base) => ({
                  ...base,
                  margin: "2px",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#f0f0f0" : "white",
                  color: "black",
                  "&:active": {
                    backgroundColor: "#e2e8f0",
                  },
                }),
              }}
              menuPortalTarget={document.body}
              menuPosition="absolute"
              menuPlacement="auto"
            />
            <Checkbox
              isChecked={isAllStatesChecked}
              onChange={handleAllStatesChange}
            >
              <Box as="span" pointerEvents="none">
                All States
              </Box>
            </Checkbox>
            <Box
            display="flex"
            flexDirection="row"
            justifyContent={isMobile? "space-around" : "flex-end"}
            alignItems="center"
            >
              {isMobile?
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="sm"
                  marginTop="1rem"
                  width="50%"
                  marginRight=".5em"
                  alignSelf="end"
                  onClick={() => setViewStateModal(true)}
                >
                  View Selected States
                </Button>
                :
                null
              }
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="sm"
                  marginTop="1rem"
                  width="140px"
                  alignSelf="end"
                >
                  Update Filters
                </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>

    </Card>
  )
}