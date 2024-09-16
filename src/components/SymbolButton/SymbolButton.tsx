import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Symbol } from '../Symbol';
import { colors } from '../../styles/colors'
interface SymbolButtonProps {
    type: 'World' | 'Star' | 'Chip' | 'Next' | 'Back'; // Type of the symbol/icon
    color?: string; // Optional size prop
    padding?: number;
    onPress: (event: GestureResponderEvent) => void;
    style?: object; // Optional style prop
}

const SymbolButton: React.FC<SymbolButtonProps> = ({ type, color = colors.primary[100], padding = 8, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ padding }, style]}>
            <Symbol type={type} color={color} />
        </TouchableOpacity>
    );
};

export { SymbolButton };