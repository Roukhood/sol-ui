import React from "react";
import { Pressable , PressableProps,  StyleSheet  , ViewProps} from "react-native";

type ButtonProps = PressableProps &  ViewProps & {
    className ? : string,
}

export const Button = ({ className, children , ...props}: ButtonProps) =>{
    return(
        <Pressable className={className}  {...props}  style={[style.button , props.style]}>
                {
                    children
                }
        </Pressable>
    )
}


const style = StyleSheet.create({
button:{
    borderWidth: 0.5,
    borderColor: "gray" ,
    borderRadius: 10,
    width: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10, 
}
})