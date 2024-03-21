import { extendTheme } from "@chakra-ui/react";

const commonTheme = {
  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.900",
      },
    },
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  colors: {
    brand: {
      bg: "#9747FF",
      text: "#fff",
      card: "#0A99FF",
    },
    green: {
      1: "#005B41",
      2: "#008170",
    },
    black: {
      primary: "#232D3F",
    },
    blue: {
      1: "#232D3F",
    },
  },
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
      bg: "#9747FF",
    },
  },
};

export const theme = extendTheme(commonTheme);
