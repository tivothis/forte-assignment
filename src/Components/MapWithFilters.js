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
} from "@chakra-ui/react";
import { StateList } from "./StateList.js"; // Import the state list
// import { MultiSelect } from 'chakra-multiselect'


export default function MapWithFilters() {
  const [value, setValue] = useState([])
  const templateColumns = "repeat(2, 1fr)";
  const templateRows = "40% 55%";
  const defaultCardColor = "white.50"; // Use the theme color
  const defaultFontColor = "black";
  const labelMarginBottom = "0.5em";

  const stateOptions = Object.values(StateList).map((state) => ({
    value: state,
    label: state,
  }));
  console.log("🚀 ~ stateOptions ~ stateOptions:", stateOptions)

  return (
    <Card
      width="100%"
      height="100%"
      backgroundColor={defaultCardColor}
      padding="1em"
    >
      <Image
        src={"/heatmap2.jpg"}
        alt="Heatmap"
        width="100%"
        height="auto"
      />
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
            height="100%"
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

        </GridItem>
      </Grid>

    </Card>
  )
}