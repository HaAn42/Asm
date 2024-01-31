import React from "react";
import { styles } from './style';
import { Image, Pressable, Text, View } from "react-native";

const CategoryBox = ({ title, image, onpress }) => {
    return (
        <Pressable onPress={onpress} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }}></Image>
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
};
export default React.memo(CategoryBox);