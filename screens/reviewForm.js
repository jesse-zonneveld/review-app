import React from "react";
import { Button, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup
        .string()
        .required()
        .test(
            "is-num-between-1-and-5",
            "Rating must be a number between 1 and 5.",
            (val) => {
                return parseInt(val) > 0 && parseInt(val) < 6;
            }
        ),
});

export default function ReviewForm(props) {
    return (
        <View style={globalStyles.container}>
            <MaterialIcons
                name="close"
                size={24}
                style={styles.modalClose}
                onPress={props.closeModal}
            />
            <Formik
                initialValues={{ title: "", rating: "", body: "" }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    props.addReview(values);
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Review Title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                            onBlur={props.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorMessage}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Rating (1 - 5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorMessage}>
                            {props.touched.rating && props.errors.rating}
                        </Text>

                        <TextInput
                            multiline
                            style={{
                                ...styles.input,
                                ...styles.multilineInput,
                            }}
                            placeholder="Write your review..."
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                            onBlur={props.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorMessage}>
                            {props.touched.body && props.errors.body}
                        </Text>
                        <FlatButton
                            title="create"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    modalClose: {
        position: "absolute",
        right: 0,
        top: 20,
        padding: 20,
    },
    form: {
        marginTop: 100,
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        borderRadius: 6,
        fontSize: 18,
        // marginBottom: 10,
    },
    multilineInput: {
        height: 100,
    },
});
