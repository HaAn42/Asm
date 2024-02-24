import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';


const Input = ({ label, placehoder, isPassword, value, onchangeText }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={value}
                    onChangeText={onchangeText}
                    secureTextEntry={isPassword && !isPasswordVisible}
                    placeholder={placehoder} style={styles.input} />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye}
                            source={isPasswordVisible
                                ? require('../../accset/icon/eye.png')
                                : require('../../accset/icon/eye_clozed.png')
                            }
                        />
                    </Pressable>
                ) : null}

            </View>
        </View >
    );
};

export default Input;
