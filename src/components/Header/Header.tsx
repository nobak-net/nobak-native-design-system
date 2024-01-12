import React from 'react';
import { View, Text } from 'react-native';
import { Logo } from '..'
import { colors } from '../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ backgroundColor: colors.primary[100], paddingTop: insets.top }}>
            <View style={{ padding: 12 }}>
                <Logo type="Isologo" />
            </View>
        </View>
    );
};

export { Header };
