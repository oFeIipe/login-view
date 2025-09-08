import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles";

export function Button({ title, style, ...rest }){

    return(
        <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}