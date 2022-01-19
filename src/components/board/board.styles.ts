import { StyleSheet } from "react-native";
import { colors } from "@utils";

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        width: '33.3333%',
        height: '33.3333%',
        borderWidth: 3,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellText: {
        color: colors.white
    },
    cell0:
    {
        borderTopWidth: 0,
        borderLeftWidth: 0,
    },
    cell1:
    {
        borderTopWidth: 0,
    },
    cell2:
    {
        borderTopWidth: 0,
        borderRightWidth: 0,
    },
    cell3:
    {
        borderLeftWidth: 0,
    },
    cell5:
    {
        borderRightWidth: 0,
    },
    cell6:
    {
        borderLeftWidth: 0,
        borderBottomWidth: 0,
    },
    cell7:
    {
        borderBottomWidth: 0,
    },
    cell8:
    {
        borderBottomWidth: 0,
        borderRightWidth: 0,
    },
});

export default styles;