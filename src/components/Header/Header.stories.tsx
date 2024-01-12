// Header.stories.js
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Header } from './Header'; // Adjust the import path as necessary

// Meta configuration for the Header component
const HeaderMeta: ComponentMeta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
};

export default HeaderMeta;

// Template for creating stories
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// Example Story: Default Header
export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
    // Add props that your Header component expects
    title: 'My Header',
    // ... other props
};


