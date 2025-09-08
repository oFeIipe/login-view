import { View, Text, KeyboardAvoidingView, BackHandler, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { styles } from './styles';


export default function Index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleBackHandler = () =>{
        Alert.alert('Atenção', 'Você tem certeza que deseja sair?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Sair',
                    style: 'destructive',
                    onPress: () => BackHandler.exitApp()
                }
            ]
        )
    }

    return(
        <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
            <Text style={styles.topTitle}>Login</Text>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Bem vindo!
                </Text>
                <Input placeholder='E-mail' value = {email} onChangeText={setEmail}/>
                <Input placeholder='Senha' value = {name} onChangeText={setName}/>
                <View style={styles.botoes}>
                    <Button title='Entrar' activeOpacity={0.3}/> 
                    <Button title='Sair' activeOpacity={0.3} onPress={handleBackHandler}/>
                </View>
                <Text style={styles.cadastroText}onPress={() => {
                    console.log("Hello world");
                }
                }>É novo? Cadastre-se</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

