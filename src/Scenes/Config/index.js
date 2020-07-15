import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Header } from "react-native-elements";
import styles from "./styles";

const Config = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Header
                centerComponent={{ 
                    text: 'Config Management', 
                    style: { 
                        color: '#fff' 
                    } 
                }}
                containerStyle={styles.headerContainer}
            />
        </SafeAreaView>
    )
}

export default Config;