import { StyleSheet, Dimensions } from "react-native";
import { Colors, Normalize } from "@styles";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1
    },
    appBarContainer: {
        backgroundColor: Colors.PRIMARY
    },
    modalContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
    },
    modalContentContainer: {
        width: width * 0.9,
        padding: width * 0.05,
        borderRadius: 5,
        backgroundColor: Colors.WHITE
    },
    modalTitle: {
        textAlign: "center",
        fontSize: Normalize(14),
        fontWeight: "bold",
        marginBottom: width * 0.08
    },
    btnModal: {
        backgroundColor: Colors.PRIMARY
    },
    btnModalCancel: {
        marginTop: width * 0.02,
        borderColor: Colors.PRIMARY,
        marginBottom: width * 0.02
    }
})