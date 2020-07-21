import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {Picker} from '@react-native-community/picker'
import axios from 'axios';

const Form = () => {

    const [currency, saveCurrency] = useState('');
    const [cryptocurrencies, saveCryptocurrencies] = useState('');
    const [cryptocurrency, saveCryptocurrency] = useState('');

    useEffect(() => {
        const consultApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            saveCryptocurrencies(result.data.Data);
        }
        consultApi();
    }, []);

    const getCurrency = currency => {
        saveCurrency(currency)
    }

    return (
        <View>
            <Text style={styles.label}>
                Currency
            </Text>
            <Picker
                selectedValue={currency}
                onValueChange={currency => getCurrency(currency)}
            >
                <Picker.Item label='- Select -' value=''/>
                <Picker.Item label='Dollar' value='USD'/>
                <Picker.Item label='Mexican peso' value='MXN'/>
                <Picker.Item label='Euro' value='EUR'/>
                <Picker.Item label='Pound Sterling' value='GBP'/>
            </Picker>
            <Text style={styles.label}>
                Cryptocurrencies
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    }
});

export default Form;
