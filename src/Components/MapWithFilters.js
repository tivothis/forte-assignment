import {
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
  useMediaQuery,
} from "@chakra-ui/react";
import { StateList } from "./StateList.js";
import Select from 'react-select';
import theme from "../theme.js";

export default function MapWithFilters({
  setViewStateModal,
  selectedStates,
  setSelectedStates,
  isAllStatesChecked,
  setIsAllStatesChecked,
}) {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [isTablet] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  const templateColumns = isMobile? "1fr" : "repeat(2, 1fr)";
  const templateRows = isTablet || isMobile? "auto" : "40% 45%";
  const labelMarginBottom = "0.5em";

  const styling = {
    parentCardColor: theme.colors.gray[100],
    childCardColor: theme.colors.white[50],
    fontColor: theme.colors.blue[200],
    borderColor: theme.colors.blue[100],
    borderWidth: "1px",
  }



  const stateOptions = Object.values(StateList).map((state) => ({
    value: state,
    label: state,
  }));

  const handleChange = (selectedOptions) => {
    setSelectedStates(selectedOptions || []);
  };

  const handleAllStatesChange = (e) => {
    const isChecked = e.target.checked;
    setIsAllStatesChecked(isChecked);

    if (isChecked) {
      setSelectedStates([]);
    }
  };

  return (
    <Card
    width="100%"
    height="100%"
    backgroundColor={styling.parentCardColor}
    padding={isTablet || isMobile ? "0" : "1em"}
    borderColor={styling.borderColor}
    borderWidth={styling.borderWidth}
    display="flex"
    flexDirection="column"

    >
      <Grid
        templateColumns={templateColumns}
        templateRows={templateRows}
        flex="1"
        height={isMobile? "50%" : "100%"}
        gap={2}
        color={styling.fontColor}
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
            backgroundColor={styling.childCardColor}
            borderColor={styling.borderColor}
            borderWidth={styling.borderWidth}
            padding={isTablet || isMobile? "0" :".5em"}
            borderRadius="md"
            color={styling.fontColor}
          >
            <CardBody padding=".5em">
              <RadioGroup >
                <Stack spacing={35} direction='row'>
                  <Radio value='Quantile' colorScheme="blue">
                    Quantile
                  </Radio>
                  <Radio value='Quintile' colorScheme="blue">
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
            backgroundColor={styling.childCardColor}
            borderColor={styling.borderColor}
            borderWidth={styling.borderWidth}
            padding={isTablet || isMobile? "0" :".5em"}
            borderRadius="md"
            color={styling.fontColor}
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
            backgroundColor={styling.childCardColor}
            borderColor={styling.borderColor}
            borderWidth={styling.borderWidth}
            padding={isTablet || isMobile? "0" : "0 .5em .5em .5em"}
            borderRadius="md"
            color={styling.fontColor}
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
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height={isTablet? "" : "100%"}
            paddingBottom={isMobile? "1em" : "0"}
          >
            <Select
              options={stateOptions}
              value={selectedStates}
              onChange={handleChange}
              isMulti
              placeholder="Choose states"
              closeMenuOnSelect={false}
              isDisabled={isAllStatesChecked}
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
                  scrollbarColor: 'gray transparent',
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
            marginBottom={isMobile? "1em" : "0"}
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
                <Box flex="1" />

                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="sm"
                  marginTop="1em"
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