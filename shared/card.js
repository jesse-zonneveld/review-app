import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    title: {
        fontFamily: "nunito-bold",
        fontSize: 20,
        marginBottom: 20,
    },
});
