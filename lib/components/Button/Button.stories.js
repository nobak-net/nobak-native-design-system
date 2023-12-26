import React from "react";
import { Button } from "./Button";
import { View } from "react-native";
var ButtonMeta = {
  title: "Button",
  component: Button,
  args: {
    text: "Hello world"
  },
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(View, {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(Story, null));
  }]
};
export default ButtonMeta;
export var Basic = function Basic(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}