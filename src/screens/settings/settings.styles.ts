import { StyleSheet } from "react-native";
import { colors } from "@utils";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 50
    },
    field: {
        marginBottom: 30
    },
    label: {
        color: colors.periwinkle,
        fontSize: 20
    },
    choices: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        marginHorizontal: -10
    },
    choice: {
        backgroundColor: colors.lightGreen,
        padding: 12,
        margin: 5
    },
    choiceText: {
        color: colors.allthatjazz
    },
    switchField: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default styles;
