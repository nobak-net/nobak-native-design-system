import { TextStyle } from 'react-native';

interface TextInterface {
  displayBold: TextStyle;
  displaySemiBold: TextStyle;
  displayExtraBold: TextStyle;
  H1Bold: TextStyle;
  H1SemiBold: TextStyle;
  H1ExtraBold: TextStyle;
  H2Bold: TextStyle;
  H2SemiBold: TextStyle;
  H2ExtraBold: TextStyle;
  H3Bold: TextStyle;
  H3SemiBold: TextStyle;
  H3ExtraBold: TextStyle;
  H4Bold: TextStyle;
  H4SemiBold: TextStyle;
  H4ExtraBold: TextStyle;
  SubheadingMedium: TextStyle;
  SubheadingBold: TextStyle;
  SubheadingUnderlined: TextStyle;
  SubheadingLight: TextStyle;
  P1Medium: TextStyle;
  P1Bold: TextStyle;
  P1Underlined: TextStyle;
  P1Light: TextStyle;
  P2Medium: TextStyle;
  P2Bold: TextStyle;
  P2Underlined: TextStyle;
  P2Light: TextStyle;
  P3Medium: TextStyle;
  P3Bold: TextStyle;
  P3Underlined: TextStyle;
  P3Light: TextStyle;
  CaptionMedium: TextStyle;
  CaptionBold: TextStyle;
  CaptionUnderlined: TextStyle;
  CaptionLight: TextStyle;
  CaptionBoldUnderlined: TextStyle;
  FooterMedium: TextStyle;
  FooterBold: TextStyle;
  FooterUnderlined: TextStyle;
  FooterLight: TextStyle;
  FooterBoldUnderlined: TextStyle;
  buttonTiny: TextStyle;
  buttonSmall: TextStyle;
  buttonMedium: TextStyle;
  buttonLarge: TextStyle;
}

const texts: TextInterface = {
  displayBold: {
    fontSize: 72.2,
    fontWeight: 'bold',
  },
  displaySemiBold: {
    fontSize: 72.2,
    fontWeight: '500', // semibold
  },
  displayExtraBold: {
    fontSize: 72.2,
    fontWeight: '800', // extrabold
  },
  H1Bold: {
    fontSize: 60.2,
    fontWeight: 'bold',
  },
  H1SemiBold: {
    fontSize: 60.2,
    fontWeight: '500',
  },
  H1ExtraBold: {
    fontSize: 60.2,
    fontWeight: '800',
  },
  H2Bold: {
    fontSize: 41.8,
    fontWeight: 'bold',
  },
  H2SemiBold: {
    fontSize: 41.8,
    fontWeight: '500',
  },
  H2ExtraBold: {
    fontSize: 41.8,
    fontWeight: '800',
  },
  H3Bold: {
    fontSize: 34.8,
    fontWeight: 'bold',
  },
  H3SemiBold: {
    fontSize: 34.8,
    fontWeight: '500',
  },
  H3ExtraBold: {
    fontSize: 34.8,
    fontWeight: '800',
  },
  H4Bold: {
    fontSize: 29,
    fontWeight: 'bold',
  },
  H4SemiBold: {
    fontSize: 29,
    fontWeight: '500',
  },
  H4ExtraBold: {
    fontSize: 29,
    fontWeight: '800',
  },
  SubheadingMedium: {
    fontSize: 24.2,
    fontWeight: '500',
  },
  SubheadingBold: {
    fontSize: 24.2,
    fontWeight: 'bold',
  },
  SubheadingUnderlined: {
    fontSize: 24.2,
    textDecorationLine: 'underline',
  },
  SubheadingLight: {
    fontSize: 24.2,
    fontWeight: '300',
  },
  P1Medium: {
    fontSize: 20.2,
    fontWeight: '500',
  },
  P1Bold: {
    fontSize: 20.2,
    fontWeight: 'bold',
  },
  P1Underlined: {
    fontSize: 20.2,
    textDecorationLine: 'underline',
  },
  P1Light: {
    fontSize: 20.2,
    fontWeight: '300',
  },
  P2Medium: {
    fontSize: 16.8,
    fontWeight: '500',
  },
  P2Bold: {
    fontSize: 16.8,
    fontWeight: 'bold',
  },
  P2Underlined: {
    fontSize: 16.8,
    textDecorationLine: 'underline',
  },
  P2Light: {
    fontSize: 16.8,
    fontWeight: '300',
  },
  P3Medium: {
    fontSize: 14,
    fontWeight: '500',
  },
  P3Bold: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  P3Underlined: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  P3Light: {
    fontSize: 14,
    fontWeight: '300',
  },
  CaptionMedium: {
    fontSize: 11.7,
    fontWeight: '500',
  },
  CaptionBold: {
    fontSize: 11.7,
    fontWeight: 'bold',
  },
  CaptionUnderlined: {
    fontSize: 11.7,
    textDecorationLine: 'underline',
  },
  CaptionLight: {
    fontSize: 11.7,
    fontWeight: '300',
  },
  CaptionBoldUnderlined: {
    fontSize: 11.7,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  FooterMedium: {
    fontSize: 9.7,
    fontWeight: '500',
  },
  FooterBold: {
    fontSize: 9.7,
    fontWeight: 'bold',
  },
  FooterUnderlined: {
    fontSize: 9.7,
    textDecorationLine: 'underline',
  },
  FooterLight: {
    fontSize: 9.7,
    fontWeight: '300',
  },
  FooterBoldUnderlined: {
    fontSize: 9.7,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonTiny: {
    fontSize: 11.7,
    lineHeight: 11.7,
    fontWeight: 'bold',
  },
  buttonSmall: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
  },
  buttonMedium: {
    fontSize: 16.8,
    lineHeight: 16.8,
    fontWeight: 'bold',
  },
  buttonLarge: {
    fontSize: 20.2,
    lineHeight: 20.2,
    fontWeight: 'bold',
  },
};



export { texts };