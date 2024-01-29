import React from 'react';
import { ImageBackground, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';


const Lab5 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                source={require('../../accset/image/bachgrout.jpg')}
                style={styles.image}
            >
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.f}>Discover {'\n'}</Text>
                        <Text style={styles.secondLine}>world with us</Text>
                    </Text>
                    <Text style={styles.textStyle}>Discoer world with us</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Get started</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
};

export default Lab5;
