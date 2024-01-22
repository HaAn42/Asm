import React from 'react';
import { Text, View, StyleSheet as RNStyleSheet, Button } from 'react-native';

import { styles } from './styles';
import Button1 from '../../compoment/button';
import Input from '../../compoment/input';


const Lab3 = () => (
    <View style={styles.container}>
        <Text style={styles.baseText}>
            Em vào đời bằng{' '}
            <Text style={[styles.boldText, { color: 'red' }]}>
                Vang đỏ
            </Text>
            , anh vào đời bằng{' '}
            <Text style={[styles.boldText, { color: 'yellow' }]}>
                nước trà
            </Text>
        </Text>
        {''}
        <Text style={styles.baseText}>
            Bằng cơn mưa thơm{' '}
            <Text style={[styles.boldText, { fontSize: 20 }, styles.italicText]}>
                Mùi đất {''}
            </Text>{''}
            và{' '}
            <Text style={[{ fontSize: 20 }, styles.italicText]}>
                bằng hoa dại mọc trước nhà
            </Text>
        </Text>
        {''}
        <Text style={[styles.baseText, styles.boldText, styles.italicText, { color: 'gray' }]}>
            Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>
        {''}
        <Text style={styles.baseText}>
            Lí trí em là{' '}
            <Text style={{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }}>
                {''}Công cụ{' '}
            </Text>
            còn trái tim anh là
            <Text style={[{ fontSize: 20 }, styles.italicText]}>
                bằng hoa dại mọc trước nhà
            </Text>
        </Text>
        <Button1 style={styles.button}></Button1>
        <Input style={styles.input}> </Input>
    </View >
);


export default Lab3;
