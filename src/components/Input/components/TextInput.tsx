import React, { useState } from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';
import { Icon } from '../../Icon/Icon'; // Adjust the import according to your project structure
import colors from '../../../styles/colors';

const TextInput = ({ config }: any) => {
    const {
        id,
        label,
        placeholder,
        afterChange,
        handleChange,
        validation,
        defaultValue,
        maxLength,
        disabled,
        type,
        icon,
        hidden,
    } = config;

    const [value, setValue] = useState(defaultValue || '');;
    const [status, setStatus] = useState('EMPTY');

    const validate = async (text: string) => {
        setValue(text);
      
        // Call handleChange if it's defined
        if (handleChange) {
          handleChange(text);
        }
      
        // Proceed with validation if the validation function is defined
        if (validation?.fn) {
          const e = await validation.fn(text);
      
          if (e.valid === true) {
            setStatus('VALID');
            // Call afterChange if it's defined
            if (afterChange) {
              afterChange({ id, value: text, status: 'VALID', message: e.message });
            }
          } else if (e.valid === false) {
            setStatus('ERROR');
            // Call afterChange if it's defined
            if (afterChange) {
              afterChange({ id, value: text, status: 'ERROR', message: e.message });
            }
          }
        }
      };
      

    return (
        <View style={styles.container}>
            {!hidden && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                <RNTextInput
                    style={[styles.input, status === 'VALID' && styles.validInput, status === 'ERROR' && styles.errorInput]}
                    editable={!disabled}
                    onChangeText={validate}
                    value={value}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    secureTextEntry={type === 'password'}
                />
                {icon && !hidden && <Icon name={icon} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    label: {
        // Define your label styles
        paddingLeft: 4
    },
    inputContainer: {
        marginTop: 8,
    },
    input: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.primary[400],
        paddingLeft: 12,
        paddingBottom: 4,
        paddingTop: 4,
        paddingRight: 8
    },
    validInput: {
        borderColor: "green",
    },
    errorInput: {
        // Define styles for error input
    },
    icon: {
        // Define your icon styles
    },
});

export { TextInput };
