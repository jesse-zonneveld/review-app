import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Header({ navigation, title }) {
    const handleMenuIconPress = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.header}>
            <MaterialIcons
                name="menu"
                size={28}
                style={styles.icon}
                onPress={handleMenuIconPress}
            />
            <Image
                source={require("../assets/images/heart_logo.png")}
                style={styles.headerImage}
            />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get("screen").width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerImage: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
    icon: {
        position: "absolute",
        left: 16,
    },
});
