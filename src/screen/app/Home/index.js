import React, { useState } from 'react';

import { styles } from './styles';
import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import Header from '../../../compoment/Header';
import { categories } from '../../../compoment/data/categories';
import CategoryBox from '../../../compoment/CategoryBox';

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const renderCategoryItem = ({ item, index }) => {
        return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>
    };
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch
                    onSearch={setKeyword}
                    keyword={keyword}
                    title={"Find All Your Need"}>
                </Header>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}
                    horizontal
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item, index) => String(index)}
                >
                </FlatList>
            </ScrollView>
        </SafeAreaView>

    )
};

export default React.memo(Home);