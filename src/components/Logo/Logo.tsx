import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { colors } from '../../styles/colors';
const Logo = ({ type, theme = 'ligth' }: { type: 'LogoFull' | 'Isologo' | 'Logo',  theme: 'ligth' | 'dark'}) => {
    switch (type) {
        case 'LogoFull':
            return (
                <Svg width="287" height="52" viewBox="0 0 287 52" fill="none">
                    <Path d="M28.4238 1C28.4238 16.1468 16.1468 28.4238 1 28.4238V1H28.4238Z" fill={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} />
                    <Path d="M51 1.1385H1.13851V51H51V1.1385Z" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L6.48478 51" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L12.0415 51" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L17.867 51" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L24.1357 51" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L31.0665 51" stroke={theme === 'da rk' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L39.0859 51.1634" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L48.2798 51" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L51 43.5706" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L51 35.0055" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L51 27.6205" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L51 21.0388" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L51 15.0083" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L51 9.33518" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03046L51 3.86149" stroke={theme === 'dark' ? colors.primary[100] : colors.primary[2000]} stroke-miterlimit="10" />
                    <Path d="M64 41.41V11.04H80.03L93.91 28.63H93.95V11.04H106.6V41.41H90.57L76.69 23.49H76.65V41.41H64Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M132.74 42.46C128.18 42.46 124.19 41.79 120.76 40.46C117.33 39.12 114.67 37.23 112.79 34.77C110.91 32.31 109.96 29.46 109.96 26.23C109.96 23 110.9 20.15 112.79 17.69C114.67 15.23 117.33 13.33 120.76 12C124.19 10.67 128.18 10 132.74 10C137.3 10 141.29 10.67 144.72 12C148.15 13.34 150.81 15.23 152.69 17.69C154.57 20.15 155.52 23 155.52 26.23C155.52 29.46 154.58 32.31 152.69 34.77C150.81 37.23 148.15 39.13 144.72 40.46C141.29 41.79 137.3 42.46 132.74 42.46ZM132.74 33.18C134.6 33.18 136.23 32.89 137.63 32.32C139.04 31.74 140.12 30.94 140.88 29.89C141.64 28.85 142.02 27.63 142.02 26.22C142.02 24.81 141.64 23.59 140.88 22.55C140.12 21.51 139.04 20.7 137.63 20.13C136.22 19.55 134.59 19.27 132.74 19.27C130.89 19.27 129.25 19.56 127.85 20.13C126.44 20.71 125.36 21.52 124.6 22.55C123.84 23.59 123.46 24.81 123.46 26.22C123.46 27.63 123.84 28.85 124.6 29.89C125.36 30.93 126.44 31.74 127.85 32.32C129.26 32.9 130.89 33.18 132.74 33.18Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M158.89 41.41V11.04H185.84C188.45 11.04 190.68 11.36 192.5 12.01C194.33 12.66 195.71 13.61 196.65 14.86C197.59 16.11 198.06 17.64 198.06 19.44C198.06 20.45 197.86 21.38 197.47 22.22C197.08 23.06 196.51 23.81 195.76 24.46C195.01 25.11 194.11 25.61 193.04 25.98V26.06C194.92 26.59 196.37 27.47 197.38 28.7C198.39 29.92 198.9 31.41 198.9 33.15C198.9 34.89 198.44 36.43 197.51 37.66C196.58 38.9 195.23 39.83 193.46 40.46C191.69 41.09 189.52 41.41 186.96 41.41H158.87H158.89ZM181.88 34.45C182.64 34.45 183.29 34.35 183.82 34.16C184.35 33.96 184.75 33.67 185.02 33.27C185.29 32.88 185.42 32.41 185.42 31.88C185.42 31.01 185.11 30.34 184.49 29.88C183.87 29.42 183 29.18 181.88 29.18H172.35V34.45H181.88ZM181.08 23.06C181.81 23.06 182.44 22.96 182.98 22.76C183.51 22.56 183.91 22.28 184.18 21.9C184.45 21.52 184.58 21.06 184.58 20.53C184.58 19.72 184.28 19.09 183.67 18.65C183.07 18.21 182.2 18 181.08 18H172.39V23.06H181.08Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M198.66 41.41L213.51 11.04H229.11L243.49 41.41H229.53L227.72 36.77H214.39L212.58 41.41H198.66ZM216.67 29.6H225.44L221.14 19.01H221.06L216.67 29.6Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M245.6 41.41V11.04H259.1V20.57L259.18 20.61L269.64 11.04H286.21L272.63 23.06L286.21 41.41H270.06L263.35 30.87L259.09 34.67V41.42H245.59L245.6 41.41Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                </Svg>
            );

        case 'Isologo':
            return (
                <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <Rect width="50" height="50.1634" transform="translate(1 1)" fill={theme === 'dark' ? colors.primary[2000] : colors.primary[100]} />
                    <Path d="M28.4238 1C28.4238 16.1468 16.1468 28.4238 1 28.4238V1H28.4238Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} />
                    <Path d="M51 1.1385H1.13851V51H51V1.1385Z" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L6.48478 51" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L12.0415 51" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L17.867 51" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L24.1357 51" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L31.0665 51" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L39.0859 51.1634" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L48.2798 51" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L51 43.5706" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L51 35.0055" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L51 27.6205" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L51 21.0388" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L51 15.0083" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L51 9.33518" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                    <Path d="M1.06093 1.03047L51 3.86149" stroke={theme === 'dark' ? colors.primary[200] : colors.primary[2400]} stroke-miterlimit="10" />
                </Svg>
            );

        case 'Logo':
            return (
                <Svg width="223" height="33" viewBox="0 0 223 33" fill="none">
                    <Path d="M0 31.41V1.04H16.03L29.91 18.63H29.95V1.04H42.6V31.41H26.57L12.69 13.49H12.65V31.41H0Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M68.74 32.46C64.18 32.46 60.19 31.79 56.76 30.46C53.33 29.12 50.67 27.23 48.79 24.77C46.91 22.31 45.96 19.46 45.96 16.23C45.96 13 46.9 10.15 48.79 7.69C50.67 5.23 53.33 3.33 56.76 2C60.19 0.67 64.18 0 68.74 0C73.3 0 77.29 0.67 80.72 2C84.15 3.34 86.81 5.23 88.69 7.69C90.57 10.15 91.52 13 91.52 16.23C91.52 19.46 90.58 22.31 88.69 24.77C86.81 27.23 84.15 29.13 80.72 30.46C77.29 31.79 73.3 32.46 68.74 32.46ZM68.74 23.18C70.6 23.18 72.23 22.89 73.63 22.32C75.04 21.74 76.12 20.94 76.88 19.89C77.64 18.85 78.02 17.63 78.02 16.22C78.02 14.81 77.64 13.59 76.88 12.55C76.12 11.51 75.04 10.7 73.63 10.13C72.22 9.55 70.59 9.27 68.74 9.27C66.89 9.27 65.25 9.56 63.85 10.13C62.44 10.71 61.36 11.52 60.6 12.55C59.84 13.59 59.46 14.81 59.46 16.22C59.46 17.63 59.84 18.85 60.6 19.89C61.36 20.93 62.44 21.74 63.85 22.32C65.26 22.9 66.89 23.18 68.74 23.18Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M94.89 31.41V1.04H121.84C124.45 1.04 126.68 1.36 128.5 2.01C130.33 2.66 131.71 3.61 132.65 4.86C133.59 6.11 134.06 7.64 134.06 9.44C134.06 10.45 133.86 11.38 133.47 12.22C133.08 13.06 132.51 13.81 131.76 14.46C131.01 15.11 130.11 15.61 129.04 15.98V16.06C130.92 16.59 132.37 17.47 133.38 18.7C134.39 19.92 134.9 21.41 134.9 23.15C134.9 24.89 134.44 26.43 133.51 27.66C132.58 28.9 131.23 29.83 129.46 30.46C127.69 31.09 125.52 31.41 122.96 31.41H94.87H94.89ZM117.88 24.45C118.64 24.45 119.29 24.35 119.82 24.16C120.35 23.96 120.75 23.67 121.02 23.27C121.29 22.88 121.42 22.41 121.42 21.88C121.42 21.01 121.11 20.34 120.49 19.88C119.87 19.42 119 19.18 117.88 19.18H108.35V24.45H117.88ZM117.08 13.06C117.81 13.06 118.44 12.96 118.98 12.76C119.51 12.56 119.91 12.28 120.18 11.9C120.45 11.52 120.58 11.06 120.58 10.53C120.58 9.72 120.28 9.09 119.67 8.65C119.07 8.21 118.2 8 117.08 8H108.39V13.06H117.08Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M134.66 31.41L149.51 1.04H165.11L179.49 31.41H165.53L163.72 26.77H150.39L148.58 31.41H134.66ZM152.67 19.6H161.44L157.14 9.01H157.06L152.67 19.6Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                    <Path d="M181.6 31.41V1.04H195.1V10.57L195.18 10.61L205.64 1.04H222.21L208.63 13.06L222.21 31.41H206.06L199.35 20.87L195.09 24.67V31.42H181.59L181.6 31.41Z" fill={theme === 'dark' ? colors.primary[200] : colors.primary[2000]} />
                </Svg>
            );

        default:
            return null;
    }
};

export { Logo };
