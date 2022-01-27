import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    otpInputBox: {
        color: colors.lightGreen,
        fontFamily: "Poppins_600SemiBold",
        textAlign: "center",
        fontSize: 20,
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: colors.lightblack,
        borderBottomWidth: 2,
        borderColor: colors.periwinkle
    },
    otpActiveInputBox: {  
        borderWidth: 1,
        borderColor: colors.serendipity
    },
    otpText: {
        color: colors.lightGreen,
        fontSize: 20
        
    },
    resendLink: {
        color: colors.lightGreen,
        textAlign: "right",
        fontSize: 15,
        marginTop: 10,
        fontFamily:"Poppins_400Regular",
        textDecorationLine: "underline"
    }
});

export default styles;
