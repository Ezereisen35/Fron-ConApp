import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

  const BotonContratar = () => {
    
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={BotonContratar}
        style={styles.roundButton1}>
        <Text>Poner imagen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BotonContratar;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },

});