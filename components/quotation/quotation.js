import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const Quotation = ({result}) => {
    if (Object.keys(result).length === 0) return null;

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.price]}>
                <Text style={styles.span}>
                    {result.PRICE}
                </Text>
            </Text>
            <Text style={styles.text}>Highest price of the day: {' '}
                <Text style={styles.span}>
                    {result.HIGHDAY}
                </Text>
            </Text>
            <Text style={styles.text}>Lowest price of the day: {' '}
                <Text style={styles.span}>
                    {result.LOWDAY}
                </Text>
            </Text>
            <Text style={styles.text}>Variation last 24 hours: {' '}
                <Text style={styles.span}>
                    {result.CHANGEPCT24HOUR} %
                </Text>
            </Text>
            <Text style={styles.text}>Last update: {' '}
                <Text style={styles.span}>
                    {result.LASTUPDATE}
                </Text>
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5E49E2',
        padding: 20,
    },
    text: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    price: {
        fontSize: 38,
    },
    span: {
        fontFamily: 'Lato-Black',
    }
});

export default Quotation;
