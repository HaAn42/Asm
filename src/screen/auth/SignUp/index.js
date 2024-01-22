import React, { useState } from 'react';
import { styles } from './styles';
import { Image, Text, View } from 'react-native';
import AuthHeader from '../../../compoment/AuthHeader';
import Input from '../../../compoment/input';
import CheckBox from '../../../compoment/checkbox';
import Button from '../../../compoment/button';
import Seperator from '../../../compoment/Seperator';
import GoogleLogin from '../../../compoment/GoogleLogin';

const SignUp = () => {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"></AuthHeader>
            <Input label="Name" placehoder="Example Jonh" />
            <Input label="Email" placehoder="Exemple@gmail.com" />
            <Input isPassword label="Password" placehoder="*******" />
            <View style={styles.checkRow}>
                <CheckBox checked={checked} onCheck={setChecked}></CheckBox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button
                style={styles.button} title="Sign Up"></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Already have an account?
                <Text style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View >
    );
};

export default SignUp;