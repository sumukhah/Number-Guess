import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const CustomInput  = props => (
  <View>
    <TextInput style={{...styles.InputStyle, ...props.style}} {...props}/>
  </View>
)

const styles = StyleSheet.create({
  InputStyle:{
    borderRadius:5,
  }
})

export default CustomInput;