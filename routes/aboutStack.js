import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../shared/header";
import About from "../screens/about";

const homeStack = ({ navigation }) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4caf50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerTitle: () => (
                        <Header navigation={navigation} title="About" />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default homeStack;
