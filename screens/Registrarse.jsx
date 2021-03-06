import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput,} from 'react-native';
import SiguienteRegistrarse from "../components/SiguienteRegistrarse";
import { useNavigation } from '@react-navigation/native';


const Registrarse =({navigation})=>{
  
    return (
      
      <View>
            <Text style={styles.titulo}>Datos personales</Text>
            <TextInput style={styles.dato} placeholder="Nombre y apellido" />
            <TextInput style={styles.dato} placeholder="Numero de celular" />
            <TextInput style={styles.dato} placeholder="DD/MM/AA" />
            <TextInput style={styles.dato} placeholder="Numero de celular" />
            
            
            <Text>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>
            <TextInput type="submit" />
           
        <SiguienteRegistrarse style={styles.boton}
            text="SIGUIENTE" 
            onPress={ () =>{
            navigation.navigate('Inicio')
        }}
        />

    </View>
  );  
  }
  
  export default Registrarse
  
  const styles = StyleSheet.create({
   
    titulo: {
      padding: 15,
      marginTop:'10%',
      width: '47%'
    },
    dato: {
      fontSize: 20,
        marginTop:'10%',
        marginLeft:'10%',
        width: '80%',
        alignItems: 'center',
        borderWidth: 1,
        padding:'4%',

      },
    
   
        
  });