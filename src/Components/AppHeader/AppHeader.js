import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors/Colors'

const AppHeader = props => (
  <View style={styles.HeaderStyle}>
    <Text style={styles.TextStyle}>
      Guess a Number
    </Text>
  </View>
)

const styles = StyleSheet.create({
  TextStyle:{
    fontSize: 30,
    color:"#e0fff8",
    
  },
  HeaderStyle:{
    marginTop:20,
    width:"100%",
    backgroundColor:"black",
    alignItems:'center',
    justifyContent: 'center'
  }
}) 

export default AppHeader;