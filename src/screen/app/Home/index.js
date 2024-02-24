import React, { useEffect, useState } from 'react';

import { styles } from './styles';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../compoment/Header';
import { categories } from '../../../compoment/data/categories';
import CategoryBox from '../../../compoment/CategoryBox';
import ProductHomeItem from '../../../compoment/ProductHomeItem';
import { products } from '../../../compoment/data/product';

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const [filteredProducts, setFilterProducta] = useState(products);
    const [selectedCategory, setselectedCategory] = useState();
    console.log('key', keyword);

    useEffect(() => {
        if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProduct(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProduct(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProduct(updatedProducts);
        } else if (keyword && selectedCategory) {
            setFilteredProduct(products);
        }
    }, [selectedCategory, keyword])
    const renderCategoryItem = ({ item, index }) => {
        return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>
    };
    const renderProductItem = ({ item }) => {
        return <ProductHomeItem {...item} />;
    }
    return (
        <SafeAreaView>
            {/* <ScrollView style={styles.container}> */}
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
            <FlatList
                style={styles.productList}
                numColumns={2}
                data={products}
                renderItem={renderProductItem}
                keyExtractor={item => String(item.id)}
            />
            <FlatList
                style={styles.productList}
                numColumns={2}
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={item => String(item.id)}
                ListFooterComponent={<View style={{ height: 200 }} />}
            />


            {/* </ScrollView> */}
        </SafeAreaView>

    )
};

export default React.memo(Home);