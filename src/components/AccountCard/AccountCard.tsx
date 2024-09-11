
import React from 'react';
import { View, Text } from 'react-native';
import { Logo, Icon, Button } from '..'
import { colors, texts } from '../../styles';

// interface StellarAccount {
//     publicKey: string;
//     secretKey: string;
//     canSign: boolean;
//     isBackedUp: boolean;
//     getBalance: () => Promise<string>;
//   }


interface AccountCardProps {
  index: number;
  publicKey: string;
  balance: string;
  canSign: boolean;
  isBackedUp: boolean;
}

const AccountCard: React.FC<AccountCardProps> = ({ index, publicKey, balance, canSign, isBackedUp }) => {
  return (
    <View key={index} style={{ borderColor: colors.primary[1600], borderWidth: 1, borderRadius: 12, padding: 16, marginVertical: 8 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
        <Text style={{ color: colors.primary[100], ...texts.P1Light }}>
          {publicKey.length > 20 ? `${publicKey.slice(0, 20)}...` : publicKey}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Icon name="Key" color={canSign ? colors.primary[100] : colors.primary[1600]} />
          <Icon name="CloudSync" color={isBackedUp ? colors.primary[100] : colors.primary[1600]} />
          <Icon name="CloudKey" color={colors.primary[1600]} />
          <Button
            onPress={() => console.log('Backup/Restore')}
            buttonStyle={{ variant: 'secondary', size: 'small' }}
            type="icon"
            icon="Info"
          />
        </View>
      </View>
      <Text style={{ color: colors.primary[100], ...texts.P1Light }}>
        {balance} XLM
      </Text>
    </View>
  );
};

// const AccountCard = ({ account, balance }: { account: StellarAccount, balance: string }) => {
//     const croppedPublicKey = `${account.publicKey.slice(0, 5)}...${account.publicKey.slice(-5)}`; // Crop public key

//     const handleBackup = () => {
//         // Add logic to handle backup
//         console.log(`Backing up account: ${account.publicKey}`);
//     };

//     return (
//         <View style={{
//             borderWidth: 1,
//             borderColor: colors.primary[1600],
//             borderRadius: 12,
//             padding: 12,
//             marginVertical: 12,
//             backgroundColor: colors.primary[100],
//         }}>
//             <Text style={{ ...texts.P1Bold, color: colors.primary[1600], marginBottom: 8 }}>
//                 {croppedPublicKey}
//             </Text>

//             <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: 8
//             }}>
//                 <Text style={{ ...texts.P1Light, color: colors.primary[1600] }}>
//                     Balance: {balance} XLM
//                 </Text>
//             </View>

//             <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//             }}>
//                 <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                 }}>
//                     <Text style={{ marginLeft: 4, color: colors.primary[1600], ...texts.P2Bold }}>
//                         Can Sign: {account.canSign ? 'Yes' : 'No'}
//                     </Text>
//                 </View>

//                 <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                 }}>
//                     <Button 
//                       onPress={handleBackup} 
//                       text={account.isBackedUp ? "Backed Up" : "Backup Now"} 
//                       buttonStyle={{ variant: account.isBackedUp ? 'primary' : 'secondary', size: 'small' }}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

export { AccountCard };
