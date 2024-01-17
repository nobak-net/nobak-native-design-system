import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Logo, Icon, Button } from '..'
import { colors, texts } from '../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AccountActions = ({ balance = '0.00', deposit, withdraw, swap }: { balance: string, deposit: () => void, withdraw: () => void, swap: () => void }) => {

    return (
        <View>
            <View style={{
                borderRadius: 12, backgroundColor: colors.primary[200], padding: 8, flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{ ...texts.H4Bold, color: colors.primary[1600] }}>USD</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{ ...texts.H4Bold, color: colors.primary[1800] }}>{balance}</Text>
                    <Icon name="Cash" size="large" color={colors.primary[1800]} />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 12
            }}>
                <Button type="iconText" icon="Add" text="Deposit" onPress={() => deposit()} buttonStyle={{ variant: 'secondary', size: 'small' }} />
                <Button type="iconText" icon="Withdraw" text="Withdraw" onPress={() => withdraw()} buttonStyle={{ variant: 'secondary', size: 'small' }} />
                <Button type="iconText" icon="Trade" text="Swap" onPress={() => swap()} buttonStyle={{ variant: 'secondary', size: 'small' }} />
            </View>
        </View>
    );
};

export { AccountActions };
