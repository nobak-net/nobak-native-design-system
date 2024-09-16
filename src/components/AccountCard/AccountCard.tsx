
import React from 'react';
import { View, Text } from 'react-native';
import { Logo, Icon, Button } from '..'
import { colors, texts } from '../../styles';

interface AccountCardProps {
  name: string;
  publicKey: string;
  balance: string;
  canSign: boolean;
  isBackedUp: boolean;
  viewAccount: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ name, publicKey, balance, canSign, isBackedUp, viewAccount }) => {
  return (
    <View style={{ borderColor: colors.primary[1600], borderWidth: 1, borderRadius: 12, padding: 16, marginVertical: 8 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <Text style={{ color: colors.primary[100], ...texts.P1Light }}>{name}</Text>
        <Button
          onPress={viewAccount}
          buttonStyle={{ variant: 'secondary', size: 'small' }}
          type="icon"
          icon="Info"
        />
      </View>
      <View>
        <Text style={{ color: colors.primary[100], ...texts.P1Light }}>
          {publicKey.length > 20 ? `${publicKey.slice(0, 20)}...` : publicKey}
        </Text>
      </View>
      <Text style={{ color: colors.primary[100], ...texts.P1Light }}>
        {balance} XLM
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
        <Icon name="Key" color={canSign ? colors.primary[100] : colors.primary[1600]} />
        <Icon name="CloudSync" color={isBackedUp ? colors.primary[100] : colors.primary[1600]} />
        <Icon name="CloudKey" color={colors.primary[1600]} />
      </View>

    </View>
  );
};

export { AccountCard };
