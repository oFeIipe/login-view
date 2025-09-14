import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1ff',
        gap: 20
    },
    botao:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '95%',
        paddingHorizontal: 20,
        gap: 11,
    },
    cadastroText: {
        alignSelf: 'flex-start',
        marginLeft: 25,
        fontSize: 15,
        fontWeight: '600',
        borderBottomWidth: 2
    },
    title:{
        fontSize: 25, 
        fontWeight: '700' 
    },
});