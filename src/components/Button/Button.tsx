import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native";
import { texts, colors } from "../../styles";
import { Icon, type IconKeys } from '../Icon'; // Import the Icon component

interface ButtonProps {
  onPress: () => void;
  beforePress?: () => void;
  text?: string;
  isLoading?: boolean;
  buttonStyle: ButtonStyleProps;
  description?: string;
  icon?: IconKeys;
  type?: 'text' | 'iconText' | 'icon' | 'caption';
}

interface ButtonStyleProps {
  variant: "primary" | "secondary";
  size: "tiny" | "small" | "medium" | "large";
  full?: boolean
}

export const Button = ({ onPress, beforePress, text = '', description = '', icon = 'Analytics', buttonStyle = { variant: 'primary', size: 'medium' }, type = 'text' }: ButtonProps) => {
  const style = getStyle(buttonStyle);

  const handlePress = () => {
    if (!!beforePress) {
      beforePress()
    }
    onPress()
  }

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
      case 'caption':
        return (
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginRight: 10 }}>{icon && <Icon name={icon} size={buttonStyle.size} color={variants[buttonStyle.variant].text} />}</View>
              {text && <Text style={style.text}>{text}</Text>}
            </View>
            <View>{text && <Text style={{ ...texts.CaptionMedium, color: variants[buttonStyle.variant].text }}>{description}</Text>}</View>
          </View>
        );
      case 'text':
        return text && <Text style={style.text}>{text}</Text>;
      default:
        return text && <Text style={style.text}>{text}</Text>;
    }
  };

  return (
    <TouchableOpacity style={style.container} onPress={handlePress}>
      {renderContent()}
    </TouchableOpacity>
  );
};

// Build Button Style
const getStyle = ({
  variant = "primary",
  size = "medium",
  full = false
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
      alignSelf: full ? "stretch" : "flex-start", // Conditional full width
      width: full ? '100%' : undefined, // Set width to 100% if full is true
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
