import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "@scenes";

const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="signIn" 
            component={SignIn}
            options={{
                headerShown: false 
            }}
        />
    </Stack.Navigator>
)

export default AuthStack;