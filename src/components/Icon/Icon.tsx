import React from 'react';
import { Svg, Path as SvgPath } from 'react-native-svg';

const icons = {
  Analytics: 'M32 7C45.8101 7 57 18.1899 57 32C57 45.8101 45.8101 57 32 57C18.1899 57 7 45.8101 7 32C7 18.1899 18.1899 7 32 7ZM53.6346 32C53.6346 26.2188 51.387 20.7861 47.3005 16.6995C43.2139 12.613 37.7812 10.3654 32 10.3654C26.2188 10.3654 20.7861 12.613 16.6995 16.6995C12.8293 20.5697 10.6058 25.6538 10.3774 31.0865C11.4351 29.8486 13.2861 28.2019 15.6418 28.2019C18.9471 28.2019 20.6538 31.2909 21.7716 33.3341C21.9399 33.6346 22.0962 33.9231 22.2404 34.1755C23.6106 36.4832 25.5216 37.7812 27.3486 37.649C28.9591 37.5409 30.3293 36.3029 31.2188 34.1875C32.3245 31.5312 34.7163 28.6827 37.5769 28.274C38.9351 28.0817 40.9543 28.3702 42.9495 30.8462C43.3341 31.3269 43.7788 31.976 44.2837 32.7212C45.5337 34.5841 47.4327 37.3846 48.863 37.625C50.9423 37.9615 52.5769 36.7236 53.238 36.1466C53.5024 34.8005 53.6346 33.4062 53.6346 32Z',
  // ... other icons
};

export type IconKeys = keyof typeof icons;

type IconProps = {
  name: IconKeys;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
  color?: string;
  viewBox?: string;
};

const iconSizeMap = {
  tiny: { width: 18, height: 18 },
  small: { width: 22, height: 22 },
  medium: { width: 30, height: 30 },
  large: { width: 36, height: 36 },
  xlarge: { width: 48, height: 48 },
};

export const Icon = ({
  name,
  color = 'currentColor',
  viewBox = "0 0 64 64",
  size = 'small',
}: IconProps) => {
  const { width, height } = iconSizeMap[size] || iconSizeMap.small;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={color}>
      <SvgPath d={icons[name]} />
    </Svg>
  );
};