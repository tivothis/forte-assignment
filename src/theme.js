import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    // sm: '30em', // Small devices (480px)
    // md: '48em', // Medium devices (768px)
    // lg: '62em', // Large devices (992px)
    // xl: '80em', // Extra large devices (1280px)
    xs: '480px',
    sm: '830px',
    md: '1000px',
    lg: '1100px',
    xl: '1500px',
  },
  colors: {
    gray: {
      50: '#fafafa', // Custom gray.50 color
      100: '#f2f2f2', // Custom gray.50
        },
        white: {
      50: '#ffffff',
        },
        black: {
      50: '#000000',
        },
        blue: {
          50: "#EBF8FF", // Light blue
          100: "#4299E1", // Medium blue
          200: "#2B6CB0"  // Dark blue
        }
      // Custom white color
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50', // Use the custom gray.50 color for the body background
        color: 'white', // Set a default text color
      },
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "blue.200", // Use #234d28 for the default border color
          _checked: {
            borderColor: "blue.200", // Use #234d28 for the border color when checked
            bg: "blue.200", // Use #234d28 for the background color when checked
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          borderColor: "blue.200", // Use #234d28 for the default border color
          _checked: {
            borderColor: "blue.200", // Use #234d28 for the border color when checked
            bg: "blue.200", // Use #234d28 for the background color when checked
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold", // Ensure buttons have bold text
      },
      variants: {
        solid: {
          bg: "blue.200", // Default background color
          color: "white", // Default font color
          _hover: {
            bg: "transparent", // Background becomes transparent on hover
            color: "blue.200", // Font color changes to blue.200 on hover
            border: "2px solid", // Add a 2px solid border on hover
            borderColor: "blue.200", // Border color on hover
          },
          _active: {
            bg: "transparent", // Background becomes transparent on click
            color: "blue.200", // Font color changes to blue.200 on click
            border: "2px solid", // Add a 2px solid border on click
            borderColor: "blue.200", // Border color on click
          },
        },
      },
      defaultProps: {
        variant: "solid", // Set the default variant to solid
      },
    },
  },
});

export default theme;