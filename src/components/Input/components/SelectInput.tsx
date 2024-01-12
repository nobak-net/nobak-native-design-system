import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet } from 'react-native';

type SelectInputProps = {
  config: {
    id: string;
    label: string;
    defaultValue: string;
    options: Array<{ label: string; value: string }>;
    required?: boolean;
    debug?: boolean;
    belongs_to?: string;
    populateOptions?: Function;
    multiple?: boolean;
    hidden?: boolean;
  };
};

const SelectInput = ({ config }: SelectInputProps) => {
  const { id, label, defaultValue, options, hidden, debug } = config;
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // Update value if the default value is not in the options
    const hasValue = options.some(option => `${option.value}` === value);
    if (!hasValue && options.length > 0) {
      setValue(options[0].value);
    }
  }, [options, value]);

  const handleChange = (selectedValue: string) => {
    setValue(selectedValue);
  };

  return (
    <View style={!hidden ? styles.container : styles.hidden}>
      {!hidden && <Text style={styles.label}>{label}</Text>}
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => handleChange(itemValue)}
        style={!hidden ? styles.picker : styles.hidden}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Define your container styles
  },
  label: {
    // Define your label text styles
  },
  picker: {
    // Define your picker styles
  },
  hidden: {
    display: 'none',
  },
});

export { SelectInput };
