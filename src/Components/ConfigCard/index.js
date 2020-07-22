import React from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import FeatherIcon from "react-native-vector-icons/Feather";
import styles from "./styles";

export default (props) => {
    return (
        <Card title={props.title} titleStyle={{alignSelf: "flex-start"}}>
            <View style={{flex: 1, flexDirection: "row", marginBottom: 10}}>
                <Text><Text style={{fontWeight: "bold"}}>pH min : </Text> {props.phMin}</Text>
                <Text> | </Text>
                <Text><Text style={{fontWeight: "bold"}}>pH max : </Text> {props.phMax}</Text>
            </View>
            <Text>{props.note}</Text>
            <View style={styles.footerCardContainer}>
                <View style={styles.footerCard}>
                    <Button
                        title="Update"
                        titleStyle={{color: "#555"}}
                        icon={
                            <FeatherIcon
                                name="settings"
                                size={15}
                                color="#555"
                                style={{marginRight: 10}}
                            />
                        }
                        type="outline"
                        buttonStyle={styles.btnAction}
                        onPress={props.onEdit}
                    />
                </View>
                <View style={styles.footerCard}>
                    <Button
                        title="Delete"
                        titleStyle={{color: "#555"}}
                        icon={
                            <FeatherIcon
                                name="trash-2"
                                size={15}
                                color="#555"
                                style={{marginRight: 10}}
                            />
                        }
                        type="outline"
                        buttonStyle={styles.btnAction}
                        onPress={props.onDelete}
                    />
                </View>
            </View>
        </Card>
    )
}