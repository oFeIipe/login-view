import { View, Text, KeyboardAvoidingView, Image } from 'react-native';
import { useState } from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { router } from 'expo-router';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { styles } from '../appStyles/styles';

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
            <View style={styles.container}>
                <Image style={{width: 250, height: 150}} source={require('../../assets/logo.png')} />
                <Input placeholder='E-mail' value = {email} onChangeText={setEmail} icon={faEnvelope}/>
                <Input placeholder='Senha' value = {password} icon={faKey} onChangeText={setPassword} secureTextEntry/>
                <View style={styles.botao}>
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