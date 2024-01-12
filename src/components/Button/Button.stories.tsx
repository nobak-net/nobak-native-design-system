import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "./Button";
import { View } from "react-native";

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    text: "Hello",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

const variants = ['primary', 'secondary'];
const sizes = ['tiny', 'small', 'medium', 'large'];

// Function to create a story for a specific variant and size
const createButtonStory = (variant: string, size: string): ButtonStory => {
  return (args) => <Button {...args} buttonStyle={{ variant, size }} />;
};

// Create stories for each variant and size
variants.forEach(variant => {
  sizes.forEach(size => {
    module.exports[`${variant}_${size}`] = createButtonStory(variant, size);
  });
});


// Template for creating stories
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Example Story: Default Header
export const CaptionButton = Template.bind({});
CaptionButton.args = {
    // Add props that your Header component expects
    text: 'My Header',
    description: 'My Header',
    // ... other props
};


