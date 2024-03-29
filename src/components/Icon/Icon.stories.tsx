import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Icon, icons } from './Icon';
import { View, Text } from 'react-native';

const iconNames = Object.keys(icons);

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large', 'xlarge'],
      },
    },
    color: { control: 'color' },
    name: {
      control: {
        type: 'select',
        options: iconNames, // List all your icon names here
      },
    },
  },
};

export default IconMeta;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const AnalyticsIcon = Template.bind({});
AnalyticsIcon.args = {
  name: 'Analytics',
  size: 'medium',
  color: '#000', // Replace with your default color
};