import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, IconKeys } from '../Icon'; // Adjust the import based on your project structure
import { colors, texts } from '../../styles'; // Adjust the import based on your project structure
import { Button } from '../Button';

interface ServerCardProps {
  name: string;
  status: 'online' | 'offline' | 'maintenance'; // Adjust as needed
  paired: boolean;
  isAuthed: boolean;
  uptime_percentage: number;
  theme: 'light' | 'dark';
  onPress?: () => void; // Optional, in case you want to handle press events
}

export const ServerCard: React.FC<ServerCardProps> = ({
  name,
  status,
  paired,
  isAuthed,
  uptime_percentage,
  onPress,
  theme = 'light'
}) => {
  // Determine status color
  const statusColor = colors.primary[1000]
  // status === 'online'
  //   ? colors.success
  //   : status === 'offline'
  //   ? colors.error
  //   : colors.warning; // For maintenance or other statuses

  // Paired and Authenticated Icons
  const pairedIcon = paired ? 'CheckCircle' : 'Circle'; // Replace with your actual icon keys
  const authedIcon = isAuthed ? 'Lock' : 'Unlock';

  return (
    <View style={styles.cardContainer}>
      <View>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          {/* <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} /> */}
        </View>
        <View style={styles.infoRow}>
          <Icon name={pairedIcon as IconKeys} size="small" color={colors.primary[600]} />
          <Text style={styles.infoText}>{paired ? 'Paired' : 'Not Paired'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name={authedIcon as IconKeys} size="small" color={colors.primary[600]} />
          <Text style={styles.infoText}>{isAuthed ? 'Authenticated' : 'Not Authenticated'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="Analytics" size="small" color={colors.primary[600]} />
          <Text style={styles.infoText}>Uptime: {uptime_percentage}%</Text>
        </View>
      </View>
      <View>
        <Button text="Auth" buttonStyle={{ size: 'medium', variant: 'secondary' }} theme={theme} onPress={() => onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.primary[2000],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary[1000],
    marginBottom: 12,
    // Shadow for iOS
    shadowColor: colors.primary[100],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    ...texts.P3Bold,
    color: colors.primary[100],
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    ...texts.CaptionBold,
    color: colors.primary[100],
    marginLeft: 8,
  },
});