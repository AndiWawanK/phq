import { StyleSheet, Dimensions } from "react-native";
import { Colors, Normalize } from "@styles";
const { width } = Dimensions.get("window");
export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: Colors.PRIMARY
    },
    fabButton: {
        position: 'absolute',
        width: width * 0.13,
        height: width * 0.13,
        alignItems: 'center',
        justifyContent: 'center',
        right: width * 0.05,
        bottom: width * 0.08,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 75,
        elevation: 8
    },
    footerCardContainer: {
        flex: 1,
        flexDirection: "row"
    },
    footerCard: {
        flex: 1,
        padding: width * 0.01
    },
    btnAction: {
        borderColor: Colors.PRIMARY
    }
})