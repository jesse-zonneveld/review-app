import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { images } from "../logic/imagesLogic";

export default function ReviewDetails(props) {
    const rating = props.route.params.rating;
    return (
        <View style={globalStyles.container}>
            <Text style={styles.titleText}>{props.route.params.title}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>Rating:</Text>
                <Image source={images.ratings[rating]} />
            </View>
            <Text style={globalStyles.titleText}>
                {props.route.params.body}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "nunito-bold",
        fontSize: 24,
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 40,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
        borderRadius: 5,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    ratingText: {
        fontFamily: "nunito-bold",
        fontSize: 24,
        color: "#333",
        textAlign: "center",
        paddingRight: 10,
    },
});
