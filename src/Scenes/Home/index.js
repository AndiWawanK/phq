import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Header } from "react-native-elements";
import styles from "./styles";

const Home = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Header
                centerComponent={{ 
                    text: 'pHq', 
                    style: { 
                        color: '#fff',
                        fontSize: 18
                    } 
                }}
                containerStyle={styles.headerContainer}
            />
        </SafeAreaView>
    )
}

export default Home;