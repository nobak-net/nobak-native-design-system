import { themes } from '@storybook/theming';
import { colors } from '../src/styles/colors';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    darkClass: 'midnight',
    dark: { ...themes.dark, appBg: colors.primary[2700], brandImage: 'https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/3d995683-15fd-4ca3-9e0c-aadbe99e7a00/public' },
    light: { ...themes.normal, appBg: colors.primary[100], brandImage: 'https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/3d995683-15fd-4ca3-9e0c-aadbe99e7a00/public' },
    classTarget: 'html',
    stylePreview: true
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#F5F4F7'
      },
      {
        name: 'dark',
        value: '#1C181E'
      }
    ]
  }
};
