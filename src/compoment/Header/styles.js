import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        mainContainer: {
            paddingHorizontal: 24,
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 8,
        },
        title: {
            color: '#303030',
            fontSize: 16,
            fontWeight: 'bold',
        },
        spce: {
            width: 24,
        },
        icon: {
            width: 24,
            height: 24,
        },
        input: {
            backgroundColor: 'blue',
        }
    }
);