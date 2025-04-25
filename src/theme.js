import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '30em', // Small devices (480px)
    md: '48em', // Medium devices (768px)
    lg: '62em', // Large devices (992px)
    xl: '80em', // Extra large devices (1280px)
  },
  colors: {
    gray: {
      50: '#161616', // Custom gray.50 color
      100: '#0e0e0e', // You can override other shades as well
      200: '#1a1a1a',
    },
    white: {
      50: '#ffffff',
     } // Custom white color
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50', // Use the custom gray.50 color for the body background
        color: 'white', // Set a default text color
      },
    },
  },
});

export default theme;