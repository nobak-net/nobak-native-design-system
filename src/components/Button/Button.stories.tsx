// Button.stories.tsx

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "./Button";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Import LinearGradient from expo-linear-gradient only for actual app usage
// Do not import it here to prevent Storybook build issues
// Instead, we'll mock or skip gradient wrappers in Storybook

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    text: "Button",
  },
};

export default ButtonMeta;

const variants = ["primary", "secondary"];
const sizes = ["tiny", "small", "medium", "large"];
const types = ["text", "iconText", "icon", "caption"];

// Helper function to get a mock wrapper for Storybook
// const getMockWrapper = (theme: "light" | "dark", borderRadius: number) => {
//   // Return a simple View with gradient-like styling
//   // Since we cannot use expo-linear-gradient in Storybook, we'll simulate it
//   const gradientColors = theme === "light"
//     ? ["#FFFFFF", "#CCCCCC", "#888888"] // Example light theme gradient colors
//     : ["#444444", "#666666", "#888888"]; // Example dark theme gradient colors

//   return (
//     <View
//       style={[
//         styles.gradientWrapper,
//         {
//           borderRadius,
//           backgroundColor: theme === "light" ? "#CCCCCC" : "#666666", // Simulated gradient color
//         },
//       ]}
//     />
//   );
// };

// Template to display all combinations
const AllButtonsTemplate: ComponentStory<typeof Button> = (args, { globals }) => {
  const theme = globals?.backgrounds?.value === "#F5F4F7" ? 'light' : 'dark';


  const combinations: {
    variant: "primary" | "secondary" | "gradientBorder";
    size: "tiny" | "small" | "medium" | "large";
    type: "text" | "iconText" | "icon" | "caption";
  }[] = [];

  variants.forEach((variant) => {
    sizes.forEach((size) => {
      types.forEach((type) => {
        combinations.push({ variant, size, type });
      });
    });
  });

  return (
    <ScrollView>
      {combinations.map((combo, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Text style={styles.label}>
            Variant: {combo.variant}, Size: {combo.size}, Type: {combo.type}, Theme: {theme}
          </Text>
          <Button
            {...args}
            buttonStyle={{ variant: combo.variant, size: combo.size }}
            type={combo.type}
            text={
              combo.type !== "icon" ? `${combo.variant} ${combo.size}` : undefined
            }
            description={
              combo.type === "caption" ? "Sample description" : undefined
            }
            icon="Analytics"
            onPress={() => {}}
            theme={theme}
            wrapper={
              combo.variant === "gradientBorder"
                ? getMockWrapper(theme, styles.gradientWrapper.borderRadius)
                : undefined
            }
          />
        </View>
      ))}
    </ScrollView>
  );
};

export const AllButtons = AllButtonsTemplate.bind({});
AllButtons.args = {
  // Default args if any
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 24,
    width: "100%",
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  gradientWrapper: {
    // Simulated gradient border
    borderRadius: 10, // Adjust based on button size
    padding: 1, // Controls the thickness of the gradient border
    // Background color is set dynamically in getMockWrapper
  },
});