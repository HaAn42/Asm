import React from 'react';
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Chair = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section3}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
                <ImageBackground
                    source={require('../../accset/image/hoian.jpg')}
                    style={styles.image}
                >

                    <Text style={styles.text}>PHỐ CỔ HỘI AN                ⭐ 5.0</Text>
                </ImageBackground>
            </View>
            <View style={styles.section2}>
                <Text style={styles.textQN}>Quảng Nam</Text>
                <Text style={styles.textTT}>Thông Tin Chuyến Đi</Text>
                <Text style={styles.textND}>
                    Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam.
                    Phố cổ Hội An từng là một thương cảng quốc tế sầm uất,
                    gồm những di sản kiến trúc đã có từ hàng trăm năm trước,
                    được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999
                </Text>
            </View>
            <View style={styles.section1}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Đặt ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Chair;