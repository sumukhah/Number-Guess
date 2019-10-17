import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => (
  <View style={{...styles.CardStyle, ...props.style}}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  CardStyle:{
    // borderWidth:5,
    padding:10,
    elevation:5,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:10
  },
})

export default Card;