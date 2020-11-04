import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FlatButton({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#f01d71",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    },
});
