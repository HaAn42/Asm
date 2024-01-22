import React from "react";
import { styles } from './styles';
import { Image, Text, TouchableOpacity, View } from "react-native";

const GoogleLogin = ({ text }) => {
    return (
        <TouchableOpacity
            activeOpacity='0.6'
            style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../accset/icon/google.png')}>
            </Image>
        </TouchableOpacity>
    )
};
export default React.memo(GoogleLogin);