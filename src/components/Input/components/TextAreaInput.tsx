import React, { useState } from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';
import {colors} from '../../../styles';

type TextAreaInputProps = {
    config: {
      id?: string;
      label: string;
      placeholder: string;
      defaultValue: string;
      maxLength?: number;
      required?: boolean;
    };
  };

const TextAreaInput = ({ config }: TextAreaInputProps) => {
    const { id, label, placeholder, defaultValue, maxLength = 500 } = config;
    const [count, setCount] = useState(0);

    const handleChange = (text: string) => {
        setCount(text.length);
        // Other validation or update logic goes here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <RNTextInput
                multiline
                numberOfLines={4} // You can adjust this number based on your requirement
                style={styles.textArea}
                onChangeText={handleChange}
                maxLength={maxLength}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
            <Text style={styles.counter}>{count}/{maxLength}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Define container styles
    },
    label: {
        // Define your label styles
        paddingLeft: 4

    },

    textArea: {
        marginTop: 8,
        // Define styles for your text area
        textAlignVertical: 'top', // Aligns text to the top for Android
        // Other styles like border, padding, etc.
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.primary[400],
        paddingLeft: 12,
        paddingBottom: 4,
        paddingTop: 4,
        paddingRight: 8
    },
    counter: {
        // Style for the character counter
    },
});

export { TextAreaInput };
