import React from 'react';
import { styles } from './styles';
import { Image, Text, View } from 'react-native';
import AuthHeader from '../../../compoment/AuthHeader';
import GoogleLogin from '../../../compoment/GoogleLogin';
import Button from '../../../compoment/button';
import Seperator from '../../../compoment/Seperator';
import Checkbox from '../../../compoment/checkbox';
import Input from '../../../compoment/input';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In"></AuthHeader>
            <Input label="Email" placehoder="Exemple@gmail.com" />
            <Input isPassword label="Password" placehoder="*******" />
            <Button style={styles.button} title="Sign Up"></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Don't have an account?
                <Text style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View >
    );
};

export default SignIn;
