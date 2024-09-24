// components/RCIInput.tsx

import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Keyboard,
    NativeSyntheticEvent,
    TextInputKeyPressEventData,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Button, Symbol } from '..'; // Ensure the path is correct
import { colors } from '../../styles/colors';
import { texts } from '../../styles/texts';
// import * as Clipboard from 'expo-clipboard';

interface RCIInputProps {
    maxLength?: number;
    onCodeComplete: (code: string) => void;
    onPaste?: (code: string) => void;
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    handlePaste?: () => void;
}

const RCIInput: React.FC<RCIInputProps> = ({
    maxLength = 6,
    onCodeComplete,
    onPaste,
    label,
    placeholder,
    value,
    handlePaste,
    onChangeText,
}) => {
    
    const [code, setCode] = useState<string[]>(Array(maxLength).fill(''));
    const inputRefs = useRef<Array<TextInput | null>>([]);

    const handleInput = (text: string, index: number) => {
        const newCode = [...code];
    
        if (text) {
            // Only take the first character in case multiple characters are pasted
            newCode[index] = text[0];
            setCode(newCode);
            if (onChangeText) {
                onChangeText(newCode.join(''));
            }
            if (index < maxLength - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        } else {
            // User hits backspace
            if (index > 0) {
                newCode[index] = '';
                setCode(newCode);
                if (onChangeText) {
                    onChangeText(newCode.join(''));
                }
                inputRefs.current[index - 1]?.focus();
            } else {
                // If it's the first field, just erase
                newCode[index] = '';
                setCode(newCode);
                if (onChangeText) {
                    onChangeText(newCode.join(''));
                }
            }
        }
    };
    
    const handleKeyPress = ({ nativeEvent: { key } }: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        if (key === 'Backspace' && code[index] === '') {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    // const handlePaste = async () => {
    //     const clipboardContent = await Clipboard.getStringAsync();
    //     const pastedCode = clipboardContent.trim().slice(0, maxLength);
    //     if (/^\d+$/.test(pastedCode)) { // Assuming the code is numeric
    //         const newCode = pastedCode.split('');
    //         while (newCode.length < maxLength) {
    //             newCode.push('');
    //         }
    //         setCode(newCode);
    //         if (onPaste) {
    //             onPaste(pastedCode);
    //         }
    //         if (onChangeText) {
    //             onChangeText(pastedCode);
    //         }
    //         // Optionally, you can trigger onCodeComplete if the pasted code is complete
    //         if (pastedCode.length === maxLength) {
    //             onCodeComplete(pastedCode);
    //         }
    //     } else {
    //         Alert.alert('Invalid Code', 'The pasted content is not a valid code.');
    //     }
    // };

    useEffect(() => {
        const candidateCode = code.join('');
        if (candidateCode.length === maxLength && !code.includes('')) {
            onCodeComplete(candidateCode);
        }
    }, [code]);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.hiddenInput}
                    onChangeText={handlePaste}
                    onFocus={handlePaste} // Trigger paste when hidden input is focused
                    maxLength={maxLength}
                    autoFocus
                />
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        onChangeText={(text) => handleInput(text, index)}
                        ref={(ref) => inputRefs.current[index] = ref}
                        returnKeyType="done"
                        blurOnSubmit={false}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        marginBottom: 5,
        color: colors.primary[600],
        ...texts.H4Bold,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        width: 40,
        height: 60,
        borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        marginRight: 20,
        borderColor: colors.primary[100],
        color: colors.primary[300],
    },
    hiddenInput: {
        height: 0,
        width: 0,
        opacity: 0,
    },
    pasteButton: {
        marginTop: 10,
        alignSelf: 'center',
    },
    pasteText: {
        color: colors.primary[800],
        textDecorationLine: 'underline',
    },
});

export { RCIInput };