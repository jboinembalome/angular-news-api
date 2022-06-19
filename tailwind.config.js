const path = require('path');
const colors = require('tailwindcss/colors');
const generatePalette = require(path.resolve(__dirname, ('src/app/shared/tailwind/utils/generate-palette')));

/**
 * Custom palettes
 *
 * Uses the generatePalette helper method to generate
 * Tailwind-like color palettes automatically
 */
const customPalettes = {
  orangeSofa: generatePalette('#E89759'),
  nightBlue: generatePalette('#183650')
};

/**
* Themes
*/
const themes = {
  // Default theme is required for theming system to work correctly
  'default': {
    primary: {
      ...colors.indigo,
      DEFAULT: colors.indigo[600]
    },
    accent: {
      ...colors.slate,
      DEFAULT: colors.slate[800]
    },
    warn: {
      ...colors.red,
      DEFAULT: colors.red[600]
    },
    'on-warn': {
      500: colors.red['50']
    }
  },
  // Rest of the themes will use the 'default' as the base theme
  // and extend them with their given configuration
  'orangeSofa': {
    primary: customPalettes.orangeSofa
  },
  'teal': {
    primary: {
      ...colors.teal,
      DEFAULT: colors.teal[600]
    }
  },
  'rose': {
    primary: colors.rose
  },
  'purple': {
    primary: {
      ...colors.purple,
      DEFAULT: colors.purple[600]
    }
  },
  'amber': {
    primary: colors.amber
  }
};

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,scss,ts}'],
  important: true,
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      teal: colors.teal,
      green: colors.green,
      amber: colors.amber,
      orange: colors.orange,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      orangeSofa: customPalettes.orangeSofa,
      nightBlue : customPalettes.nightBlue
    }
  },
  plugins: [
    // Tailwind plugins
    require(path.resolve(__dirname, ('src/app/shared/tailwind/plugins/utilities'))),
    require(path.resolve(__dirname, ('src/app/shared/tailwind/plugins/icon-size'))),
    require(path.resolve(__dirname, ('src/app/shared/tailwind/plugins/theming')))({themes}),
    require('@tailwindcss/typography')({modifiers: ['sm', 'lg']}),
  ],
};