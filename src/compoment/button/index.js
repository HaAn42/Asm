import React from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native'; // Thêm import cho TouchableOpacity
import { styles } from './styles';

const Button1 = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity
            activeOpacity="0.6"
            onPress={onPress}
            style={[styles.button, style]}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button1);
