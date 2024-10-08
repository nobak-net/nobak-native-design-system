import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Icon, icons } from './Icon';
import { View, Text } from 'react-native';
import { colors } from '~/src/styles';

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
  color: colors.primary[2400], // Replace with your default color
};

export const AllIcons = () => {
  return (
    <View>
      {iconNames.map((name: any) => {
        return <View><Text>{name}</Text><Icon name={name} color={colors.primary[100]}/></View>
      })
      }
    </View>
  )
};
