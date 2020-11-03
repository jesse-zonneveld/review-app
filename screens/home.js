import React, { useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function Home(props) {
    const [reviews, setReviews] = useState([
        {
            title: "Zelda, Breath of Fresh Air",
            rating: 5,
            body: "lorem ipsum",
            key: "1",
        },
        {
            title: "Gotta Catch Them All (again)",
            rating: 4,
            body: "lorem ipsum",
            key: "2",
        },
        {
            title: 'Not So "Final" Fantasy',
            rating: 3,
            body: "lorem ipsum",
            key: "3",
        },
    ]);

    const handleReviewPress = (item) => {
        props.navigation.navigate("ReviewDetails", item);
        // props.navigation.push("ReviewDetails");
    };

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleReviewPress(item)}>
                        <Card item={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
