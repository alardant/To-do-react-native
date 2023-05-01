import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "@screens/Home";
import ToDoCreate from "@screens/ToDoCreate";

export default function Navigation() {

    const rootStack = createStackNavigator();

    return (
        <NavigationContainer>
            <rootStack.Navigator screenOptions={{ presentation: "modal" }}>
                <rootStack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }} />
                <rootStack.Screen
                    name="ToDoCreate"
                    component={ToDoCreate}
                    options={{ headerShown: false }} />
            </rootStack.Navigator>
        </NavigationContainer>
    );
}