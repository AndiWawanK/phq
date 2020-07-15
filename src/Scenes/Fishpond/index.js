import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Header } from "react-native-elements";
import styles from "./styles";

const Fishpond = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Header
                centerComponent={{ 
                    text: 'Fishpond', 
                    style: { 
                        color: '#fff' 
                    } 
                }}
                containerStyle={styles.headerContainer}
            />
        </SafeAreaView>
    )
}

export default Fishpond;