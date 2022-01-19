import React, { ReactElement, ReactNode } from "react";
import { View, Text } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import AppLoading from 'expo-app-loading';
type AppBootstrapProps = {
    children: ReactNode;
}

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement
{
    const [fontLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_400Regular
      });
    return fontLoaded ? <>{children}</> : <AppLoading/>
}