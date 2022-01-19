import { colors } from "@utils";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // marginTop: -5
    },
    difficulty: {
        color: colors.white,
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20
    },
    results: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 80
    },
    resultsBox: {
        backgroundColor: colors.black,
        borderWidth: 1,
        borderColor: colors.Red,
        alignItems: "center",
        padding: 18,
        marginHorizontal: 5
    },
    resultsTitle: {
        color: colors.white,
        fontSize: 20
    },
    resultsCount: {
        color: colors.lightPurple,
        fontSize: 20
    },
    modal: {
        position: "absolute",
        backgroundColor: colors.cyan,
        bottom: 40,
        left: 30,
        right: 30,
        padding: 30,
        borderWidth: 3,
        borderColor: colors.white
    },
    modalText: {
        color: colors.cyan,
        fontSize: 28,
        textAlign: "center",
        marginBottom: 30
    }
});

export default styles; 