import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Alert
} from 'react-native';
import {Picker} from '@react-native-community/picker'
import axios from 'axios';

const Form = ({
                  currency,
                  cryptocurrency,
                  saveCurrency,
                  saveCryptocurrency,
                  saveConsultApi
              }) => {

    const [cryptocurrencies, saveCryptocurrencies] = useState([]);

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

    const getCryptocurrencies = cryptocurrencies => {
        saveCryptocurrency(cryptocurrencies)
    }

    const showAlert = () => {
        Alert.alert(
            'Error',
            'Both fields are mandatory',
            [{text: 'ok'}]
        )
    }

    const quotePrice = () => {
        if (currency.trim() === '' || cryptocurrency.trim() === '') {
            showAlert();
            return;
        }
        saveConsultApi(true);
    }

    return (
        <View>
            <Text style={styles.label}>
                Currency
            </Text>
            <Picker
                selectedValue={currency}
                onValueChange={currency => getCurrency(currency)}
                itemStyle={{height: 120}}
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
            <Picker
                selectedValue={cryptocurrency}
                onValueChange={cryptocurrency => getCryptocurrencies(cryptocurrency)}
                itemStyle={{height: 120}}
            >
                <Picker.Item label='- Select -' value=''/>
                {
                    cryptocurrencies.map(crypto => (
                        <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName}
                                     value={crypto.CoinInfo.Name}/>
                    ))
                }
            </Picker>
            <TouchableHighlight
                style={styles.quote}
                onPress={() => quotePrice()}
            >
                <Text
                    style={styles.quoteText}
                >Quote</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    quote: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20,
    },
    quoteText: {
        color: '#fff',
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
    }
});

export default Form;
