// components/RCIInput.tsx

import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Keyboard,
    NativeSyntheticEvent,
    TextInputKeyPressEventData,
} from 'react-native';
import { Button, Symbol } from '..'; // Ensure the path is correct
import { colors } from '../../styles/colors';
import { texts } from '../../styles/texts';
// import * as Clipboard from 'expo-clipboard';

interface RCIInputProps {
    maxLength?: number;
    onCodeComplete: (code: string) => void;
    onPaste?: (code: string) => void;
}

const RCIInput: React.FC<RCIInputProps> = ({ maxLength = 6, onCodeComplete, onPaste }) => {
    const [code, setCode] = useState<string[]>(new Array(maxLength).fill(''));
    const inputRefs = useRef<TextInput[]>([]);

    const handleInput = (text: string, index: number) => {
        const newCode = [...code];
        if (text) {
            newCode[index] = text;
            setCode(newCode);
            if (index < maxLength - 1) {
                inputRefs.current[index + 1].focus();
            }
        } else {
            if (index > 0) {
                newCode[index] = '';
                setCode(newCode);
                inputRefs.current[index - 1].focus();
            } else {
                newCode[index] = '';
                setCode(newCode);
            }
        }
    };

    const handleKeyPress = (
        { nativeEvent: { key } }: NativeSyntheticEvent<TextInputKeyPressEventData>,
        index: number
    ) => {
        if (key === 'Backspace' && index > 0 && code[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    useEffect(() => {
        const candidateCode = code.join('');
        if (candidateCode.length === maxLength) {
            onCodeComplete(candidateCode);
        }
    }, [code, maxLength, onCodeComplete]);

    // const handlePaste = async () => {
    //     if (onPaste) {
    //         try {
    //             const clipboardContent = await Clipboard.getStringAsync();
    //             if (clipboardContent && clipboardContent.length === maxLength) {
    //                 const newCode = clipboardContent.split('');
    //                 setCode(newCode);
    //                 inputRefs.current[maxLength - 1].focus();
    //                 onPaste(clipboardContent);
    //             }
    //         } catch (error) {
    //             console.error('Error accessing clipboard:', error);
    //         }
    //     }
    // };

    return (
        <View style={styles.container}> {/* Change 'styles' to 'style' */}
            {code.map((digit, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    onChangeText={(text) => handleInput(text, index)}
                    ref={(ref) => {
                        if (ref) {
                            inputRefs.current[index] = ref;
                        }
                    }}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    input: {
        width: 40,
        height: 60,
        borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        marginHorizontal: 5,
        fontSize: 18,
    },
    hiddenInput: {
        height: 0,
        width: 0,
        opacity: 0,
    },
});

export { RCIInput };