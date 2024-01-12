// Logo.stories.js
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Logo } from './Logo'; // Adjust the import path as necessary

// Meta configuration for the Logo component
const LogoMeta: ComponentMeta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    args: {
        type: 'Isologo',
    },
};

export default LogoMeta;

// Template for creating stories
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

// Example Stories for each logo type
export const IsologoStory = Template.bind({});
IsologoStory.args = {
    type: 'Isologo',
};

export const LogoFullStory = Template.bind({});
LogoFullStory.args = {
    type: 'LogoFull',
};

export const LogoStory = Template.bind({});
LogoStory.args = {
    type: 'Logo',
};
