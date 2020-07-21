import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import Header from './components/header/header';
import Form from './components/form/form';
import Quotation from './components/quotation/quotation';
import axios from 'axios';


const App = () => {
    const [currency, saveCurrency] = useState('');
    const [cryptocurrency, saveCryptocurrency] = useState('');

    const [consultApi, saveConsultApi] = useState(false);
    const [result, saveResult] = useState({})
    const [loading, saveLoading] = useState(false);

    useEffect(() => {
        const quationApi = async () => {
            if (consultApi) {
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
                const response = await axios.get(url);

                saveLoading(true)
                setTimeout(() => {
                    saveResult(response.data.DISPLAY[cryptocurrency][currency]);
                    saveConsultApi(false);
                    saveLoading(false)
                }, 3000)
            }
        }
        quationApi();
    }, [consultApi])

    const indicator = loading ? <ActivityIndicator size='large' color='#5E49E2'/> : <Quotation result={result}/>

    return (
        <>
            <Header/>
            <ScrollView>

                <Image
                    style={styles.image}
                    source={require('./assets/img/cryptomonedas.png')}
                />
                <View style={styles.container}>
                    <Form
                        currency={currency}
                        cryptocurrency={cryptocurrency}

                        saveCurrency={saveCurrency}
                        saveCryptocurrency={saveCryptocurrency}

                        saveConsultApi={saveConsultApi}
                    />
                </View>
                <View style={{marginTop: 40}}>
                    {indicator}
                </View>
            </ScrollView>
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
