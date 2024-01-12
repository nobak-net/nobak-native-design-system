import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const screenWidth = Dimensions.get('window').width;

interface LayoutProps {
    children: React.ReactNode;
  }

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets()

    return <View style={{...styles.container, paddingTop: insets.top }}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.92,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});