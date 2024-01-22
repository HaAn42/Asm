import React from 'react';

import { styles } from './styles';
import { SafeAreaView, ScrollView, Text } from 'react-native';

const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>
                    Favorites
                </Text>
            </ScrollView>
        </SafeAreaView>

    )
};

export default React.memo(Profile);