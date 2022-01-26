import { colors } from "@utils";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 5
    },
    logo: {
    alignSelf: "center",
    height: 380, 
    maxWidth: "80%",
    resizeMode: "contain"
    },
    buttons: {
        marginTop:50,
    },
    button: {
        marginBottom:10,
    },
    loggedInText: {
        color: colors.lightGreen,
        textAlign: "center",
        fontSize: 12
    }
});

export default styles;