import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    section1: {
        flex: 0.5,
        backgroundColor: 'blue',
        borderTopColor: 'white',
        borderBottomColor: 'white',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    section2: {
        position: 'absolute',
        marginTop: 500,
        flex: 3,
        backgroundColor: 'white',
        borderRadius: 40,
        width: "100%",
        height: 400,
    },
    section3: {
        flex: 6,
    },
    textQN: {
        marginTop: 40,
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    textTT: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black',
    },
    text: {
        marginLeft: 30,
        marginTop: 200,
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
    }, button: {
        borderRadius: 10,
        marginTop: 7,
        marginLeft: 200,
        width: 150,
        height: 50,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
    },
    textND: {
        fontSize: 14,
        fontStyle: 'italic',
        marginLeft: 8,
        marginRight: 5,
        color: 'black',
        marginTop: 10,
    },
    buttonText: {
        marginLeft: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },

});