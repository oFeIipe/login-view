import { View, Text, KeyboardAvoidingView, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { router } from 'expo-router';

export default function Index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return(
        <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
            <View style={styles.container}>
                <Image style={{width: 250, height: 150}} source={require('../../assets/logo.png')} />
                <Input placeholder='Digite seu e-mail' value = {email} onChangeText={setEmail} labelText='E-mail'/>
                <Input placeholder='Digite sua senha' value = {name} onChangeText={setName} labelText='Senha'/>
                <View style={styles.botoes}>
                    <Button title='Entrar' activeOpacity={0.3} style={{width: "100%", backgroundColor: '#FFD700'}}/> 
                </View>
                <Text style={styles.cadastroText}onPress={() => {
                    router.navigate('/Cadastro');
                }
                }>É novo? Cadastre-se</Text>
            </View>
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    container:{
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1ff',
        gap: 20
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
        marginLeft: 25,
        fontSize: 15,
        fontWeight: '800',
        borderBottomWidth: 2
    }
});