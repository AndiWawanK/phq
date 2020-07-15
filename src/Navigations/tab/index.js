import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Fishpond, Config } from "@scenes";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import AntIcon from "react-native-vector-icons/AntDesign";
import { View } from "react-native";
import { Colors } from "@styles";
const Stack = createBottomTabNavigator();

const TabStack = () => (
    <Stack.Navigator
        tabBarOptions={{
            showLabel: false,
            activeTintColor: Colors.PRIMARY,
            inactiveTintColor: Colors.GRAY_DARK,
            keyboardHidesTabBar: true,
            style: {
                padding: 5
            }
        }}>
        
        <Stack.Screen
            name="home"
            component={Home}
            options={{
                tabBarIcon: props => (
                    <AntIcon
                        name="home"
                        size={24}
                        color={props.color}
                    />
                )
            }}
        />
        <Stack.Screen
            name="fishpond"
            component={Fishpond}
            options={{
                tabBarIcon: props => (
                    <View style={{ 
                        backgroundColor: Colors.PRIMARY, 
                        padding: 13, 
                        borderRadius: 50, 
                        marginBottom: 40, 
                        borderWidth: 4, 
                        borderColor: Colors.WHITE, 
                        elevation: 5 
                    }}>
                        <AwesomeIcon
                            name="water"
                            size={24}
                            color={Colors.WHITE}
                        />
                    </View>
                    
                )
            }}
        />
        <Stack.Screen
            name="config"
            component={Config}
            options={{
                tabBarIcon: props => (
                    <AntIcon
                        name="setting"
                        size={24}
                        color={props.color}
                    />
                )
            }}
        />
            

    </Stack.Navigator>
)

export default TabStack;