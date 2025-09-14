import { View, Text, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { router } from 'expo-router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import { styles } from '../appStyles/styles';

export default function Cadastro(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    return(
        <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
            <View style={styles.container}>
               <Text style={styles.title}>Cadastro</Text>
                <Input placeholder='Nome' icon={faUser} value = {name} onChangeText={setName}/>
                <Input placeholder='E-mail' icon={faEnvelope} value = {email} onChangeText={setEmail}/>
                <Input placeholder='Senha' icon={faKey} value = {senha} onChangeText={setSenha} /> 
                <Input placeholder='Confirme a senha' icon={faKey} value = {confirmaSenha} onChangeText={setConfirmaSenha} /> 
                <View style={styles.botao}>
                    <Button title='Registrar' activeOpacity={0.3} style={{width: "100%", backgroundColor: '#FFD700'}}/> 
                </View>
                <Text style={styles.cadastroText}onPress={() => {
                    router.back();
                }
                }>Já possui conta? Faça login</Text>
            </View>
        </KeyboardAvoidingView>
    )
}