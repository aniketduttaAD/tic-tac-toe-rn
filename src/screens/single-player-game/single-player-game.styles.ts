import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop:25
    },
    difficulty: {
        color: colors.lightGreen,
        fontSize: 26,
        textAlign: "center",
        marginBottom: 10
    },
    results: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 75
    },
    resultsBox: {
        backgroundColor: colors.black,
        borderWidth: 5,
        borderColor: colors.lightGreen,
        alignItems: "center",
        padding: 16,
        marginHorizontal: 5
    },
    resultsTitle: {
        color: colors.white,
        fontSize: 20
    },
    resultsCount: {
        color: colors.lightPurple,
        fontSize: 22
    },
    modal: {
        position: "absolute",
        backgroundColor: colors.allthatjazz,
        bottom: 15,
        left: 50,
        right: 50,
        padding: 22,
        borderWidth: 3,
        borderColor: colors.white
    },
    modalText: {
        color: colors.white,
        fontSize: 35,
        textAlign: "center",
        marginBottom: 20
    }
});

export default styles; 