import { TextInput } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

export function Input({...rest}) {
    const [isFocused, setIsFocused] = useState(false);

    return(
        <TextInput style={[styles.input, isFocused && styles.inputFocused]} onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} {...rest}/>
    );
}