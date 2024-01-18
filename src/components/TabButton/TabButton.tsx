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
  active: boolean;
}

const TabButton = ({ onPress, beforePress, text, symbol = 'World', active }: TabButtonProps) => {

  const handlePress = () => {
    if (!!beforePress) {
      beforePress()
    }
    onPress()
  }

  return (
    <TouchableOpacity style={[{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: active ? 8 : 0,
      borderBottomRightRadius: active ? 8 : 0,
    }, { backgroundColor: active ? colors.primary[2400] : colors.primary[100] }]} onPress={handlePress}>
      <Symbol type={symbol} color={active ? colors.primary[100] : colors.primary[2400]} />
      <Text style={{ color: active ? colors.primary[100] : colors.primary[2400] }}>{text}</Text>
    </TouchableOpacity>
  );
};


export { TabButton };