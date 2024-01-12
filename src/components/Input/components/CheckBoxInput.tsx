import React, { useState, useEffect } from 'react';
import { View, Text, TextInput as RNTextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from '../../../styles';
type OptionType = {
  name: string;
  value: string;
  active?: boolean;
};

type CheckBoxInputProps = {
  config: {
    id: string;
    label: string;
    options: OptionType[];
    debug?: boolean;
  };
};

export const CheckBoxInput = ({ config }: CheckBoxInputProps) => {
  const { id, label, options, debug } = config;
  const [list, setList] = useState<OptionType[]>(options.map(obj => ({ ...obj, active: false })));
  const [value, setValue] = useState('');

  useEffect(() => {
    updateValue();
  }, [list]);

  const updateValue = () => {
    const activeItems = list.filter(item => item.active).map(item => item.value);
    setValue(activeItems.join(', '));
  };

  const handleUpdate = (itemIndex: number) => {
    const updatedList = list.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      {debug && (
        <RNTextInput value={value} editable={false} />
      )}
      <View style={styles.checkboxContainer}>
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.checkbox, item.active ? styles.active : styles.inactive]}
            onPress={() => handleUpdate(index)}
          >
            <Text style={styles.checkboxText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  label: {
    // Define your label text styles
  },
  checkboxContainer: {
    // Define your container styles for the checkboxes
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    // Define your base checkbox styles
    margin: 4,
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    // Define your styles for active (selected) state
    backgroundColor: colors.primary[700], // Replace with actual color code
  },
  inactive: {
    // Define your styles for inactive (unselected) state
    backgroundColor: colors.primary[400], // Replace with actual color code
  },
  checkboxText: {
    // Define text styles inside the checkbox
  },
});

export default CheckBoxInput;
