// Button.tsx

import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { texts, colors } from "../../styles";
import { Icon, type IconKeys } from "../Icon";

interface ButtonProps {
  onPress: () => void;
  beforePress?: () => void;
  text?: string;
  isLoading?: boolean;
  buttonStyle?: ButtonStyleProps;
  description?: string;
  icon?: IconKeys;
  type?: "text" | "iconText" | "icon" | "caption";
  theme?: "light" | "dark";
  wrapper?: React.ReactElement; // Optional wrapper prop
}

interface ButtonStyleProps {
  variant: "primary" | "secondary" | "gradientBorder";
  size: "tiny" | "small" | "medium" | "large";
  full?: boolean;
}

// 1. Define the variants before the Button component
const variants = {
  primary: {
    light: {
      background: colors.primary[1800],
      stroke: colors.primary[800],
      text: colors.primary[100],
    },
    dark: {
      background: colors.primary[1600],
      stroke: colors.primary[1300],
      text: colors.primary[100],
    },
  },
  secondary: {
    light: {
      background: colors.primary[300],
      stroke: colors.primary[600],
      text: colors.primary[1700],
    },
    dark: {
      background: colors.primary[1000],
      stroke: colors.primary[800],
      text: colors.primary[2000],
    },
  },
  gradientBorder: {
    light: {
      background: "transparent", // For gradient border, background is transparent
      stroke: "transparent", // Changed from 'inherit' to 'transparent'
      text: colors.primary[1700],
    },
    dark: {
      background: "transparent",
      stroke: "transparent", // Changed from 'inherit' to 'transparent'
      text: colors.primary[100],
    },
  },
};

export const Button = ({
  onPress,
  beforePress,
  text = "",
  description = "",
  icon = "Analytics",
  buttonStyle = { variant: "primary", size: "medium" },
  type = "text",
  theme = "light",
  wrapper, // Use 'wrapper' directly without renaming
}: ButtonProps) => {
  const style = getStyle(buttonStyle, theme);

  const handlePress = () => {
    if (beforePress) {
      beforePress();
    }
    onPress();
  };

  const renderContent = () => {
    const iconColor = variants[buttonStyle.variant][theme].text;
    switch (type) {
      case "iconText":
        return (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {icon && (
              <View style={{ marginRight: 4 }}>
                <Icon
                  name={icon}
                  size={buttonStyle.size}
                  color={iconColor}
                />
              </View>
            )}
            {text && <Text style={style.text}>{text}</Text>}
          </View>
        );
      case "icon":
        return icon && <Icon name={icon} size={buttonStyle.size} color={iconColor} />;
      case "caption":
        return (
          <View style={{ width: "100%" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {icon && (
                <View style={{ marginRight: 8 }}>
                  <Icon
                    name={icon}
                    size={buttonStyle.size}
                    color={iconColor}
                  />
                </View>
              )}
              {text && <Text style={style.text}>{text}</Text>}
            </View>
            {description && (
              <Text style={style.description}>{description}</Text>
            )}
          </View>
        );
      case "text":
      default:
        return text && <Text style={style.text}>{text}</Text>;
    }
  };

  const isGradientBorder = buttonStyle.variant === "gradientBorder";

  if (isGradientBorder && wrapper) {
    // If variant is gradientBorder and a wrapper is provided, use the wrapper
    if (React.isValidElement(wrapper)) {
      return React.cloneElement(
        wrapper as React.ReactElement,
        { style: [style.gradientBorderContainer, wrapper.props.style] }, // Merge styles
        <TouchableOpacity style={style.innerContainer} onPress={handlePress}>
          {renderContent()}
        </TouchableOpacity>
      );
    } else {
      console.warn("Wrapper provided is not a valid React element.");
      return (
        <View style={style.gradientBorderContainer}>
          <TouchableOpacity style={style.innerContainer} onPress={handlePress}>
            {renderContent()}
          </TouchableOpacity>
        </View>
      );
    }
  } else if (isGradientBorder) {
    // If variant is gradientBorder but no wrapper is provided, fallback to a default view
    return (
      <View style={style.gradientBorderContainer}>
        <TouchableOpacity style={style.innerContainer} onPress={handlePress}>
          {renderContent()}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity style={style.container} onPress={handlePress}>
      {renderContent()}
    </TouchableOpacity>
  );
};

// Build Button Style
const getStyle = (
  { variant = "primary", size = "medium", full = false }: ButtonStyleProps,
  theme: "light" | "dark"
) => {
  const variantStyles = variants[variant]?.[theme];

  if (!variantStyles) {
    // Fallback styles
    return StyleSheet.create({
      container: {
        ...sizes[size],
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: 0,
        alignSelf: full ? "stretch" : "flex-start",
        width: full ? "100%" : undefined,
        justifyContent: "center",
        alignItems: "center",
      },
      gradientBorderContainer: {
        ...sizes[size],
        borderRadius: sizes[size].borderRadius,
        padding: 0,
        alignSelf: full ? "stretch" : "flex-start",
        width: full ? "100%" : undefined,
        justifyContent: "center",
        alignItems: "center",
      },
      innerContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        borderRadius: sizes[size].borderRadius,
        justifyContent: "center",
        alignItems: "center",
      },
      text: { ...textSizes[size], color: "black" },
      description: { ...texts.CaptionMedium, color: "black" },
    });
  }

  const { background, text, stroke } = variantStyles;

  return StyleSheet.create({
    container: {
      ...sizes[size],
      backgroundColor: background,
      borderColor: stroke,
      borderWidth: 1,
      alignSelf: full ? "stretch" : "flex-start",
      width: full ? "100%" : undefined,
      justifyContent: "center",
      alignItems: "center",
    },
    gradientBorderContainer: {
      ...sizes[size],
      borderRadius: sizes[size].borderRadius,
      padding: 1, // Controls the thickness of the gradient border
      alignSelf: full ? "stretch" : "flex-start",
      width: full ? "100%" : undefined,
      justifyContent: "center",
      alignItems: "center",
    },
    innerContainer: {
      width: "100%",
      height: "100%",
      backgroundColor:
        theme === "light" ? colors.primary[100] : colors.primary[2100], // Adjust based on theme
      borderRadius: sizes[size].borderRadius - 1, // Slightly smaller to fit inside the gradient border
      justifyContent: "center",
      alignItems: "center",
    },
    text: { ...textSizes[size], color: text },
    description: { ...texts.CaptionMedium, color: text },
  });
};

// Button Sizes
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

// Button Text Sizes
const textSizes = {
  tiny: { ...texts.buttonTiny },
  small: { ...texts.buttonSmall },
  medium: { ...texts.buttonMedium },
  large: { ...texts.buttonLarge },
};
