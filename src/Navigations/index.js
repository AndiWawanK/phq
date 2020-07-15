import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./auth";
import AppStack from "./app";

const RootStack = createStackNavigator();
export default ({ userToken }) => {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                { userToken == null ? (
                    <RootStack.Screen
                        name="auth"
                        component={AuthStack}
                        options={{
                            animationEnabled: false
                        }}
                    />
                ) : (
                    <RootStack.Screen
                        name="app"
                        component={AppStack}
                        options={{
                            animationEnabled: false
                        }}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}