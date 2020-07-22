import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

export default () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#20AAAD" />
        <Text style={{ marginTop: "5%" }}>Please wait</Text>
    </View>
)