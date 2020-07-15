import { StyleSheet, Dimensions } from "react-native";
import { Colors, Normalize } from "@styles";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY
    },
    itemSearchBar: {
        height: 40,
        borderRadius: 75,
        backgroundColor: Colors.WHITE,
        borderColor: 'transparent'
    },
    inputSearchBar: {
        paddingLeft: width * 0.04
    },
    iconClose: {
        color: "#555555",
        fontSize: Normalize(18)
    }
})