import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    xs: '480px',
    sm: '830px',
    md: '1000px',
    lg: '1100px',
    xl: '1500px',
  },
  colors: {
    gray: {
      50: '#fafafa', 
      100: '#f2f2f2',
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
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50', 
        color: 'white', 
      },
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "blue.200", 
          _checked: {
            borderColor: "blue.200", 
            bg: "blue.200", 
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          borderColor: "blue.200",
          _checked: {
            borderColor: "blue.200", 
            bg: "blue.200", 
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold", 
      },
      variants: {
        solid: {
          bg: "blue.200", 
          color: "white", 
          _hover: {
            bg: "transparent", 
            color: "blue.200", 
            border: "2px solid", 
            borderColor: "blue.200", 
          },
          _active: {
            bg: "transparent", 
            color: "blue.200", 
            border: "2px solid", 
            borderColor: "blue.200", 
          },
        },
      },
      defaultProps: {
        variant: "solid", 
      },
    },
  },
});

export default theme;