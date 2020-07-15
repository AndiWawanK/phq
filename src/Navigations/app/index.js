import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabStack from "../tab";
import { Search } from "@scenes";
const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="home"
            component={TabStack}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)
export default AppStack;