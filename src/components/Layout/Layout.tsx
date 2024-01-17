import React from 'react';
import { View, Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

interface LayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  const insets = useSafeAreaInsets()

  return <View style={[styles.container, style]}>
    <View style={[styles.content, { paddingTop: insets.top }]}>{children}</View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  content: {
    width: screenWidth * 0.92,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});