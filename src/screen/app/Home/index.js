import React, { useState } from 'react';

import { styles } from './styles';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import Header from '../../../compoment/Header';

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    return (
        <SafeAreaView>
            <Header showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title={"Find All Your Need"}>
            </Header>

            <ScrollView style={styles.container}>
                <Text>
                    Home
                </Text>
            </ScrollView>
        </SafeAreaView>

    )
};

export default React.memo(Home);