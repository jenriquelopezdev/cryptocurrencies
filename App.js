import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    StatusBar,
} from 'react-native';

import Header from './components/header/header';
import Form from "./components/form/form";


const App = () => {
    return (
        <>
            <Header/>
            <Image
                style={styles.image}
                source={require('./assets/img/cryptomonedas.png')}
            />
            <View style={styles.container}>
                <Form/>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        marginHorizontal: '2.5%'
    },
    container: {
        marginHorizontal: '2.5%'
    }
});

export default App;
