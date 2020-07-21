import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import AuthStack from "./auth";
import AppStack from "./app";

const RootStack = createStackNavigator();

const LoadingActivity = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#20AAAD" />
        <Text style={{ marginTop: "5%" }}>Please wait</Text>
    </View>
)

const Switch = (props) => (
    <RootStack.Navigator headerMode="none">
        {props.userToken == null ? (
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
)

export default ({ userToken }) => {
    const [ isLoading, setLoading ] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    
    return (
        <NavigationContainer>
            {
                isLoading
                ? <LoadingActivity/>
                : <Switch userToken={userToken}/>
            }
        </NavigationContainer>
    )
}