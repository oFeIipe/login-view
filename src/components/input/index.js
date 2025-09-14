import { TextInput, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export function Input({ style, icon, ...rest}) {
    const [isFocused, setIsFocused] = useState(false);

    return(
        <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
        <FontAwesomeIcon icon={icon} style={styles.icon} size={18} />
        <TextInput style={styles.input} onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} {...rest}/>
        </View>
    );
}