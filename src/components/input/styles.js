import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input:{
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 20,
        width: "90%",
        height: 60,
        borderWidth: 0.5,
        borderColor: '#cccccc',
        fontSize: 16,
    },
    inputFocused:{
        borderColor: '#6200ee',
        borderWidth: 1,
        // Sombra para iOS
        shadowColor: 'rgba(98, 0, 238, 0.5)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        // Sombra para Android
        elevation: 5,
    }
});