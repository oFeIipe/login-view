import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles";

export function Button({ title, ...rest }){

    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}