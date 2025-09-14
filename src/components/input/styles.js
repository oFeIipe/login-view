import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer:{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f1f1f1ff',
        padding: 5,
        gap: 10
    },
    inputFocused:{
        borderBottomWidth: 2,
        borderColor: 'rgba(255, 215, 0, 0.5)',
    },

    icon:{
        marginLeft: 15,
    },
});