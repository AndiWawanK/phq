import { StyleSheet, Dimensions } from "react-native";
import { Colors, Normalize } from "@styles";
const { width } = Dimensions.get("window");
export default StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.PRIMARY
    },
    inputBox: {
        backgroundColor: Colors.WHITE,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        borderRadius: 10,
        padding: width * 0.08
    },
    boxTitle: {
        fontSize: Normalize(18),
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: width * 0.05,
        color: Colors.BLACK
    },
    btnSigIn: {
        backgroundColor: Colors.PRIMARY
    }
})