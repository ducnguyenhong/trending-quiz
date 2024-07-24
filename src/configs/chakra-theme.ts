import { extendTheme } from '@chakra-ui/react';

const BreakpointConfig = {
  breakpoints: {
    xs: '320px', // mobile
    sm: '480px',
    md: '768px', // tablet
    lg: '992px',
    xl: '1280px', // desktop
    '2xl': '1600px'
  }
};

const ComponentsTheme = {
  components: {
    Text: {
      baseStyle: {
        fontSize: '14px',
        color: '#070707'
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: `'Inter', sans-serif`,
        color: '#070707'
      }
    }
  }
};

const ColorConfig = {
  text: {
    main: '#070707'
  }
};

const FontConfig = {
  fonts: {
    heading: `'Inter', sans-serif`
  }
};

export const chakraTheme = extendTheme({
  ...ComponentsTheme,
  ...FontConfig,
  ...ColorConfig,
  ...BreakpointConfig
  // ...MiscConfig,
  // ...GlobalConfig
});
