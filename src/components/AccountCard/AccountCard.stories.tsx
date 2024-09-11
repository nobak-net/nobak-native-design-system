import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { AccountCard } from "./AccountCard";
import { View } from "react-native";

const AccountCardMeta: ComponentMeta<typeof AccountCard> = {
  title: "AccountCard",
  component: AccountCard,
  args: {
    publicKey: "GDSI2T2V7UEYDRALHUTXYQDXNJ6SPZOHYIRJYP5WXRVRPZBGBE6YNRHZ",
    balance: "100.0000",
    canSign: true,
    isBackedUp: false,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default AccountCardMeta;

type AccountCardStory = ComponentStory<typeof AccountCard>;

// Function to create a story for a specific set of props (e.g., canSign, isBackedUp)
const createAccountCardStory = (canSign: boolean, isBackedUp: boolean): AccountCardStory => {
  return (args) => <AccountCard {...args} canSign={canSign} isBackedUp={isBackedUp} />;
};

// Create stories for various account conditions
export const CanSignBackedUp = createAccountCardStory(true, true);
export const CanSignNotBackedUp = createAccountCardStory(true, false);
export const CannotSignBackedUp = createAccountCardStory(false, true);
export const CannotSignNotBackedUp = createAccountCardStory(false, false);

// Template for a generic story
const Template: ComponentStory<typeof AccountCard> = (args) => <AccountCard {...args} />;

// Example Story: Default AccountCard
export const DefaultAccountCard = Template.bind({});
DefaultAccountCard.args = {
  publicKey: "GDSI2T2V7UEYDRALHUTXYQDXNJ6SPZOHYIRJYP5WXRVRPZBGBE6YNRHZ",
  balance: "50.1234",
  canSign: true,
  isBackedUp: true,
};
