import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@styles";
const { width } = Dimensions.get("window");
 
export default StyleSheet.create({
    footerCardContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: width * 0.02
    },
    footerCard: {
        flex: 1,
        padding: width * 0.01
    },
    btnAction: {
        borderColor: Colors.PRIMARY
    }
})