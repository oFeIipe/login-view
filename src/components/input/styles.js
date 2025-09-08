import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer:{
        width: "90%"
    },
    input:{
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 15,
        height: 55,
        borderWidth: 1,
        borderColor: '#cccccc',
        fontWeight: '400',
        fontSize: 14,
    },
    inputFocused:{
        borderColor: '#FFD700',
    },
    inputLabel:{
        fontWeight: 700,
        paddingLeft: 8,
        paddingBottom: 6
    }
});