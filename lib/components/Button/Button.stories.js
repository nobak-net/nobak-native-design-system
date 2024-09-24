function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Button.stories.tsx

import React from "react";
import { Button } from "./Button";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Import LinearGradient from expo-linear-gradient only for actual app usage
// Do not import it here to prevent Storybook build issues
// Instead, we'll mock or skip gradient wrappers in Storybook

var ButtonMeta = {
  title: "Button",
  component: Button,
  args: {
    text: "Button"
  }
};
export default ButtonMeta;
var variants = ["primary", "secondary"];
var sizes = ["tiny", "small", "medium", "large"];
var types = ["text", "iconText", "icon", "caption"];

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
var AllButtonsTemplate = function AllButtonsTemplate(args, _ref) {
  var _globals$backgrounds;
  var globals = _ref.globals;
  var theme = (globals === null || globals === void 0 || (_globals$backgrounds = globals.backgrounds) === null || _globals$backgrounds === void 0 ? void 0 : _globals$backgrounds.value) === "#F5F4F7" ? 'light' : 'dark';
  var combinations = [];
  variants.forEach(function (variant) {
    sizes.forEach(function (size) {
      types.forEach(function (type) {
        combinations.push({
          variant: variant,
          size: size,
          type: type
        });
      });
    });
  });
  return /*#__PURE__*/React.createElement(ScrollView, null, combinations.map(function (combo, index) {
    return /*#__PURE__*/React.createElement(View, {
      key: index,
      style: styles.buttonContainer
    }, /*#__PURE__*/React.createElement(Text, {
      style: styles.label
    }, "Variant: ", combo.variant, ", Size: ", combo.size, ", Type: ", combo.type, ", Theme: ", theme), /*#__PURE__*/React.createElement(Button, _extends({}, args, {
      buttonStyle: {
        variant: combo.variant,
        size: combo.size
      },
      type: combo.type,
      text: combo.type !== "icon" ? "".concat(combo.variant, " ").concat(combo.size) : undefined,
      description: combo.type === "caption" ? "Sample description" : undefined,
      icon: "Analytics",
      onPress: function onPress() {},
      theme: theme,
      wrapper: combo.variant === "gradientBorder" ? getMockWrapper(theme, styles.gradientWrapper.borderRadius) : undefined
    })));
  }));
};
export var AllButtons = AllButtonsTemplate.bind({});
AllButtons.args = {
  // Default args if any
};
var styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 24,
    width: "100%"
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600"
  },
  gradientWrapper: {
    // Simulated gradient border
    borderRadius: 10,
    // Adjust based on button size
    padding: 1 // Controls the thickness of the gradient border
    // Background color is set dynamically in getMockWrapper
  }
});
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}