import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    titleText: {
        fontFamily: "nunito-bold",
        fontSize: 24,
        color: "#333",
        textAlign: "center",
        padding: 24,
    },
    paragraph: {
        marginVertical: 10,
        lineHeight: 20,
    },
    errorMessage: {
        color: "red",
        fontWeight: "bold",
        marginBottom: 10,
    },
});
