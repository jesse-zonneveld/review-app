import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { AppNavigator } from "./routes/drawer";

export default function App() {
    let [fontsLoaded] = useFonts({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
        "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    });

    if (fontsLoaded) {
        return <AppNavigator />;
    } else {
        return <AppLoading />;
    }
}
