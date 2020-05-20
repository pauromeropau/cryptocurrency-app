import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,

  ActivityIndicator,
  View,
} from 'react-native';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import axios from 'axios';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptoMoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const resultado = await axios.get(url);

        guardarCargando(true);

        //hide loading and show result
        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
          guardarConsultarAPI(false);
          guardarCargando(false);
        }, 1000);
      }
    };

    cotizarCriptomoneda();
  }, [consultarAPI, criptomoneda, moneda]);

  //show loading or result

  const componente = cargando ? (
    <ActivityIndicator size="large" color="rgb(200,250,255)" />
  ) : (
    <Cotizacion
      resultado={resultado}
      moneda={moneda}
      criptomoneda={criptomoneda}
    />
  );

  return (
    <>
      <ScrollView style={styles.home}>
        <Header />
        <Image
          style={styles.headerImage}
          source={require('./assets/img/bitcoin.jpeg')}
        />
        <Formulario
          moneda={moneda}
          guardarMoneda={guardarMoneda}
          criptomoneda={criptomoneda}
          guardarCriptoMoneda={guardarCriptoMoneda}
          guardarConsultarAPI={guardarConsultarAPI}
        />
        <View style={styles.spinner}>{componente}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'rgb(0,14,42)',
  },
  headerImage: {
    width: '100%',
    height: 230,
  },
  sign: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: 'rgb(200,250,255)',
    marginBottom: 20,
    textAlign: 'center',
  },
  spinner: {
    marginTop: 5,
  },
});

export default App;
