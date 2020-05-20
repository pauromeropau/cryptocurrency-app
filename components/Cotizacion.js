import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cotizacion = ({resultado, moneda, criptomoneda}) => {
  if (Object.keys(resultado).length != 0 ) {
    return (
      <View style={styles.converted}>
        <Text style={styles.convertedTextLabelTitle}>
          {moneda} - {criptomoneda}
        </Text>
        <Text style={styles.convertedText}>1 {criptomoneda}</Text>
        <Text style={styles.convertedTextLabel}>Price</Text>
        <Text style={styles.convertedText}>{resultado.PRICE}</Text>
        <Text style={styles.convertedTextLabel}>Highest Today</Text>
        <Text style={styles.convertedText}>{resultado.HIGHDAY}</Text>
        <Text style={styles.convertedTextLabel}>Lowest Today</Text>
        <Text style={styles.convertedText}>{resultado.LOWDAY}</Text>
        <Text style={styles.convertedTextLabel}>24H Change</Text>
        <Text style={styles.convertedText}>{resultado.CHANGEPCT24HOUR} %</Text>
        <Text style={styles.convertedTextLabel}>Last Update</Text>
        <Text style={styles.convertedText}>{resultado.LASTUPDATE}</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  converted: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    padding: 25,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 50,
  },
  convertedTextLabelTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Lato-Regular',
    color: 'rgb(200,250,255)',
    marginBottom: 30,
  },
  convertedText: {
    fontSize: 22,
    fontFamily: 'Lato-Regular',
    color: 'rgb(200,250,255)',
    marginBottom: 25,
  },
  convertedTextLabel: {
    fontSize: 22,
    fontFamily: 'Lato-Black',
    color: 'rgb(200,250,255)',
    marginBottom: 5,
  },
});

export default Cotizacion;
