import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Text, StyleSheet, View, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Formulario = ({
  moneda,
  guardarMoneda,
  criptomoneda,
  guardarCriptoMoneda,
  guardarConsultarAPI,
}) => {
  const [criptomonedas, guardarCriptoMonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);

      guardarCriptoMonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const obtenerMoneda = moneda => {
    guardarMoneda(moneda);
  };

  const obtenerCriptomoneda = cripto => {
    guardarCriptoMoneda(cripto);
  };

  const cotizarPrecio = () => {
    if (moneda.trim() === '' || criptomoneda.trim() === '') {
      mostrarAlerta();
      return;
    }
    guardarConsultarAPI(true);
  };

  const mostrarAlerta = () => {
    Alert.alert('Ops!', 'Both fields are required', [{text: 'Retry'}]);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.pickerContainer}>
        <Text style={styles.formTitle}>Coin</Text>
        <Picker
          style={styles.picker}
          onValueChange={moneda => obtenerMoneda(moneda)}
          selectedValue={moneda}>
          <Picker.Item label="- Select -" value=" " color="rgb(200,250,255)" />
          <Picker.Item
            label="AUD - Australian Dollar"
            value="AUD"
            color="rgb(200,250,255)"
          />
          <Picker.Item
            label="CAD - Canadian Dollar"
            value="CAD"
            color="rgb(200,250,255)"
          />
          <Picker.Item
            label="EUR - Euro"
            value="EUR"
            color="rgb(200,250,255)"
          />
          <Picker.Item
            label="GBP - Great British Pound"
            value="GBP"
            color="rgb(200,250,255)"
          />
          <Picker.Item
            label="JPY - Japanese Yen"
            value="JPY"
            color="rgb(200,250,255)"
          />
          <Picker.Item
            label="CHF - Swiss Franc"
            value="CHF"
            color="rgb(200,250,255)"
          />
          <Picker.Item
            label="USD - US Dollar"
            value="USD"
            color="rgb(200,250,255)"
          />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.formTitle}>Crypto</Text>
        <Picker
          style={styles.picker}
          onValueChange={cripto => obtenerCriptomoneda(cripto)}
          selectedValue={criptomoneda}>
          <Picker.Item label="- Select -" value=" " color="rgb(200,250,255)" />

          {criptomonedas.map(cripto => (
            <Picker.Item
              key={cripto.CoinInfo.Id}
              label={cripto.CoinInfo.FullName}
              value={cripto.CoinInfo.Name}
              color="rgb(200,250,255)"
            />
          ))}
        </Picker>
      </View>
      <View style={styles.btnConvertContainer}>
        <TouchableHighlight style={styles.btnConvert} onPress={cotizarPrecio}>
          <Text style={styles.btnConvertText}>Convert</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
  formTitle: {
    fontSize: 22,
    fontFamily: 'Lato-Regular',
    color: 'rgb(200,250,255)',
    textAlign: 'center',
    padding: 10,
  },
  picker: {
    width: '90%',
    margin: 10,
    height: 200,
  },
  pickerContainer: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    padding: 5,
    marginVertical: '2%',
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnConvertContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 50,
  },
  btnConvert: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'rgb(181,254,254)',
    borderRadius: 10,
  },
  btnConvertText: {
    fontSize: 24,
    fontFamily: 'Lato-Black',
    color: 'rgb(0,14,42)',
    textAlign: 'center',
    padding: 15,
  },
});

export default Formulario;
