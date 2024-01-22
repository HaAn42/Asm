import React from 'react';
import { styles } from './styles';
import { Image, Text, View } from 'react-native';
import AuthHeader from '../../../compoment/AuthHeader';
import GoogleLogin from '../../../compoment/GoogleLogin';
import Button from '../../../compoment/button';
import Seperator from '../../../compoment/Seperator';
import Input from '../../../compoment/input';

const SignIn = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate('SignUp');
    };

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            <Input label="Email" placehoder="Example@gmail.com" />
            <Input isPassword label="Password" placehoder="*******" />
            <Button style={styles.button} title="Sign In" />
            <Seperator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>
                Don't have an account?
                <Text style={styles.footerLink} onPress={onSignUp}>
                    Sign Up
                </Text>
            </Text>
        </View>
    );
};

export default SignIn;
