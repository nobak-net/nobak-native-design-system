import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Logo, Icon } from '..'
import { colors, texts } from '../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ action }: { action: () => void }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ backgroundColor: colors.primary[100], paddingTop: insets.top }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 12
            }}>
                <Logo type="Isologo" />
                <TouchableOpacity onPress={() => action()} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon name="QR" color={colors.primary[2000]} size="large" />
                    <Text style={{ ...texts.CaptionUnderlined, color: colors.primary[2400] }}>SCAN QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export { Header };
