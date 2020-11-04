import React, { useState } from "react";
import {
    Button,
    FlatList,
    ImageBackground,
    Keyboard,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home(props) {
    const [modalOpen, setModalOpen] = useState(false);
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

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((prevReviews) => {
            return [review, ...prevReviews];
        });
        setModalOpen(false);
    };

    const handleReviewPress = (item) => {
        props.navigation.navigate("ReviewDetails", item);
        // props.navigation.push("ReviewDetails");
    };

    return (
        <ImageBackground
            source={require("../assets/images/game_bg.png")}
            style={globalStyles.container}
        >
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.container}>
                        <ReviewForm
                            closeModal={() => setModalOpen(false)}
                            addReview={addReview}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                style={styles.modalToggle}
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleReviewPress(item)}>
                        <Card item={item} />
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        marginTop: 30,
        backgroundColor: "#fff",
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#333",
        alignSelf: "center",
    },
});
