import React from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
const FishpondCard = (props) => {
    return (
        <Card title={"#"+props.deviceKey} titleStyle={{ alignSelf: "flex-start" }}>
            <View style={{ marginBottom: 10, flexDirection: "row" }}>
                <View style={{ flex: 0.5, padding: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>Name</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <Text>:</Text>
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Text>{props.fsp_name}</Text>
                </View>
            </View>

            <View style={{ marginBottom: 10, flexDirection: "row" }}>
                <View style={{ flex: 0.5, padding: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>Config Name</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <Text>:</Text>
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Text>{props.conf_name}</Text>
                </View>
            </View>

            <View style={{ marginBottom: 10, flexDirection: "row" }}>
                <View style={{ flex: 0.5, padding: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>pH Min</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <Text>:</Text>
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Text>{props.phMin}</Text>
                </View>
            </View>
            
            <View style={{ marginBottom: 10, flexDirection: "row" }}>
                <View style={{ flex: 0.5, padding: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>pH Max</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <Text>:</Text>
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Text>{props.phMax}</Text>
                </View>
            </View>

            <View style={{ marginBottom: 10, flexDirection: "row" }}>
                <View style={{ flex: 0.5, padding: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>Curr.pH</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <Text>:</Text>
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Text>{props.curPh}</Text>
                </View>
            </View>
            <Button 
                containerStyle={{marginTop: 20}}
                buttonStyle={{backgroundColor: "#20AAAD"}}
                title="Update"
                onPress={props.onPress}/>
        </Card>
    )
}

export default FishpondCard;