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
        fontSize: 24,
        textAlign: "center",
        marginBottom: 15
    },
    results: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 80
    },
    resultsBox: {
        backgroundColor: colors.black,
        borderWidth: 4,
        borderColor: colors.lightGreen,
        alignItems: "center",
        padding: 15,
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
        color: colors.white,
        fontSize: 28,
        textAlign: "center",
        marginBottom: 30
    }
});

export default styles; 