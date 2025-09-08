import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        gap: 20
    },
     topTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        backgroundColor: 'transparent'
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        gap: 11
    },
    cadastroText: {
        alignSelf: 'flex-start',
        marginLeft: 28,
        fontWeight: '800',
        borderBottomWidth: 2
    }
});