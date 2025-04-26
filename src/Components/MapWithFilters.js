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
  Select,
  useMediaQuery,
} from "@chakra-ui/react";
import { StateList } from "./StateList.js"; // Import the state list
// import StateCards from "./StateCards.js"; // Import the state cards
// import { MultiSelect } from 'chakra-multiselect'


export default function MapWithFilters({ setViewStateModal}) {
  const isMobile = useMediaQuery("(max-width: 480px)")[0]; // Check if the screen size is mobile or smaller
  const isTablet = useMediaQuery("(max-width: 768px)")[0]; // Check if the screen size is tablet or smaller// Use the context
  const [value, setValue] = useState([])
  const templateColumns = isTablet? "1fr" : "repeat(2, 1fr)";
  const templateRows = isTablet? "" : "40% 55%";
  const defaultCardColor = "white.50"; // Use the theme color
  const defaultFontColor = "black";
  const labelMarginBottom = "0.5em";

  // const isMobile = useMediaQuery("(max-width: 768px)")[0]; // Check if the screen size is mobile or smaller


  const stateOptions = Object.values(StateList).map((state) => ({
    value: state,
    label: state,
  }));

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
            // padding="1rem .5em 1rem .5em"
            borderRadius="md"
            color={defaultFontColor}
          >
            <CardBody>
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
            // padding="1rem .5em 1rem .5em"
            borderRadius="md"
            color={defaultFontColor}
          >
            <CardBody>
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
            // padding="1rem .5em 1rem .5em"
            borderRadius="md"
            color={defaultFontColor}
            height="100%"
          >
            <CardBody display="flex" flexDirection="row">
              <Stack direction="column" spacing={1} marginRight="3rem">
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
              <Stack direction="column" spacing={1}>
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
              {/* <MultiSelect
                options={stateOptions}
                value={value}
                label='Choose an item'
                onChange={setValue}
              /> */}
          <Select
            value={value}
            label='Choose an item'
            onChange={setValue}
            isMulti
          >
            {stateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </Select>
            <Box
            display="flex"
            flexDirection="row"
            justifyContent={isMobile? "space-between" : "flex-end"}
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
                  width="50%"
                  alignSelf="end"
                >
                  Update
                </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>

    </Card>
  )
}