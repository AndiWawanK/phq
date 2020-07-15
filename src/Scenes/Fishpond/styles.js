import { StyleSheet, Dimensions } from "react-native";
import { Colors, Normalize } from "@styles";
const { width } = Dimensions.get("window");
export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: Colors.PRIMARY
    }
})