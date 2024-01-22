import React from 'react';
import { Alert, View, Text, TouchableOpacity, Image } from 'react-native'; // Thêm import cho TouchableOpacity
import { styles } from './styles';

const CheckBox = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => onCheck(!checked)}
            style={styles.container}
        >
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.checkIcon}
                        source={require('../../accset/icon/check.png')}>
                    </Image>
                </View>
            ) : null}
        </TouchableOpacity>
    );
};

export default React.memo(CheckBox);
