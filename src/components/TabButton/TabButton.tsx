import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { texts, colors } from "../../styles";
import { Symbol, type SymbolType } from '../Symbol'
// import { Icon, type IconKeys } from '../Icon'; // Import the Icon component

interface TabButtonProps {
  onPress: () => void;
  beforePress?: () => void;
  text?: string;
  symbol?: SymbolType;
}

const TabButton = ({ onPress, beforePress, text, symbol = 'World' }: TabButtonProps) => {

  const handlePress = () => {
    if (!!beforePress) {
      beforePress()
    }
    onPress()
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add additional styling as needed
  },
  label: {
    // Styling for the label text
  },
});

export { TabButton };