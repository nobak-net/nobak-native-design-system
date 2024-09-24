import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '..';
import { Icon, IconKeys } from '../Icon'; // Assuming you have an Icon component
import { colors, texts } from '../../styles'; // Assuming you have a styles directory
import { formatPublicKey } from '~/src/utils/stellar';

interface MethodCardProps {
  type: 'stellar_address' | 'phone_number' | 'email';
  value?: string;
  status?: 'Pending' | 'Verified';
  theme?: 'light' | 'dark';
  onAdd?: () => void; // Function to handle button press when value is missing
  onComplete?: () => void;
}

export const MethodCard: React.FC<MethodCardProps> = ({
  type,
  value,
  status,
  onAdd,
  onComplete,
  theme = 'light'
}) => {
  // Map the type to corresponding icon and label
  const methodInfo = {
    stellar_address: {
      icon: 'Stellar' as IconKeys, // Replace with your actual icon keys
      label: 'Stellar',
    },
    phone_number: {
      icon: 'Device' as IconKeys,
      label: 'Phone',
    },
    email: {
      icon: 'At' as IconKeys,
      label: 'Email',
    },
  };

  const { icon, label } = methodInfo[type];

  return (
    <View style={styles.cardContainer}>
      <View style={{ display: 'flex', flexDirection: 'row', }}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size="medium" color={colors.primary[600]} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.label}>{label}</Text>
          </View>
          {value && (
            <View>
              <Text style={styles.value}>{ type === "stellar_address" ? formatPublicKey(value) : value}</Text>
            </View>
          )}

        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center',}}>
        {!value ? (
          <Button text="Add" buttonStyle={{ size: 'medium', variant: 'primary' }} theme={theme} onPress={() => onAdd} />
        ) : (
          <>
            <Text style={styles.status}>{status}</Text>
            {status === 'Pending' &&
              <Button text="Complete" buttonStyle={{ size: 'medium', variant: 'secondary' }} theme={theme} onPress={() => onComplete} />}
          </>
        )}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.primary[2400],
    borderColor: colors.primary[1000],
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    // Shadow for iOS
    shadowColor: colors.primary[100],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  label: {
    ...texts.P2Bold,
    color: colors.primary[100],
    marginBottom: 4,
  },
  value: {
    ...texts.P3Light,
    color: colors.primary[600],
    marginBottom: 4,
  },
  status: {
    ...texts.P3Bold,
    color: colors.primary[400],
  },
  button: {
    backgroundColor: colors.primary[600],
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  buttonText: {
    ...texts.buttonTiny,
    color: colors.primary[100],
  },
});