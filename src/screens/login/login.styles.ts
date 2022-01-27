import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    registerLink: {
        color: colors.periwinkle,
        textAlign: "right",
        fontFamily: "Poppins_400Regular",
        marginTop: 30,
        // letterSpacing: 1,
        textDecorationLine: "underline"
    },
    forgotPasswordLink: {
        color: colors.periwinkle,
        textAlign: "right",
        fontFamily: "Poppins_400Regular",
        // letterSpacing: 0,
        fontSize:15,
        // marginTop: 30,
        // marginBottom: 20,
        textDecorationLine: "underline"
    }
});

export default styles;
