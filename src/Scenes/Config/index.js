import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Header, Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";

import styles from "./styles";

const Config = () => {
    return (
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
            <TouchableOpacity style={styles.fabButton} onPress={() => alert("foo")}>
                <Icon
                    name="plus"
                    size={24}
                    color="#FFF"
                />
            </TouchableOpacity>
            <ScrollView>
                <Card
                    title='HELLO WORLD'>
                    <Text style={{ marginBottom: 10 }}>The idea with React Native Elements is more about component structure than actual design.</Text>
                    <View style={styles.footerCardContainer}>
                        <View style={styles.footerCard}>
                            <Button
                                icon={
                                    <FeatherIcon
                                        name="edit"
                                        size={20}
                                        color="#555"
                                    />
                                }
                                type="outline"
                                buttonStyle={styles.btnAction}
                            />
                        </View>
                        <View style={styles.footerCard}>
                            <Button
                                icon={
                                    <FeatherIcon
                                        name="trash-2"
                                        size={20}
                                        color="#555"
                                    />
                                }
                                type="outline"
                                buttonStyle={styles.btnAction}
                            />
                        </View>
                    </View>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Config;