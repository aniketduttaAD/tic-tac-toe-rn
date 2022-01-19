import React, {ReactNode, ReactElement} from "react";
import { Text as NativeText, TextProps as NativeTextProps} from "react-native";
type TextProps = {
    weight: "400" | "600"
    children: ReactNode
} & NativeTextProps;

const defaultProps = {
    weight: "600"
}

export default function Text({ children, style, weight, ...props }: TextProps)
{
    let fontFamily;
    if (weight === "400")
    {
        fontFamily="Poppins_400Regular"
    }

    if (weight === "600")
    {
        fontFamily="Poppins_600SemiBold"
    }
    
    return (
        <NativeText {...props} style={[{ fontFamily}, style]}>
            
            {children}

        </NativeText>
    );
}

Text.defaultProps = defaultProps;