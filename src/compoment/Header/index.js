import React, { useState } from "react";
import { styles } from './styles';
import { Image, Pressable, Text, View } from "react-native";
import Input from "../input";

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../accset/icon/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../../accset/icon/search.png')} />
                    </Pressable>
                ) : <View style={styles.spce} />}
                <Text style={styles.title}>{title}</Text>
                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../accset/icon/logout.png')} />
                    </Pressable>
                ) : <View style={styles.spce} />
                }
            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placehoder="Type your keyword ..." />

            ) : null}
        </View>
    )
}
export default React.memo(Header);