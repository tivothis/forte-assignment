import {
  Image,
  Box,
} from "@chakra-ui/react";
// import heatMap from "/Users/tvo/forte-assignment/public/heatmap.png"

export default function MapWithFilters() {
  return (
    <Box
      width="100%"
      height="100%"
      backgroundColor="gray.100"
      padding="1rem .5em 1rem .5em"
    >
      <Image
        src={"/heatmap2.jpg"}
        alt="Heatmap"
        width="100%"
        height="100%"
        objectFit="cover"
      />

    </Box>
  )
}