import React from 'react';
import { styles } from './styles';
import { Image, Pressable, Text, View } from 'react-native';
import Button1 from '../../../compoment/button';

const Splash = ({ navigation }) => {
    return (
        <View>
            <Image
                style={styles.img}
                source={require('../../../accset/image/splash.jpg')}
            ></Image>
            <Text style={styles.textsize}>
                You'll Find
            </Text>
            <Text style={styles.textsize1}>
                All you need
            </Text>
            <Text style={styles.textsize}>
                Here!
            </Text>
            <Button1
                onPress={() => navigation.navigate('SignUp')}
                title="Sign Up"
            ></Button1>
            <Pressable
                onPress={() => navigation.navigate('SignIn')}>
                <Text
                    style={styles.textsize2}>
                    Sign In
                </Text>
            </Pressable>
        </View>
    );
};

export default Splash;
