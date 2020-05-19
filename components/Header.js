import React from 'react';

import {Text, StyleSheet, Platform} from 'react-native';

const Header = () => <Text style={styles.header}>Crypto Currency</Text>;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    fontSize: 18,
    fontFamily: 'Lato-Black',
    color: 'rgb(200,250,255)',
    backgroundColor: 'rgb(0,14,42)',
  },
});

export default Header;
