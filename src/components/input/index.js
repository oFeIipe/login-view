import { TextInput, Text, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

export function Input({ labelText, style, ...rest}) {
    const [isFocused, setIsFocused] = useState(false);

    return(
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{labelText}</Text>
        <TextInput style={[styles.input, isFocused && styles.inputFocused]} onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} {...rest}/>
        </View>
    );
}