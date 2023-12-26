import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import texts from "../../styles/texts";
import colors from "../../styles/colors";
import { Icon, IconKeys } from '../Icon/Icon'; // Import the Icon component

interface ButtonProps {
  onPress: () => void;
  text?: string;
  isLoading?: boolean;
  buttonStyle: ButtonStyleProps;
  icon?: IconKeys;
  type?: 'text' | 'iconText' | 'icon';
}

interface ButtonStyleProps {
  variant: "primary" | "secondary";
  size: "tiny" | "small" | "medium" | "large";
}

export const Button = ({ onPress, text, icon = 'Analytics', buttonStyle = { variant: 'primary', size: 'medium' }, type = 'text' }: ButtonProps) => {
  const style = getStyle(buttonStyle);

  const renderContent = () => {
    switch (type) {
      case 'iconText':
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {icon && <Icon name={icon} size={buttonStyle.size} color={variants[buttonStyle.variant].text} />}
            {text && <Text style={style.text}>{text}</Text>}
          </View>
        );
      case 'icon':
        return icon && <Icon name={icon} size={buttonStyle.size} color={variants[buttonStyle.variant].text} />;
      case 'text':
      default:
        return text && <Text style={style.text}>{text}</Text>;
    }
  };

  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      {renderContent()}
    </TouchableOpacity>
  );
};

// Build Button Style
const getStyle = ({
  variant = "primary",
  size = "medium",
}: ButtonStyleProps) => {
  const backgroundColor = variants[variant].background || variants.primary.background;
  const textColor = variants[variant].text || variants.primary.text;
  const strokeColor = variants[variant].stroke || variants.primary.stroke;
  const sizeBase = sizes[size] || sizes.medium;
  const textSize = textSizes[size]

  return StyleSheet.create({
    container: {
      ...sizeBase,
      backgroundColor,
      borderColor: strokeColor,
      borderWidth: 1,
      alignSelf: "flex-start",
    },
    text: { ...textSize, color: textColor },
  });
};


// Button Styles
const sizes = {
  tiny: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  small: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  large: {
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderRadius: 12,
  },
};

const textSizes = {
  tiny: { ...texts.buttonTiny },
  small: { ...texts.buttonSmall },
  medium: { ...texts.buttonMedium },
  large: { ...texts.buttonLarge }
};

const variants = {
  primary: {
    background: colors.primary[2100],
    stroke: colors.primary[2100],
    text: colors.primary[100],
  },
  secondary: {
    background: colors.primary[300],
    stroke: colors.primary[600],
    text: colors.primary[1700],
  },
};
